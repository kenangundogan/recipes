import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { DietType } from '../../../payload-types'

export const revalidateDietType: CollectionAfterChangeHook<DietType> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/dietTypes/${doc.slug}`

      payload.logger.info(`Revalidating diet type at path: ${path}`)

      revalidatePath(path)
      revalidateTag('dietTypes-sitemap')
    }

    // If the month was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/dietTypes/${previousDoc.slug}`

      payload.logger.info(`Revalidating old diet type at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('dietTypes-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<DietType> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/dietTypes/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('dietTypes-sitemap')
  }

  return doc
}
