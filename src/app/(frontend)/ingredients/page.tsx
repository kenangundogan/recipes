import type { Metadata } from 'next/types'
import type { Ingredient, Media, Season, IngredientCategory } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import Link from 'next/link'
import Image from 'next/image'
import { formatDateTime } from 'src/utilities/formatDateTime'
import { LeafIcon, CalendarIcon, TagIcon } from 'lucide-react'

// Hook'tan gelen extended author tipi
type PopulatedAuthor = {
  id?: string | null
  name?: string | null
  firstName?: string
  lastName?: string
  profilePicture?: Media | null
}

// Ingredient tipi için extended version
type IngredientWithPopulatedAuthors = Pick<
  Ingredient,
  'title' | 'slug' | 'meta' | 'authors' | 'createdAt' | 'updatedAt' | 'description'
> & {
  id: string
  heroImage?: Media | null
  populatedAuthors?: PopulatedAuthor[] | null
  createdAt?: string
  updatedAt?: string
  seasons?: Season[]
  ingredientCategories?: IngredientCategory[]
  nutritionFacts?: {
    servingSize?: string
    calories?: number
  }
}

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const ingredients = await payload.find({
    collection: 'ingredients',
  })

  return (
    <div>
      <PageClient />
      <ul>
        {(ingredients.docs as IngredientWithPopulatedAuthors[]).map((ingredient) => (
          <li
            key={ingredient.id}
            className="w-full h-[calc(100vh-var(--header-height)-var(--payload-admin-bar-height))] sticky top-0 overflow-hidden"
          >
            <Link href={`/ingredients/${ingredient.slug}`}>
              <div className="absolute z-10 bottom-0 left-0 w-full p-8 text-white">
                <div className="w-full max-w-2xl m-auto flex flex-col gap-4">
                  {/* Title and Description */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-7xl font-bold">{ingredient.title}</h2>
                    <p className="text-sm">{ingredient.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {/* Nutrition Facts */}
                    <div className="w-full flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <LeafIcon strokeWidth={0.5} className="size-12" />
                        <div>
                          <p className="text-xs text-gray-500">Porsiyon</p>
                          <p className="text-2xl">
                            {ingredient.nutritionFacts?.servingSize || 'N/A'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon strokeWidth={0.5} className="size-12" />
                        <div>
                          <p className="text-xs text-gray-500">Kalori</p>
                          <p className="text-2xl">{ingredient.nutritionFacts?.calories || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TagIcon strokeWidth={0.5} className="size-12" />
                        <div>
                          <p className="text-xs text-gray-500">Kategori</p>
                          <p className="text-2xl">{ingredient.ingredientCategories?.length || 0}</p>
                        </div>
                      </div>
                    </div>

                    {/* Authors */}
                    <div className="flex items-center gap-4">
                      {ingredient.populatedAuthors?.map((author) => (
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
                        <p className="text-sm">{formatDateTime(ingredient.createdAt)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Güncellenme Tarihi</p>
                        <p className="text-sm">{formatDateTime(ingredient.updatedAt)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={ingredient.heroImage?.url || ''}
                alt={ingredient.title}
                fill
                className="object-cover"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Malzemeler - Payload Website Template`,
  }
}
