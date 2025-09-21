import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Nutrient } from '../../../payload-types'

export const revalidateNutrient: CollectionAfterChangeHook<Nutrient> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/nutrients/${doc.slug}`

      payload.logger.info(`Revalidating nutrient at path: ${path}`)

      revalidatePath(path)
      revalidateTag('nutrients-sitemap')
    }

    // If the nutrient was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/nutrients/${previousDoc.slug}`

      payload.logger.info(`Revalidating old nutrient at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('nutrients-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Nutrient> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/nutrients/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('nutrients-sitemap')
  }

  return doc
}
