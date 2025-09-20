import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { City } from '../../../payload-types'

export const revalidateCity: CollectionAfterChangeHook<City> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/cities/${doc.slug}`

      payload.logger.info(`Revalidating city at path: ${path}`)

      revalidatePath(path)
      revalidateTag('cities-sitemap')
    }

    // If the city was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/cities/${previousDoc.slug}`

      payload.logger.info(`Revalidating old city at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('cities-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<City> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/cities/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('cities-sitemap')
  }

  return doc
}
