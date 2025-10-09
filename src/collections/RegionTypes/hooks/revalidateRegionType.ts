import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { RegionType } from '../../../payload-types'

export const revalidateRegionType: CollectionAfterChangeHook<RegionType> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/regionTypes/${doc.slug}`

      payload.logger.info(`Revalidating region type at path: ${path}`)

      revalidatePath(path)
      revalidateTag('regionTypes-sitemap')
    }

    // If the region type was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/regionTypes/${previousDoc.slug}`

      payload.logger.info(`Revalidating old region type at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('regionTypes-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<RegionType> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/regionTypes/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('regionTypes-sitemap')
  }

  return doc
}
