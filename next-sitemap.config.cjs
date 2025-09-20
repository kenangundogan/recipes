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
    '/*',
    '/posts/*',
    '/continents/*',
    '/countries/*',
    '/regions/*',
    '/cities/*',
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
    ],
  },
}
