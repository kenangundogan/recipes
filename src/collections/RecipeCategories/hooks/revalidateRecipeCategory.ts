import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { RecipeCategory } from '../../../payload-types'

export const revalidateRecipeCategory: CollectionAfterChangeHook<RecipeCategory> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/recipe-categories/${doc.slug}`

      payload.logger.info(`Revalidating recipe category at path: ${path}`)

      revalidatePath(path)
      revalidateTag('recipe-categories-sitemap')
    }

    // If the recipe category was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/recipe-categories/${previousDoc.slug}`

      payload.logger.info(`Revalidating old recipe category at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('recipe-categories-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<RecipeCategory> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/recipe-categories/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('recipe-categories-sitemap')
  }

  return doc
}
