import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getIngredientUnitCategoriesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'ingredientUnitCategories',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
          .filter((ingredientUnitCategory) => Boolean(ingredientUnitCategory?.slug))
          .map((ingredientUnitCategory) => ({
            loc: `${SITE_URL}/ingredient-unit-categories/${ingredientUnitCategory?.slug}`,
            lastmod: ingredientUnitCategory.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['ingredient-unit-categories-sitemap'],
  {
    tags: ['ingredient-unit-categories-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getIngredientUnitCategoriesSitemap()

  return getServerSideSitemap(sitemap)
}
