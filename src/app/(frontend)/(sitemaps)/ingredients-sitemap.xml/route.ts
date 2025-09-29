import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getIngredientsSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'ingredients',
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
          .filter((ingredient) => Boolean(ingredient?.slug))
          .map((ingredient) => ({
            loc: `${SITE_URL}/ingredients/${ingredient?.slug}`,
            lastmod: ingredient.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['ingredients-sitemap'],
  {
    tags: ['ingredients-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getIngredientsSitemap()

  return getServerSideSitemap(sitemap)
}
