const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://example.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: [
    '/posts-sitemap.xml',
    '/pages-sitemap.xml',
    '/continents-sitemap.xml',
    '/countries-sitemap.xml',
    '/regions-sitemap.xml',
    '/cities-sitemap.xml',
    '/seasons-sitemap.xml',
    '/months-sitemap.xml',
    '/ingredient-categories-sitemap.xml',
    '/ingredients-sitemap.xml',
    '/ingredient-unit-categories-sitemap.xml',
    '/ingredient-units-sitemap.xml',
    '/*',
    '/posts/*',
    '/continents/*',
    '/countries/*',
    '/regions/*',
    '/cities/*',
    '/seasons/*',
    '/months/*',
    '/ingredient-categories/*',
    '/ingredients/*',
    '/ingredient-unit-categories/*',
    '/ingredient-units/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/posts-sitemap.xml`,
      `${SITE_URL}/continents-sitemap.xml`,
      `${SITE_URL}/countries-sitemap.xml`,
      `${SITE_URL}/regions-sitemap.xml`,
      `${SITE_URL}/cities-sitemap.xml`,
      `${SITE_URL}/seasons-sitemap.xml`,
      `${SITE_URL}/months-sitemap.xml`,
      `${SITE_URL}/ingredient-categories-sitemap.xml`,
      `${SITE_URL}/ingredients-sitemap.xml`,
      `${SITE_URL}/ingredient-unit-categories-sitemap.xml`,
      `${SITE_URL}/ingredient-units-sitemap.xml`,
    ],
  },
}
