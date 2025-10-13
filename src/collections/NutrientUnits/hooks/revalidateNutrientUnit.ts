import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { NutrientUnit } from '../../../payload-types'

export const revalidateNutrientUnit: CollectionAfterChangeHook<NutrientUnit> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/nutrient-units/${doc.slug}`

      payload.logger.info(`Revalidating nutrient unit at path: ${path}`)

      revalidatePath(path)
      revalidateTag('nutrient-units-sitemap')
    }

    // If the nutrient unit was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/nutrient-units/${previousDoc.slug}`

      payload.logger.info(`Revalidating old nutrient unit at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('nutrient-units-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<NutrientUnit> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/nutrient-units/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('nutrient-units-sitemap')
  }

  return doc
}
