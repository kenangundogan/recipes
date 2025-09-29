import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Region } from '../../../payload-types'

export const revalidateRegion: CollectionAfterChangeHook<Region> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/regions/${doc.slug}`

      payload.logger.info(`Revalidating region at path: ${path}`)

      revalidatePath(path)
      revalidateTag('regions-sitemap')
    }

    // If the region was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/regions/${previousDoc.slug}`

      payload.logger.info(`Revalidating old region at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('regions-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Region> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/regions/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('regions-sitemap')
  }

  return doc
}
