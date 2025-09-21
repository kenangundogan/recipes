import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Season } from '../../../payload-types'

export const revalidateSeason: CollectionAfterChangeHook<Season> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/seasons/${doc.slug}`

      payload.logger.info(`Revalidating season at path: ${path}`)

      revalidatePath(path)
      revalidateTag('seasons-sitemap')
    }

    // If the season was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/seasons/${previousDoc.slug}`

      payload.logger.info(`Revalidating old season at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('seasons-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Season> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/seasons/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('seasons-sitemap')
  }

  return doc
}
