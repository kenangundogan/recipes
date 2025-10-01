import type { Metadata } from 'next'
import type { Ingredient, Media, Season, IngredientCategory } from '@/payload-types'

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
import { LeafIcon, CalendarIcon, TagIcon } from 'lucide-react'

// Extended types for populated data
type PopulatedAuthor = {
  id?: string | null
  name?: string | null
  firstName?: string
  lastName?: string
  profilePicture?: Media | null
}

type PopulatedIngredient = Omit<
  Ingredient,
  'populatedAuthors' | 'seasons' | 'ingredientCategories' | 'relatedIngredients'
> & {
  populatedAuthors?: PopulatedAuthor[] | null
  heroImage?: Media | null
  seasons?: Season[]
  ingredientCategories?: IngredientCategory[]
  relatedIngredients?: (Ingredient & { meta?: { image?: Media | null } })[]
  nutritionFacts?: {
    servingSize?: string
    calories?: number
    protein?: number
    carbohydrates?: number
    fat?: number
    fiber?: number
    sugar?: number
    sodium?: number
  }
  vitaminsAndMinerals?: {
    vitaminC?: number
    vitaminA?: number
    vitaminK?: number
    potassium?: number
    calcium?: number
    iron?: number
    magnesium?: number
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const ingredients = await payload.find({
    collection: 'ingredients',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = ingredients.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Ingredient({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/ingredients/' + slug
  const ingredient = await queryIngredientsBySlug({ slug })

  if (!ingredient) return <PayloadRedirects url={url} />

  const typedIngredient = ingredient as PopulatedIngredient

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
              <h2 className="text-7xl font-bold">{typedIngredient.title}</h2>
              <p className="text-sm">{typedIngredient.description}</p>
            </div>

            {/* Nutrition Facts */}
            <div className="flex flex-wrap gap-4">
              <div className="w-full flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <LeafIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Porsiyon</p>
                    <p className="text-2xl">
                      {typedIngredient.nutritionFacts?.servingSize || 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Kalori</p>
                    <p className="text-2xl">{typedIngredient.nutritionFacts?.calories || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TagIcon strokeWidth={0.5} className="size-12" />
                  <div>
                    <p className="text-xs text-gray-500">Kategori</p>
                    <p className="text-2xl">{typedIngredient.ingredientCategories?.length || 0}</p>
                  </div>
                </div>
              </div>

              {/* Authors */}
              <div className="flex items-center gap-4">
                {typedIngredient.populatedAuthors?.map((author) => (
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
                  <p className="text-sm">{formatDateTime(typedIngredient.createdAt)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Güncellenme Tarihi</p>
                  <p className="text-sm">{formatDateTime(typedIngredient.updatedAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={typedIngredient.heroImage?.url || ''}
          alt={typedIngredient.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      {typedIngredient.content && (
        <div className="container mb-8 max-w-3xl">
          <RichText
            className="max-w-[48rem] mx-auto"
            data={typedIngredient.content}
            enableGutter={false}
          />
        </div>
      )}

      {/* Nutrition Facts */}
      {typedIngredient.nutritionFacts && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Besin Değerleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries({
              servingSize: { label: 'Porsiyon Boyutu', unit: '' },
              calories: { label: 'Kalori', unit: ' kcal' },
              protein: { label: 'Protein', unit: 'g' },
              carbohydrates: { label: 'Karbonhidrat', unit: 'g' },
              fat: { label: 'Yağ', unit: 'g' },
              fiber: { label: 'Lif', unit: 'g' },
              sugar: { label: 'Şeker', unit: 'g' },
              sodium: { label: 'Sodyum', unit: 'mg' },
            })
              .map(([key, config]) => {
                const value =
                  typedIngredient.nutritionFacts?.[
                    key as keyof typeof typedIngredient.nutritionFacts
                  ]
                if (!value) return null

                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-500">{config.label}</p>
                    <p className="text-lg font-semibold">
                      {value}
                      {config.unit}
                    </p>
                  </div>
                )
              })
              .filter(Boolean)}
          </div>
        </div>
      )}

      {/* Vitamins and Minerals */}
      {typedIngredient.vitaminsAndMinerals && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Vitaminler ve Mineraller</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries({
              vitaminC: { label: 'Vitamin C', unit: 'mg', bgColor: 'bg-green-50' },
              vitaminA: { label: 'Vitamin A', unit: 'IU', bgColor: 'bg-orange-50' },
              vitaminK: { label: 'Vitamin K', unit: 'mcg', bgColor: 'bg-purple-50' },
              potassium: { label: 'Potasyum', unit: 'mg', bgColor: 'bg-blue-50' },
              calcium: { label: 'Kalsiyum', unit: 'mg', bgColor: 'bg-gray-50' },
              iron: { label: 'Demir', unit: 'mg', bgColor: 'bg-red-50' },
              magnesium: { label: 'Magnezyum', unit: 'mg', bgColor: 'bg-yellow-50' },
            })
              .map(([key, config]) => {
                const value =
                  typedIngredient.vitaminsAndMinerals?.[
                    key as keyof typeof typedIngredient.vitaminsAndMinerals
                  ]
                if (!value) return null

                return (
                  <div key={key} className={`${config.bgColor} p-4 rounded-lg`}>
                    <p className="text-xs text-gray-500">{config.label}</p>
                    <p className="text-lg font-semibold">
                      {value}
                      {config.unit}
                    </p>
                  </div>
                )
              })
              .filter(Boolean)}
          </div>
        </div>
      )}

      {/* Ingredient Categories */}
      {typedIngredient.ingredientCategories && typedIngredient.ingredientCategories.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Kategoriler</h2>
          <div className="flex flex-wrap gap-2">
            {typedIngredient.ingredientCategories.map((category) => (
              <span
                key={category?.id}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {category?.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Seasons */}
      {typedIngredient.seasons && typedIngredient.seasons.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Mevsim Önerileri</h2>
          <div className="flex flex-wrap gap-2">
            {typedIngredient.seasons.map((season) => (
              <span
                key={season?.id}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {season?.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Related Ingredients */}
      {typedIngredient.relatedIngredients && typedIngredient.relatedIngredients.length > 0 && (
        <div className="container mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">İlgili Malzemeler</h2>
          <ul className="w-full grid grid-cols-2 gap-4">
            {typedIngredient.relatedIngredients.map((ingredient) => (
              <li key={ingredient?.id}>
                <a
                  href={`/ingredients/${ingredient?.slug}`}
                  className="w-full flex flex-col items-center gap-4"
                >
                  <Image
                    src={ingredient?.meta?.image?.sizes?.small?.url || ''}
                    alt={ingredient?.title || ''}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                  <div className="w-full flex flex-col">
                    <span>{ingredient?.title}</span>
                    <span className="text-gray-500 italic text-xs">
                      {ingredient?.meta?.description}
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
  const ingredient = await queryIngredientsBySlug({ slug })

  return generateMeta({ doc: ingredient })
}

const queryIngredientsBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'ingredients',
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
