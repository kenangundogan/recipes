import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { CookingMethod } from '../../../payload-types'

export const revalidateCookingMethod: CollectionAfterChangeHook<CookingMethod> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/cooking-methods/${doc.slug}`

      payload.logger.info(`Revalidating cooking method at path: ${path}`)

      revalidatePath(path)
      revalidateTag('cooking-methods-sitemap')
    }

    // If the cooking method was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/cooking-methods/${previousDoc.slug}`

      payload.logger.info(`Revalidating old cooking method at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('cooking-methods-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<CookingMethod> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/cooking-methods/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('cooking-methods-sitemap')
  }

  return doc
}
