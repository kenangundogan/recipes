import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Continent } from '../../../payload-types'

export const revalidateContinent: CollectionAfterChangeHook<Continent> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/continents/${doc.slug}`

      payload.logger.info(`Revalidating continent at path: ${path}`)

      revalidatePath(path)
      revalidateTag('continents-sitemap')
    }

    // If the continent was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/continents/${previousDoc.slug}`

      payload.logger.info(`Revalidating old continent at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('continents-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Continent> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/continents/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('continents-sitemap')
  }

  return doc
}
