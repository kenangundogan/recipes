import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Country } from '../../../payload-types'

export const revalidateCountry: CollectionAfterChangeHook<Country> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/countries/${doc.slug}`

      payload.logger.info(`Revalidating country at path: ${path}`)

      revalidatePath(path)
      revalidateTag('countries-sitemap')
    }

    // If the country was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/countries/${previousDoc.slug}`

      payload.logger.info(`Revalidating old country at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('countries-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Country> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/countries/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('countries-sitemap')
  }

  return doc
}
