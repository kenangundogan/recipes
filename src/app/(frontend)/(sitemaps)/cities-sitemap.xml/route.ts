import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getCitiesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'cities',
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
          .filter((city) => Boolean(city?.slug))
          .map((city) => ({
            loc: `${SITE_URL}/cities/${city?.slug}`,
            lastmod: city.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['cities-sitemap'],
  {
    tags: ['cities-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getCitiesSitemap()

  return getServerSideSitemap(sitemap)
}
