import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'
import { istanbulCity, ankaraCity, izmirCity } from './cities'
import { turkeyCountry, germanyCountry, franceCountry } from './countries'
import { europeContinent, asiaContinent, africaContinent } from './continents'
import { marmaraRegion, egeRegion, icAnatoliaRegion } from './regions'

const collections: CollectionSlug[] = [
  'categories',
  'cities',
  'continents',
  'countries',
  'regions',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
]
const globals: GlobalSlug[] = ['header', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
  ])

  const [demoAuthor, image1Doc, image2Doc, image3Doc, imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Technology',
        breadcrumbs: [
          {
            label: 'Technology',
            url: '/technology',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'News',
        breadcrumbs: [
          {
            label: 'News',
            url: '/news',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Finance',
        breadcrumbs: [
          {
            label: 'Finance',
            url: '/finance',
          },
        ],
      },
    }),
    payload.create({
      collection: 'categories',
      data: {
        title: 'Design',
        breadcrumbs: [
          {
            label: 'Design',
            url: '/design',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Software',
        breadcrumbs: [
          {
            label: 'Software',
            url: '/software',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Engineering',
        breadcrumbs: [
          {
            label: 'Engineering',
            url: '/engineering',
          },
        ],
      },
    }),
  ])

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding cities...`)

  // Do not create cities with `Promise.all` because we want the cities to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const istanbulDoc = await payload.create({
    collection: 'cities',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: istanbulCity({ heroImage: image1Doc, author: demoAuthor }),
  })

  const ankaraDoc = await payload.create({
    collection: 'cities',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: ankaraCity({ heroImage: image2Doc, author: demoAuthor }),
  })

  const izmirDoc = await payload.create({
    collection: 'cities',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: izmirCity({ heroImage: image3Doc, author: demoAuthor }),
  })

  // update each city with related cities
  await payload.update({
    id: istanbulDoc.id,
    collection: 'cities',
    data: {
      relatedCities: [ankaraDoc.id, izmirDoc.id],
    },
  })
  await payload.update({
    id: ankaraDoc.id,
    collection: 'cities',
    data: {
      relatedCities: [istanbulDoc.id, izmirDoc.id],
    },
  })
  await payload.update({
    id: izmirDoc.id,
    collection: 'cities',
    data: {
      relatedCities: [istanbulDoc.id, ankaraDoc.id],
    },
  })

  payload.logger.info(`— Seeding continents...`)

  // Create continents in order
  const europeDoc = await payload.create({
    collection: 'continents',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: europeContinent({ heroImage: image1Doc, author: demoAuthor }),
  })

  const asiaDoc = await payload.create({
    collection: 'continents',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: asiaContinent({ heroImage: image2Doc, author: demoAuthor }),
  })

  const africaDoc = await payload.create({
    collection: 'continents',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: africaContinent({ heroImage: image3Doc, author: demoAuthor }),
  })

  // update each continent with related continents
  await payload.update({
    id: europeDoc.id,
    collection: 'continents',
    data: {
      relatedContinents: [asiaDoc.id, africaDoc.id],
    },
  })
  await payload.update({
    id: asiaDoc.id,
    collection: 'continents',
    data: {
      relatedContinents: [europeDoc.id, africaDoc.id],
    },
  })
  await payload.update({
    id: africaDoc.id,
    collection: 'continents',
    data: {
      relatedContinents: [europeDoc.id, asiaDoc.id],
    },
  })

  payload.logger.info(`— Seeding countries...`)

  // Create countries in order
  const turkeyDoc = await payload.create({
    collection: 'countries',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: turkeyCountry({ heroImage: image1Doc, author: demoAuthor }),
  })

  const germanyDoc = await payload.create({
    collection: 'countries',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: germanyCountry({ heroImage: image2Doc, author: demoAuthor }),
  })

  const franceDoc = await payload.create({
    collection: 'countries',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: franceCountry({ heroImage: image3Doc, author: demoAuthor }),
  })

  // update each country with related countries and cities
  await payload.update({
    id: turkeyDoc.id,
    collection: 'countries',
    data: {
      relatedCountries: [germanyDoc.id, franceDoc.id],
      cities: [istanbulDoc.id, ankaraDoc.id, izmirDoc.id],
    },
  })
  await payload.update({
    id: germanyDoc.id,
    collection: 'countries',
    data: {
      relatedCountries: [turkeyDoc.id, franceDoc.id],
    },
  })
  await payload.update({
    id: franceDoc.id,
    collection: 'countries',
    data: {
      relatedCountries: [turkeyDoc.id, germanyDoc.id],
    },
  })

  // update continents with countries
  await payload.update({
    id: europeDoc.id,
    collection: 'continents',
    data: {
      countries: [turkeyDoc.id, germanyDoc.id, franceDoc.id],
    },
  })
  await payload.update({
    id: asiaDoc.id,
    collection: 'continents',
    data: {
      countries: [turkeyDoc.id], // Turkey is in both continents
    },
  })

  payload.logger.info(`— Seeding regions...`)

  // Create regions in order
  const marmaraDoc = await payload.create({
    collection: 'regions',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: marmaraRegion({ heroImage: image1Doc, author: demoAuthor }),
  })

  const egeDoc = await payload.create({
    collection: 'regions',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: egeRegion({ heroImage: image2Doc, author: demoAuthor }),
  })

  const icAnatoliaDoc = await payload.create({
    collection: 'regions',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: icAnatoliaRegion({ heroImage: image3Doc, author: demoAuthor }),
  })

  // update each region with related regions and cities
  await payload.update({
    id: marmaraDoc.id,
    collection: 'regions',
    data: {
      relatedRegions: [egeDoc.id, icAnatoliaDoc.id],
      cities: [istanbulDoc.id], // İstanbul Marmara bölgesinde
    },
  })
  await payload.update({
    id: egeDoc.id,
    collection: 'regions',
    data: {
      relatedRegions: [marmaraDoc.id, icAnatoliaDoc.id],
      cities: [izmirDoc.id], // İzmir Ege bölgesinde
    },
  })
  await payload.update({
    id: icAnatoliaDoc.id,
    collection: 'regions',
    data: {
      relatedRegions: [marmaraDoc.id, egeDoc.id],
      cities: [ankaraDoc.id], // Ankara İç Anadolu bölgesinde
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: home({ heroImage: imageHomeDoc, metaImage: image2Doc }),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData({ contactForm: contactForm }),
    }),
  ])

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Posts',
              url: '/posts',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Source Code',
              newTab: true,
              url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Payload',
              newTab: true,
              url: 'https://payloadcms.com/',
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
