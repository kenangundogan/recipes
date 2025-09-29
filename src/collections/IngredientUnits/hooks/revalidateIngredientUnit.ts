import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { IngredientUnit } from '../../../payload-types'

export const revalidateIngredientUnit: CollectionAfterChangeHook<IngredientUnit> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/ingredient-units/${doc.slug}`

      payload.logger.info(`Revalidating ingredient unit at path: ${path}`)

      revalidatePath(path)
      revalidateTag('ingredient-units-sitemap')
    }

    // If the ingredient unit was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/ingredient-units/${previousDoc.slug}`

      payload.logger.info(`Revalidating old ingredient unit at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('ingredient-units-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<IngredientUnit> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/ingredient-units/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('ingredient-units-sitemap')
  }

  return doc
}
