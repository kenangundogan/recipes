import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { DifficultyLevel } from '../../../payload-types'

export const revalidateDifficultyLevel: CollectionAfterChangeHook<DifficultyLevel> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/difficulty-levels/${doc.slug}`

      payload.logger.info(`Revalidating difficulty level at path: ${path}`)

      revalidatePath(path)
      revalidateTag('difficulty-levels-sitemap')
    }

    // If the difficulty level was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/difficulty-levels/${previousDoc.slug}`

      payload.logger.info(`Revalidating old difficulty level at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('difficulty-levels-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<DifficultyLevel> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/difficulty-levels/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('difficulty-levels-sitemap')
  }

  return doc
}
