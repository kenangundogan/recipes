import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Recipe } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { formatDateTime } from '@/utilities/formatDateTime'
import { ClockIcon, CookingPotIcon, HandPlatterIcon } from 'lucide-react'

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
  const recipes = await queryRecipesBySlug({ slug })

  if (!recipes) return <PayloadRedirects url={url} />

  console.log(recipes)

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
              <h2 className="text-7xl font-bold">{recipes.title}</h2>
              <p className="text-sm">{recipes.meta?.description}</p>
            </div>

            {/* Serving, PrepTime, CookTime */}
            <div className="flex flex-wrap gap-4">
              <div className="w-full flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <HandPlatterIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Servis</p>
                    <p className="text-2xl">{recipes.servings}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Hazırlama</p>
                    <p className="text-2xl">{recipes.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CookingPotIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Pişirme</p>
                    <p className="text-2xl">{recipes.cookTime}</p>
                  </div>
                </div>
              </div>

              {/* Authors */}
              <div className="flex items-center gap-4">
                {recipes.populatedAuthors?.map((author) => (
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
                  <p className="text-sm">{formatDateTime(recipes.createdAt)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Güncellenme Tarihi</p>
                  <p className="text-sm">{formatDateTime(recipes.updatedAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={recipes.heroImage?.url || ''}
          alt={recipes.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mb-8 max-w-3xl">
        <RichText className="max-w-[48rem] mx-auto" data={recipes.content} enableGutter={false} />
      </div>

      {/* Ingredients */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Malzemeler</h2>
        <table className="w-full">
          <tbody>
            {recipes.ingredients.map((ingredient, index) => (
              <tr
                key={ingredient.id}
                className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
              >
                <td>
                  <div className="flex gap-4">
                    <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                    <span className="flex flex-col leading-tight col-span-2">
                      <span>{ingredient.ingredient.title}</span>
                      <span className="text-gray-500 italic text-xs">{ingredient.notes}</span>
                    </span>
                  </div>
                </td>
                <td>
                  <span className="flex flex-col leading-tight col-span-1">
                    <span>{ingredient.amount}</span>
                    <span className="text-gray-500 italic text-xs">{ingredient.unit.title}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Instructions */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Hazırlama Adımları</h2>
        <table className="w-full">
          <tbody>
            {recipes.instructions.map((instruction, index) => (
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

      {/* Serving Tips */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Sunum Önerileri</h2>
        <p className="text-sm">{recipes.servingTips}</p>
      </div>

      {/* Cooking Methods */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Pişirme Yöntemleri</h2>
        <table className="w-full">
          <tbody>
            {recipes.cookingMethod?.map((method, index) => (
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

      {/* Difficulty */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Zorluk Derecesi</h2>
        <p className="text-sm">{recipes.difficulty?.title}</p>
        <p className="text-gray-500 italic text-xs">{recipes.difficulty?.meta?.description}</p>
      </div>

      {/* Diet Types */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Diyet Tipleri</h2>
        <table className="w-full">
          <tbody>
            {recipes.dietTypes?.map((dietType, index) => (
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

      {/* Nutrition Values */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Besin Değerleri</h2>
        <table className="w-full">
          <tbody>
            {recipes.nutritionValues.map((nutritionValue, index) => (
              <tr
                key={nutritionValue.id}
                className="*:py-4 *:border-b *:border-gray-200 *:last:border-b-0"
              >
                <td>
                  <div className="flex gap-4">
                    <span className="text-gray-500 italic text-xs">{index + 1}.</span>
                    <span className="flex flex-col leading-tight col-span-2">
                      {nutritionValue.nutrient.title}
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

      {/* seasons */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Mevsim Önerileri</h2>
        <table className="w-full">
          <tbody>
            {recipes.seasons?.map((season, index) => (
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
                        {season?.months?.map((month) => month?.title).join(', ')}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Regions */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Bölgeler</h2>
        <table className="w-full">
          <tbody>
            {recipes.regions?.map((region, index) => (
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
                        {region?.cities?.map((city) => city?.title).join(', ')}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Related Recipes */}
      <div className="container mb-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">İlgili Tarifler</h2>
        <ul className="w-full grid grid-cols-2 gap-4">
          {recipes.relatedRecipes?.map((recipe, index) => (
            <li key={recipe?.id}>
              <div className="w-full flex flex-col items-center gap-4">
                <Image
                  src={recipe?.meta?.image?.sizes?.small?.url || ''}
                  alt={recipe?.title}
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <div className="flex flex-col">
                  <span>{recipe?.title}</span>
                  <span className="text-gray-500 italic text-xs">{recipe?.meta?.description}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const recipes = await queryRecipesBySlug({ slug })

  return generateMeta({ doc: recipes })
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
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
