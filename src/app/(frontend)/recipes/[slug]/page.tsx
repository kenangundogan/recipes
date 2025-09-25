import type { Metadata } from 'next'
import type {
  Recipe,
  Media,
  Ingredient,
  IngredientUnit,
  Nutrient,
  CookingMethod,
  DifficultyLevel,
  DietType,
  Season,
  Region,
  Month,
  City,
} from '@/payload-types'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { formatDateTime } from '@/utilities/formatDateTime'
import { ClockIcon, CookingPotIcon, HandPlatterIcon } from 'lucide-react'

// Extended types for populated data
type PopulatedAuthor = {
  id?: string | null
  name?: string | null
  firstName?: string
  lastName?: string
  profilePicture?: Media | null
}

type PopulatedRecipe = Omit<
  Recipe,
  | 'populatedAuthors'
  | 'ingredients'
  | 'nutritionValues'
  | 'instructions'
  | 'cookingMethod'
  | 'difficulty'
  | 'dietTypes'
  | 'seasons'
  | 'regions'
  | 'relatedRecipes'
> & {
  populatedAuthors?: PopulatedAuthor[] | null
  ingredients: (Omit<Recipe['ingredients'][0], 'ingredient' | 'unit'> & {
    ingredient: Ingredient
    unit: IngredientUnit
  })[]
  instructions: (Omit<Recipe['instructions'][0], 'step' | 'tip'> & {
    step?: string | null
    tip?: string | null
  })[]
  nutritionValues: (Omit<Recipe['nutritionValues'][0], 'nutrient'> & {
    nutrient: Nutrient
  })[]
  heroImage?: Media | null
  cookingMethod: CookingMethod[]
  difficulty: DifficultyLevel
  dietTypes: DietType[]
  seasons: (Omit<Season, 'months'> & { months: Month[] })[]
  regions: (Omit<Region, 'cities'> & { cities: City[] })[]
  relatedRecipes: (Recipe & { meta?: { image?: Media | null } })[]
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const recipes = await payload.find({
    collection: 'recipes',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = recipes.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Recipe({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/recipes/' + slug
  const recipe = await queryRecipesBySlug({ slug })

  if (!recipe) return <PayloadRedirects url={url} />

  const typedRecipe = recipe as PopulatedRecipe

  return (
    <article>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="w-full relative -mt-[--header-height] h-[calc(100vh-var(--payload-admin-bar-height))] overflow-hidden mb-8">
        <div className="absolute z-10 bottom-0 left-0 w-full p-8 text-white">
          <div className="w-full max-w-3xl m-auto flex flex-col gap-4 p-8">
            {/* Title and Description */}
            <div className="flex flex-col gap-4">
              <h2 className="text-7xl font-bold">{typedRecipe.title}</h2>
              <p className="text-sm">{typedRecipe.meta?.description}</p>
            </div>

            {/* Serving, PrepTime, CookTime */}
            <div className="flex flex-wrap gap-4">
              <div className="w-full flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <HandPlatterIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Servis</p>
                    <p className="text-2xl">{typedRecipe.servings}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Hazırlama</p>
                    <p className="text-2xl">{typedRecipe.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CookingPotIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Pişirme</p>
                    <p className="text-2xl">{typedRecipe.cookTime}</p>
                  </div>
                </div>
              </div>

              {/* Authors */}
              <div className="flex items-center gap-4">
                {typedRecipe.populatedAuthors?.map((author) => (
                  <div key={author?.id || ''} className="flex items-center gap-4">
                    {author?.profilePicture?.url && (
                      <Image
                        src={author.profilePicture.url}
                        alt={author?.name || 'Yazar'}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="text-xs text-gray-500">Yazar</p>
                      <p className="text-sm">
                        {author?.firstName || ''} {author?.lastName || ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Created At and Updated At */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs text-gray-500">Oluşturulma Tarihi</p>
                  <p className="text-sm">{formatDateTime(typedRecipe.createdAt)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Güncellenme Tarihi</p>
                  <p className="text-sm">{formatDateTime(typedRecipe.updatedAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={typedRecipe.heroImage?.url || ''}
          alt={typedRecipe.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mb-8 max-w-3xl">
        <RichText
          className="max-w-[48rem] mx-auto"
          data={typedRecipe.content}
          enableGutter={false}
        />
      </div>

      {/* Ingredients */}
      {typedRecipe.ingredients && typedRecipe.ingredients.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Malzemeler</h2>
          <table className="w-full">
            <tbody>
              {typedRecipe.ingredients.map((ingredient, index) => (
                <tr
                  key={ingredient.id}
                  className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
                >
                  <td>
                    <div className="flex gap-4">
                      <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                      <span className="flex flex-col leading-tight col-span-2">
                        <span>{ingredient.ingredient?.title}</span>
                        <span className="text-gray-500 italic text-xs">{ingredient.notes}</span>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className="flex flex-col leading-tight col-span-1">
                      <span>{ingredient.amount}</span>
                      <span className="text-gray-500 italic text-xs">{ingredient.unit?.title}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Instructions */}
      {typedRecipe.instructions && typedRecipe.instructions.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Hazırlama Adımları</h2>
          <table className="w-full">
            <tbody>
              {typedRecipe.instructions.map((instruction, index) => (
                <tr
                  key={instruction.id}
                  className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
                >
                  <td>
                    <div className="flex gap-4">
                      <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                      <div>
                        <div>{instruction.step}</div>
                        <div className="text-gray-500 italic text-xs">{instruction.tip}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Serving Tips */}
      {typedRecipe.servingTips && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Sunum Önerileri</h2>
          <p className="text-sm">{typedRecipe.servingTips}</p>
        </div>
      )}

      {/* Cooking Methods */}
      {typedRecipe.cookingMethod && typedRecipe.cookingMethod.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Pişirme Yöntemleri</h2>
          <table className="w-full">
            <tbody>
              {typedRecipe.cookingMethod.map((method, index) => (
                <tr
                  key={method?.id}
                  className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
                >
                  <td>
                    <div className="flex gap-4">
                      <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                      <div className="flex flex-col leading-tight col-span-2">
                        <span>{method?.title}</span>
                        <span className="text-gray-500 italic text-xs">
                          {method?.meta?.description}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Difficulty */}
      {typedRecipe.difficulty && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Zorluk Derecesi</h2>
          <p className="text-sm">{typedRecipe.difficulty?.title}</p>
          <p className="text-gray-500 italic text-xs">
            {typedRecipe.difficulty?.meta?.description}
          </p>
        </div>
      )}

      {/* Diet Types */}
      {typedRecipe.dietTypes && typedRecipe.dietTypes.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Diyet Tipleri</h2>
          <table className="w-full">
            <tbody>
              {typedRecipe.dietTypes.map((dietType, index) => (
                <tr
                  key={dietType?.id}
                  className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
                >
                  <td>
                    <div className="flex gap-4">
                      <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                      <div className="flex flex-col leading-tight col-span-2">
                        <span>{dietType?.title}</span>
                        <span className="text-gray-500 italic text-xs">
                          {dietType?.meta?.description}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Nutrition Values */}
      {typedRecipe.nutritionValues && typedRecipe.nutritionValues.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Besin Değerleri</h2>
          <table className="w-full">
            <tbody>
              {typedRecipe.nutritionValues.map((nutritionValue, index) => (
                <tr
                  key={nutritionValue.id}
                  className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
                >
                  <td>
                    <div className="flex gap-4">
                      <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                      <span className="flex flex-col leading-tight col-span-2">
                        {nutritionValue.nutrient?.title}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className="flex flex-col leading-tight col-span-1">
                      {nutritionValue.amount} {nutritionValue.unit}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* seasons */}
      {typedRecipe.seasons && typedRecipe.seasons.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Mevsim Önerileri</h2>
          <table className="w-full">
            <tbody>
              {typedRecipe.seasons.map((season, index) => (
                <tr
                  key={season?.id}
                  className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
                >
                  <td>
                    <div className="flex gap-4">
                      <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                      <div className="flex flex-col leading-tight col-span-2">
                        <span>{season?.title}</span>
                        <span className="text-gray-500 italic text-xs">
                          {season?.meta?.description}
                        </span>
                        <span className="text-gray-500 italic text-xs">
                          {season?.months
                            ?.map((month) => month?.title)
                            .filter(Boolean)
                            .join(', ')}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Regions */}
      {typedRecipe.regions && typedRecipe.regions.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Bölgeler</h2>
          <table className="w-full">
            <tbody>
              {typedRecipe.regions.map((region, index) => (
                <tr
                  key={region?.id}
                  className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
                >
                  <td>
                    <div className="flex gap-4">
                      <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                      <div className="flex flex-col leading-tight col-span-2">
                        <span>{region?.title}</span>
                        <span className="text-gray-500 italic text-xs">
                          {region?.meta?.description}
                        </span>
                        <span className="text-gray-500 italic text-xs">
                          {region?.cities
                            ?.map((city) => city?.title)
                            .filter(Boolean)
                            .join(', ')}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Related Recipes */}
      {typedRecipe.relatedRecipes && typedRecipe.relatedRecipes.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">İlgili Tarifler</h2>
          <ul className="w-full grid grid-cols-2 gap-4">
            {typedRecipe.relatedRecipes.map((recipe) => (
              <li key={recipe?.id}>
                <a
                  href={`/recipes/${recipe?.slug}`}
                  className="w-full flex flex-col items-center gap-4"
                >
                  <Image
                    src={recipe?.meta?.image?.sizes?.small?.url || ''}
                    alt={recipe?.title || ''}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                  <div className="flex flex-col">
                    <span>{recipe?.title}</span>
                    <span className="text-gray-500 italic text-xs">
                      {recipe?.meta?.description}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const recipe = await queryRecipesBySlug({ slug })

  return generateMeta({ doc: recipe })
}

const queryRecipesBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'recipes',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    depth: 3,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
