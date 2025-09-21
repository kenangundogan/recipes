import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Ingredient } from '../../../payload-types'

export const revalidateIngredient: CollectionAfterChangeHook<Ingredient> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/ingredients/${doc.slug}`

      payload.logger.info(`Revalidating ingredient at path: ${path}`)

      revalidatePath(path)
      revalidateTag('ingredients-sitemap')
    }

    // If the ingredient unit was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/ingredients/${previousDoc.slug}`

      payload.logger.info(`Revalidating old ingredient at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('ingredients-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Ingredient> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/ingredients/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('ingredients-sitemap')
  }

  return doc
}
