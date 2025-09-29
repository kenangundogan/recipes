import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Month } from '../../../payload-types'

export const revalidateMonth: CollectionAfterChangeHook<Month> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/months/${doc.slug}`

      payload.logger.info(`Revalidating month at path: ${path}`)

      revalidatePath(path)
      revalidateTag('months-sitemap')
    }

    // If the month was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/months/${previousDoc.slug}`

      payload.logger.info(`Revalidating old month at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('months-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Month> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/months/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('months-sitemap')
  }

  return doc
}
