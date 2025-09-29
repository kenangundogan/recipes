import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { IngredientCategory } from '../../../payload-types'

export const revalidateIngredientCategory: CollectionAfterChangeHook<IngredientCategory> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/ingredient-categories/${doc.slug}`

      payload.logger.info(`Revalidating ingredient category at path: ${path}`)

      revalidatePath(path)
      revalidateTag('ingredient-categories-sitemap')
    }

    // If the ingredient category was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/ingredient-categories/${previousDoc.slug}`

      payload.logger.info(`Revalidating old ingredient category at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('ingredient-categories-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<IngredientCategory> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/ingredient-categories/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('ingredient-categories-sitemap')
  }

  return doc
}
