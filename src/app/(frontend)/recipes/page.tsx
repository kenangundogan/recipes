import type { Metadata } from 'next/types'
import type { Recipe, Media } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import Link from 'next/link'
import Image from 'next/image'
import { formatDateTime } from 'src/utilities/formatDateTime'
import { ClockIcon, CookingPotIcon, HandPlatterIcon, TimerIcon } from 'lucide-react'

// Hook'tan gelen extended author tipi
type PopulatedAuthor = {
  id?: string | null
  name?: string | null
  firstName?: string
  lastName?: string
  profilePicture?: Media | null
}

// Recipe tipi için extended version
type RecipeWithPopulatedAuthors = Pick<
  Recipe,
  'title' | 'slug' | 'meta' | 'authors' | 'createdAt' | 'updatedAt'
> & {
  id: string
  heroImage?: Media | null
  populatedAuthors?: PopulatedAuthor[] | null
  createdAt?: string
  updatedAt?: string
  servings?: number
  prepTime?: number
  cookTime?: number
}

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const recipes = await payload.find({
    collection: 'recipes',
  })

  console.log(recipes.docs)
  return (
    <div>
      <PageClient />
      <ul>
        {(recipes.docs as RecipeWithPopulatedAuthors[]).map((recipe) => (
          <li
            key={recipe.id}
            className="w-full h-[calc(100vh-var(--header-height)-var(--payload-admin-bar-height))] sticky top-0 overflow-hidden"
          >
            <Link href={`/recipes/${recipe.slug}`}>
              <div className="absolute z-10 bottom-0 left-0 w-full p-8 text-white">
                <div className="w-full max-w-2xl m-auto flex flex-col gap-4">
                  {/* Title and Description */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-7xl font-bold">{recipe.title}</h2>
                    <p className="text-sm">{recipe.meta?.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {/* Serving, PrepTime, CookTime */}
                    <div className="w-full flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <HandPlatterIcon strokeWidth={0.5} className="size-12" />
                        <div>
                          <p className="text-xs text-gray-500">Servis</p>
                          <p className="text-2xl">{recipe.servings}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon strokeWidth={0.5} className="size-12" />
                        <div>
                          <p className="text-xs text-gray-500">Hazırlama</p>
                          <p className="text-2xl">{recipe.prepTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CookingPotIcon strokeWidth={0.5} className="size-12" />
                        <div>
                          <p className="text-xs text-gray-500">Pişirme</p>
                          <p className="text-2xl">{recipe.cookTime}</p>
                        </div>
                      </div>
                    </div>

                    {/* Authors */}
                    <div className="flex items-center gap-4">
                      {recipe.populatedAuthors?.map((author) => (
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
                        <p className="text-sm">{formatDateTime(recipe.createdAt)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Güncellenme Tarihi</p>
                        <p className="text-sm">{formatDateTime(recipe.updatedAt)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={recipe.heroImage?.url || ''}
                alt={recipe.title}
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
    title: `Payload Website Template Posts`,
  }
}
