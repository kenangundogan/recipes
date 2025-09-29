import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { IngredientUnitCategory } from '../../../payload-types'

export const revalidateIngredientUnitCategory: CollectionAfterChangeHook<
  IngredientUnitCategory
> = ({ doc, previousDoc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/ingredient-unit-categories/${doc.slug}`

      payload.logger.info(`Revalidating ingredient unit category at path: ${path}`)

      revalidatePath(path)
      revalidateTag('ingredient-unit-categories-sitemap')
    }

    // If the ingredient unit was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/ingredient-unit-categories/${previousDoc.slug}`

      payload.logger.info(`Revalidating old ingredient unit category at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('ingredient-unit-categories-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<IngredientUnitCategory> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/ingredient-unit-categories/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('ingredient-unit-categories-sitemap')
  }

  return doc
}
