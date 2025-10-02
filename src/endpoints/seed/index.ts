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
import {
  januaryMonth,
  februaryMonth,
  marchMonth,
  aprilMonth,
  mayMonth,
  juneMonth,
  julyMonth,
  augustMonth,
  septemberMonth,
  octoberMonth,
  novemberMonth,
  decemberMonth,
} from './months'
import { springSeason, summerSeason, autumnSeason, winterSeason } from './seasons'
import {
  vegetablesCategory,
  fruitsCategory,
  grainsCategory,
  proteinsCategory,
  dairyCategory,
  spicesCategory,
} from './ingredient-categories'
import {
  weightCategory,
  volumeCategory,
  pieceCategory,
  spoonCategory,
} from './ingredient-unit-categories'
import {
  gramUnit,
  kilogramUnit,
  milliliterUnit,
  literUnit,
  pieceUnit,
  sliceUnit,
  tablespoonUnit,
  teaspoonUnit,
} from './ingredient-units'
import {
  tomatoIngredient,
  onionIngredient,
  potatoIngredient,
  appleIngredient,
  lemonIngredient,
  riceIngredient,
  bulgurIngredient,
  chickenIngredient,
  eggIngredient,
  milkIngredient,
  yogurtIngredient,
  saltIngredient,
  blackPepperIngredient,
  lentilIngredient,
  carrotIngredient,
  oliveOilIngredient,
  flourIngredient,
  waterIngredient,
  yeastIngredient,
  beefIngredient,
  parsleyIngredient,
  pepperPasteIngredient,
  garlicIngredient,
  greenPepperIngredient,
  sumacIngredient,
  paprikaIngredient,
} from './ingredients'
import {
  stovetopMethod,
  ovenMethod,
  steamMethod,
  grillMethod,
  pressureCookerMethod,
} from './cooking-methods'
import { easyLevel, mediumLevel, hardLevel } from './difficulty-levels'
import {
  calories,
  protein,
  carbohydrates,
  fat,
  fiber,
  sugar,
  sodium,
  cholesterol,
} from './nutrients'
import { vegan, vegetarian, glutenFree, keto, lowCarb, mediterranean, paleo } from './diet-types'
import { soupRecipeCategory, doughRecipeCategory } from './recipe-categories'
import { recipe1 } from './recipes-1'
import { recipe2 } from './recipes-2'
import { recipe3 } from './recipes-3'
import { imageRecipe1 } from './imageRecipe1'
import { imageRecipe2 } from './imageRecipe2'
import { imageRecipe3 } from './imageRecipe3'
import { imageAuthor1 } from './imageAuthor1'
import { imageDummy } from './imageDummy'
import { genders as gendersData } from './genders'
import { roles as rolesData } from './roles'

const collections: CollectionSlug[] = [
  'categories',
  'cities',
  'continents',
  'countries',
  'regions',
  'months',
  'seasons',
  'ingredientCategories',
  'ingredientUnitCategories',
  'ingredientUnits',
  'ingredients',
  'cookingMethods',
  'difficultyLevels',
  'nutrients',
  'dietTypes',
  'recipes',
  'recipeCategories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'genders',
  'roles',
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

  const [
    image1Buffer,
    image2Buffer,
    image3Buffer,
    hero1Buffer,
    imageRecipe1Buffer,
    imageRecipe2Buffer,
    imageRecipe3Buffer,
    imageAuthor1Buffer,
    imageDummyBuffer,
  ] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-hero1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-recipe1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-recipe2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-recipe3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-author1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/kenangundogan/recipes/refs/heads/main/src/endpoints/seed/image-dummy.webp',
    ),
  ])

  const [
    demoAuthor,
    image1Doc,
    image2Doc,
    image3Doc,
    imageHomeDoc,
    imageRecipe1Doc,
    imageRecipe2Doc,
    imageRecipe3Doc,
    imageAuthor1Doc,
  ] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        username: 'demo-author',
        general: {
          firstName: 'Demo',
          lastName: 'Author',
          birthDate: '1990-01-01',
        },
        addresses: {
          country: 'TR',
          city: 'İstanbul',
          district: 'Beşiktaş',
          address: 'Beşiktaş Mahallesi, 123. Sokak, No: 1',
        },
        phones: {
          landline: '0212 555 55 55',
          gsm: '0555 555 55 55',
        },
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
      collection: 'media',
      data: imageRecipe1,
      file: imageRecipe1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageRecipe2,
      file: imageRecipe2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageRecipe3,
      file: imageRecipe3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageAuthor1,
      file: imageAuthor1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageDummy,
      file: imageDummyBuffer,
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

  payload.logger.info(`— Seeding months...`)

  // Create months in order
  const januaryDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: januaryMonth({ heroImage: image1Doc, author: demoAuthor }),
  })

  const februaryDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: februaryMonth({ heroImage: image2Doc, author: demoAuthor }),
  })

  const marchDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: marchMonth({ heroImage: image3Doc, author: demoAuthor }),
  })

  const aprilDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: aprilMonth({ heroImage: image1Doc, author: demoAuthor }),
  })

  const mayDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: mayMonth({ heroImage: image2Doc, author: demoAuthor }),
  })

  const juneDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: juneMonth({ heroImage: image3Doc, author: demoAuthor }),
  })

  const julyDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: julyMonth({ heroImage: image1Doc, author: demoAuthor }),
  })

  const augustDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: augustMonth({ heroImage: image2Doc, author: demoAuthor }),
  })

  const septemberDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: septemberMonth({ heroImage: image3Doc, author: demoAuthor }),
  })

  const octoberDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: octoberMonth({ heroImage: image1Doc, author: demoAuthor }),
  })

  const novemberDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: novemberMonth({ heroImage: image2Doc, author: demoAuthor }),
  })

  const decemberDoc = await payload.create({
    collection: 'months',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: decemberMonth({ heroImage: image3Doc, author: demoAuthor }),
  })

  // update each month with related months (consecutive months)
  await payload.update({
    id: januaryDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [decemberDoc.id, februaryDoc.id],
    },
  })
  await payload.update({
    id: februaryDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [januaryDoc.id, marchDoc.id],
    },
  })
  await payload.update({
    id: marchDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [februaryDoc.id, aprilDoc.id],
    },
  })
  await payload.update({
    id: aprilDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [marchDoc.id, mayDoc.id],
    },
  })
  await payload.update({
    id: mayDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [aprilDoc.id, juneDoc.id],
    },
  })
  await payload.update({
    id: juneDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [mayDoc.id, julyDoc.id],
    },
  })
  await payload.update({
    id: julyDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [juneDoc.id, augustDoc.id],
    },
  })
  await payload.update({
    id: augustDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [julyDoc.id, septemberDoc.id],
    },
  })
  await payload.update({
    id: septemberDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [augustDoc.id, octoberDoc.id],
    },
  })
  await payload.update({
    id: octoberDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [septemberDoc.id, novemberDoc.id],
    },
  })
  await payload.update({
    id: novemberDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [octoberDoc.id, decemberDoc.id],
    },
  })
  await payload.update({
    id: decemberDoc.id,
    collection: 'months',
    data: {
      relatedMonths: [novemberDoc.id, januaryDoc.id],
    },
  })

  payload.logger.info(`— Seeding seasons...`)

  // Create seasons in order
  const springDoc = await payload.create({
    collection: 'seasons',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: springSeason({ heroImage: image1Doc, author: demoAuthor }),
  })

  const summerDoc = await payload.create({
    collection: 'seasons',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: summerSeason({ heroImage: image2Doc, author: demoAuthor }),
  })

  const autumnDoc = await payload.create({
    collection: 'seasons',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: autumnSeason({ heroImage: image3Doc, author: demoAuthor }),
  })

  const winterDoc = await payload.create({
    collection: 'seasons',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: winterSeason({ heroImage: image1Doc, author: demoAuthor }),
  })

  // update each season with related seasons and months
  await payload.update({
    id: springDoc.id,
    collection: 'seasons',
    data: {
      relatedSeasons: [summerDoc.id, autumnDoc.id, winterDoc.id],
      months: [marchDoc.id, aprilDoc.id, mayDoc.id],
    },
  })
  await payload.update({
    id: summerDoc.id,
    collection: 'seasons',
    data: {
      relatedSeasons: [springDoc.id, autumnDoc.id, winterDoc.id],
      months: [juneDoc.id, julyDoc.id, augustDoc.id],
    },
  })
  await payload.update({
    id: autumnDoc.id,
    collection: 'seasons',
    data: {
      relatedSeasons: [springDoc.id, summerDoc.id, winterDoc.id],
      months: [septemberDoc.id, octoberDoc.id, novemberDoc.id],
    },
  })
  await payload.update({
    id: winterDoc.id,
    collection: 'seasons',
    data: {
      relatedSeasons: [springDoc.id, summerDoc.id, autumnDoc.id],
      months: [decemberDoc.id, januaryDoc.id, februaryDoc.id],
    },
  })

  payload.logger.info(`— Seeding ingredient categories...`)

  // Create ingredient categories in order
  const vegetablesCategoryDoc = await payload.create({
    collection: 'ingredientCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: vegetablesCategory({ heroImage: image1Doc, author: demoAuthor }),
  })

  const fruitsCategoryDoc = await payload.create({
    collection: 'ingredientCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: fruitsCategory({ heroImage: image2Doc, author: demoAuthor }),
  })

  const grainsCategoryDoc = await payload.create({
    collection: 'ingredientCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: grainsCategory({ heroImage: image3Doc, author: demoAuthor }),
  })

  const proteinsCategoryDoc = await payload.create({
    collection: 'ingredientCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: proteinsCategory({ heroImage: image1Doc, author: demoAuthor }),
  })

  const dairyCategoryDoc = await payload.create({
    collection: 'ingredientCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: dairyCategory({ heroImage: image2Doc, author: demoAuthor }),
  })

  const spicesCategoryDoc = await payload.create({
    collection: 'ingredientCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: spicesCategory({ heroImage: image3Doc, author: demoAuthor }),
  })

  // update each ingredient category with related categories
  await payload.update({
    id: vegetablesCategoryDoc.id,
    collection: 'ingredientCategories',
    data: {
      relatedIngredientCategories: [fruitsCategoryDoc.id, grainsCategoryDoc.id],
    },
  })
  await payload.update({
    id: fruitsCategoryDoc.id,
    collection: 'ingredientCategories',
    data: {
      relatedIngredientCategories: [vegetablesCategoryDoc.id, dairyCategoryDoc.id],
    },
  })
  await payload.update({
    id: grainsCategoryDoc.id,
    collection: 'ingredientCategories',
    data: {
      relatedIngredientCategories: [vegetablesCategoryDoc.id, proteinsCategoryDoc.id],
    },
  })
  await payload.update({
    id: proteinsCategoryDoc.id,
    collection: 'ingredientCategories',
    data: {
      relatedIngredientCategories: [grainsCategoryDoc.id, dairyCategoryDoc.id],
    },
  })
  await payload.update({
    id: dairyCategoryDoc.id,
    collection: 'ingredientCategories',
    data: {
      relatedIngredientCategories: [proteinsCategoryDoc.id, fruitsCategoryDoc.id],
    },
  })
  await payload.update({
    id: spicesCategoryDoc.id,
    collection: 'ingredientCategories',
    data: {
      relatedIngredientCategories: [vegetablesCategoryDoc.id, proteinsCategoryDoc.id],
    },
  })

  payload.logger.info(`— Seeding ingredient unit categories...`)

  // Create ingredient unit categories
  const weightCategoryDoc = await payload.create({
    collection: 'ingredientUnitCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: weightCategory({ heroImage: image1Doc, author: demoAuthor }),
  })

  const volumeCategoryDoc = await payload.create({
    collection: 'ingredientUnitCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: volumeCategory({ heroImage: image2Doc, author: demoAuthor }),
  })

  const pieceCategoryDoc = await payload.create({
    collection: 'ingredientUnitCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: pieceCategory({ heroImage: image3Doc, author: demoAuthor }),
  })

  const spoonCategoryDoc = await payload.create({
    collection: 'ingredientUnitCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: spoonCategory({ heroImage: image1Doc, author: demoAuthor }),
  })

  // update each ingredient unit category with related categories
  await payload.update({
    id: weightCategoryDoc.id,
    collection: 'ingredientUnitCategories',
    data: {
      relatedIngredientUnitCategories: [volumeCategoryDoc.id, spoonCategoryDoc.id],
    },
  })
  await payload.update({
    id: volumeCategoryDoc.id,
    collection: 'ingredientUnitCategories',
    data: {
      relatedIngredientUnitCategories: [weightCategoryDoc.id, pieceCategoryDoc.id],
    },
  })
  await payload.update({
    id: pieceCategoryDoc.id,
    collection: 'ingredientUnitCategories',
    data: {
      relatedIngredientUnitCategories: [volumeCategoryDoc.id, spoonCategoryDoc.id],
    },
  })
  await payload.update({
    id: spoonCategoryDoc.id,
    collection: 'ingredientUnitCategories',
    data: {
      relatedIngredientUnitCategories: [weightCategoryDoc.id, pieceCategoryDoc.id],
    },
  })

  payload.logger.info(`— Seeding ingredient units...`)

  // Create ingredient units
  const gramUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: gramUnit({ heroImage: image1Doc, author: demoAuthor }),
  })

  const kilogramUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: kilogramUnit({ heroImage: image2Doc, author: demoAuthor }),
  })

  const milliliterUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: milliliterUnit({ heroImage: image3Doc, author: demoAuthor }),
  })

  const literUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: literUnit({ heroImage: image1Doc, author: demoAuthor }),
  })

  const pieceUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: pieceUnit({ heroImage: image2Doc, author: demoAuthor }),
  })

  const sliceUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: sliceUnit({ heroImage: image3Doc, author: demoAuthor }),
  })

  const tablespoonUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: tablespoonUnit({ heroImage: image1Doc, author: demoAuthor }),
  })

  const teaspoonUnitDoc = await payload.create({
    collection: 'ingredientUnits',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: teaspoonUnit({ heroImage: image2Doc, author: demoAuthor }),
  })

  // update each ingredient unit with relations
  await payload.update({
    id: gramUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [kilogramUnitDoc.id, teaspoonUnitDoc.id],
      ingredientUnitCategories: [weightCategoryDoc.id],
    },
  })
  await payload.update({
    id: kilogramUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [gramUnitDoc.id, literUnitDoc.id],
      ingredientUnitCategories: [weightCategoryDoc.id],
    },
  })
  await payload.update({
    id: milliliterUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [literUnitDoc.id, teaspoonUnitDoc.id],
      ingredientUnitCategories: [volumeCategoryDoc.id],
    },
  })
  await payload.update({
    id: literUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [milliliterUnitDoc.id, kilogramUnitDoc.id],
      ingredientUnitCategories: [volumeCategoryDoc.id],
    },
  })
  await payload.update({
    id: pieceUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [sliceUnitDoc.id, gramUnitDoc.id],
      ingredientUnitCategories: [pieceCategoryDoc.id],
    },
  })
  await payload.update({
    id: sliceUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [pieceUnitDoc.id, tablespoonUnitDoc.id],
      ingredientUnitCategories: [pieceCategoryDoc.id],
    },
  })
  await payload.update({
    id: tablespoonUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [teaspoonUnitDoc.id, milliliterUnitDoc.id],
      ingredientUnitCategories: [spoonCategoryDoc.id],
    },
  })
  await payload.update({
    id: teaspoonUnitDoc.id,
    collection: 'ingredientUnits',
    data: {
      relatedIngredientUnits: [tablespoonUnitDoc.id, gramUnitDoc.id],
      ingredientUnitCategories: [spoonCategoryDoc.id],
    },
  })

  payload.logger.info(`— Seeding ingredients...`)

  // Create ingredients
  const tomatoDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: tomatoIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const onionDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: onionIngredient({ heroImage: image2Doc, author: demoAuthor }),
  })

  const potatoDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: potatoIngredient({ heroImage: image3Doc, author: demoAuthor }),
  })

  const appleDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: appleIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const lemonDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: lemonIngredient({ heroImage: image2Doc, author: demoAuthor }),
  })

  const riceDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: riceIngredient({ heroImage: image3Doc, author: demoAuthor }),
  })

  const bulgurDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: bulgurIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const chickenDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: chickenIngredient({ heroImage: image2Doc, author: demoAuthor }),
  })

  const eggDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: eggIngredient({ heroImage: image3Doc, author: demoAuthor }),
  })

  const milkDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: milkIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const yogurtDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: yogurtIngredient({ heroImage: image2Doc, author: demoAuthor }),
  })

  const saltDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: saltIngredient({ heroImage: image3Doc, author: demoAuthor }),
  })

  const blackPepperDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: blackPepperIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const lentilDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: lentilIngredient({ heroImage: image2Doc, author: demoAuthor }),
  })

  const carrotDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: carrotIngredient({ heroImage: image3Doc, author: demoAuthor }),
  })

  const oliveOilDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: oliveOilIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const flourDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: flourIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const waterDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: waterIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const yeastDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: yeastIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const beefDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: beefIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const parsleyDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: parsleyIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const pepperPasteDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: pepperPasteIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const garlicDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: garlicIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const greenPepperDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: greenPepperIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const sumacDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: sumacIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  const paprikaDoc = await payload.create({
    collection: 'ingredients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: paprikaIngredient({ heroImage: image1Doc, author: demoAuthor }),
  })

  // update each ingredient with relations
  await payload.update({
    id: tomatoDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [onionDoc.id, potatoDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [summerDoc.id, autumnDoc.id], // Yaz ve sonbahar domatesi
    },
  })
  await payload.update({
    id: onionDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [tomatoDoc.id, potatoDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: potatoDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [tomatoDoc.id, onionDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [summerDoc.id, autumnDoc.id, winterDoc.id], // Yaz, sonbahar, kış
    },
  })
  await payload.update({
    id: appleDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [lemonDoc.id, milkDoc.id],
      ingredientCategories: [fruitsCategoryDoc.id],
      seasons: [autumnDoc.id, winterDoc.id], // Sonbahar ve kış elması
    },
  })
  await payload.update({
    id: lemonDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [appleDoc.id, saltDoc.id],
      ingredientCategories: [fruitsCategoryDoc.id],
      seasons: [winterDoc.id, springDoc.id], // Kış ve ilkbahar limonu
    },
  })
  await payload.update({
    id: riceDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [bulgurDoc.id, chickenDoc.id],
      ingredientCategories: [grainsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: bulgurDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [riceDoc.id, tomatoDoc.id],
      ingredientCategories: [grainsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: chickenDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [eggDoc.id, riceDoc.id],
      ingredientCategories: [proteinsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: eggDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [chickenDoc.id, milkDoc.id],
      ingredientCategories: [proteinsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: milkDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [yogurtDoc.id, eggDoc.id],
      ingredientCategories: [dairyCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: yogurtDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [milkDoc.id, appleDoc.id],
      ingredientCategories: [dairyCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: saltDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [blackPepperDoc.id, lemonDoc.id],
      ingredientCategories: [spicesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: blackPepperDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [saltDoc.id, onionDoc.id],
      ingredientCategories: [spicesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })

  await payload.update({
    id: flourDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [waterDoc.id, yeastDoc.id],
      ingredientCategories: [grainsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: waterDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [flourDoc.id, yeastDoc.id],
      ingredientCategories: [grainsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: yeastDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [flourDoc.id, waterDoc.id],
      ingredientCategories: [grainsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: beefDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [onionDoc.id, tomatoDoc.id],
      ingredientCategories: [proteinsCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: parsleyDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [beefDoc.id, onionDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: pepperPasteDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [garlicDoc.id, onionDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: garlicDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [pepperPasteDoc.id, onionDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: greenPepperDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [pepperPasteDoc.id, onionDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: sumacDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [pepperPasteDoc.id, onionDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })
  await payload.update({
    id: paprikaDoc.id,
    collection: 'ingredients',
    data: {
      relatedIngredients: [pepperPasteDoc.id, onionDoc.id],
      ingredientCategories: [vegetablesCategoryDoc.id],
      seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Tüm mevsimler
    },
  })

  payload.logger.info(`— Seeding cooking methods...`)

  // Create cooking methods
  const stovetopMethodDoc = await payload.create({
    collection: 'cookingMethods',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: stovetopMethod({ heroImage: image1Doc, author: demoAuthor }),
  })

  const ovenMethodDoc = await payload.create({
    collection: 'cookingMethods',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: ovenMethod({ heroImage: image2Doc, author: demoAuthor }),
  })

  const steamMethodDoc = await payload.create({
    collection: 'cookingMethods',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: steamMethod({ heroImage: image3Doc, author: demoAuthor }),
  })

  const grillMethodDoc = await payload.create({
    collection: 'cookingMethods',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: grillMethod({ heroImage: image1Doc, author: demoAuthor }),
  })

  const pressureCookerMethodDoc = await payload.create({
    collection: 'cookingMethods',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: pressureCookerMethod({ heroImage: image2Doc, author: demoAuthor }),
  })

  // Update cooking methods with relations
  await payload.update({
    id: stovetopMethodDoc.id,
    collection: 'cookingMethods',
    data: {
      relatedCookingMethods: [ovenMethodDoc.id, steamMethodDoc.id],
    },
  })

  await payload.update({
    id: ovenMethodDoc.id,
    collection: 'cookingMethods',
    data: {
      relatedCookingMethods: [stovetopMethodDoc.id, grillMethodDoc.id],
    },
  })

  await payload.update({
    id: steamMethodDoc.id,
    collection: 'cookingMethods',
    data: {
      relatedCookingMethods: [stovetopMethodDoc.id, pressureCookerMethodDoc.id],
    },
  })

  await payload.update({
    id: grillMethodDoc.id,
    collection: 'cookingMethods',
    data: {
      relatedCookingMethods: [ovenMethodDoc.id, stovetopMethodDoc.id],
    },
  })

  await payload.update({
    id: pressureCookerMethodDoc.id,
    collection: 'cookingMethods',
    data: {
      relatedCookingMethods: [steamMethodDoc.id, stovetopMethodDoc.id],
    },
  })

  payload.logger.info(`— Seeding difficulty levels...`)

  // Create difficulty levels
  const easyLevelDoc = await payload.create({
    collection: 'difficultyLevels',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: easyLevel({ heroImage: image1Doc, author: demoAuthor }),
  })

  const mediumLevelDoc = await payload.create({
    collection: 'difficultyLevels',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: mediumLevel({ heroImage: image2Doc, author: demoAuthor }),
  })

  const hardLevelDoc = await payload.create({
    collection: 'difficultyLevels',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: hardLevel({ heroImage: image3Doc, author: demoAuthor }),
  })

  // Update difficulty levels with relations
  await payload.update({
    id: easyLevelDoc.id,
    collection: 'difficultyLevels',
    data: {
      relatedDifficultyLevels: [mediumLevelDoc.id],
    },
  })

  await payload.update({
    id: mediumLevelDoc.id,
    collection: 'difficultyLevels',
    data: {
      relatedDifficultyLevels: [easyLevelDoc.id, hardLevelDoc.id],
    },
  })

  await payload.update({
    id: hardLevelDoc.id,
    collection: 'difficultyLevels',
    data: {
      relatedDifficultyLevels: [mediumLevelDoc.id],
    },
  })

  payload.logger.info(`— Seeding nutrients...`)

  // Create nutrients
  const caloriesDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: calories({ heroImage: image1Doc, author: demoAuthor }),
  })

  const proteinDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: protein({ heroImage: image2Doc, author: demoAuthor }),
  })

  const carbohydratesDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: carbohydrates({ heroImage: image3Doc, author: demoAuthor }),
  })

  const fatDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: fat({ heroImage: image1Doc, author: demoAuthor }),
  })

  const fiberDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: fiber({ heroImage: image2Doc, author: demoAuthor }),
  })

  const sugarDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: sugar({ heroImage: image3Doc, author: demoAuthor }),
  })

  const sodiumDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: sodium({ heroImage: image1Doc, author: demoAuthor }),
  })

  const cholesterolDoc = await payload.create({
    collection: 'nutrients',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: cholesterol({ heroImage: image2Doc, author: demoAuthor }),
  })

  // Update nutrients with relations
  await payload.update({
    id: caloriesDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [proteinDoc.id, carbohydratesDoc.id, fatDoc.id],
    },
  })

  await payload.update({
    id: proteinDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [caloriesDoc.id, fatDoc.id],
    },
  })

  await payload.update({
    id: carbohydratesDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [caloriesDoc.id, sugarDoc.id, fiberDoc.id],
    },
  })

  await payload.update({
    id: fatDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [caloriesDoc.id, proteinDoc.id, cholesterolDoc.id],
    },
  })

  await payload.update({
    id: fiberDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [carbohydratesDoc.id, sugarDoc.id],
    },
  })

  await payload.update({
    id: sugarDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [carbohydratesDoc.id, fiberDoc.id],
    },
  })

  await payload.update({
    id: sodiumDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [cholesterolDoc.id],
    },
  })

  await payload.update({
    id: cholesterolDoc.id,
    collection: 'nutrients',
    data: {
      relatedNutrients: [fatDoc.id, sodiumDoc.id],
    },
  })

  payload.logger.info(`— Seeding diet types...`)

  // Create diet types
  const veganDoc = await payload.create({
    collection: 'dietTypes',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: vegan({ heroImage: image1Doc, author: demoAuthor }),
  })

  const vegetarianDoc = await payload.create({
    collection: 'dietTypes',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: vegetarian({ heroImage: image2Doc, author: demoAuthor }),
  })

  const glutenFreeDoc = await payload.create({
    collection: 'dietTypes',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: glutenFree({ heroImage: image3Doc, author: demoAuthor }),
  })

  const ketoDoc = await payload.create({
    collection: 'dietTypes',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: keto({ heroImage: image1Doc, author: demoAuthor }),
  })

  const lowCarbDoc = await payload.create({
    collection: 'dietTypes',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: lowCarb({ heroImage: image2Doc, author: demoAuthor }),
  })

  const mediterraneanDoc = await payload.create({
    collection: 'dietTypes',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: mediterranean({ heroImage: image3Doc, author: demoAuthor }),
  })

  const paleoDoc = await payload.create({
    collection: 'dietTypes',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: paleo({ heroImage: image1Doc, author: demoAuthor }),
  })

  // Update diet types with relations
  await payload.update({
    id: veganDoc.id,
    collection: 'dietTypes',
    data: {
      relatedDietTypes: [vegetarianDoc.id, mediterraneanDoc.id],
    },
  })

  await payload.update({
    id: vegetarianDoc.id,
    collection: 'dietTypes',
    data: {
      relatedDietTypes: [veganDoc.id, mediterraneanDoc.id],
    },
  })

  await payload.update({
    id: glutenFreeDoc.id,
    collection: 'dietTypes',
    data: {
      relatedDietTypes: [paleoDoc.id, ketoDoc.id],
    },
  })

  await payload.update({
    id: ketoDoc.id,
    collection: 'dietTypes',
    data: {
      relatedDietTypes: [lowCarbDoc.id, glutenFreeDoc.id],
    },
  })

  await payload.update({
    id: lowCarbDoc.id,
    collection: 'dietTypes',
    data: {
      relatedDietTypes: [ketoDoc.id, paleoDoc.id],
    },
  })

  await payload.update({
    id: mediterraneanDoc.id,
    collection: 'dietTypes',
    data: {
      relatedDietTypes: [vegetarianDoc.id, veganDoc.id],
    },
  })

  await payload.update({
    id: paleoDoc.id,
    collection: 'dietTypes',
    data: {
      relatedDietTypes: [glutenFreeDoc.id, lowCarbDoc.id],
    },
  })

  payload.logger.info(`— Seeding recipe categories...`)

  // Create recipe categories
  const soupRecipeCategoryDoc = await payload.create({
    collection: 'recipeCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: soupRecipeCategory({ heroImage: image1Doc, author: demoAuthor }),
  })

  const doughRecipeCategoryDoc = await payload.create({
    collection: 'recipeCategories',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: doughRecipeCategory({ heroImage: image1Doc, author: demoAuthor }),
  })

  // update each recipe category with related categories
  await payload.update({
    id: soupRecipeCategoryDoc.id,
    collection: 'recipeCategories',
    data: {
      relatedRecipeCategories: [doughRecipeCategoryDoc.id],
    },
  })

  await payload.update({
    id: doughRecipeCategoryDoc.id,
    collection: 'recipeCategories',
    data: {
      relatedRecipeCategories: [soupRecipeCategoryDoc.id],
    },
  })

  payload.logger.info(`— Seeding recipes...`)

  // Create recipes
  const recipe1Doc = await payload.create({
    collection: 'recipes',
    depth: 0,
    data: recipe1({
      heroImage: imageRecipe1Doc,
      author: demoAuthor,
      tomatoDoc: tomatoDoc,
      onionDoc: onionDoc,
      riceDoc: riceDoc,
      eggDoc: eggDoc,
      saltDoc: saltDoc,
      blackPepperDoc: blackPepperDoc,
      gramUnitDoc: gramUnitDoc,
      pieceUnitDoc: pieceUnitDoc,
      tablespoonUnitDoc: tablespoonUnitDoc,
      teaspoonUnitDoc: teaspoonUnitDoc,
      mediumLevelDoc: mediumLevelDoc,
      stovetopMethodDoc: stovetopMethodDoc,
      caloriesDoc: caloriesDoc,
      proteinDoc: proteinDoc,
      carbohydratesDoc: carbohydratesDoc,
      fatDoc: fatDoc,
      fiberDoc: fiberDoc,
      sugarDoc: sugarDoc,
      sodiumDoc: sodiumDoc,
      cholesterolDoc: cholesterolDoc,
      lentilDoc: lentilDoc,
      carrotDoc: carrotDoc,
      potatoDoc: potatoDoc,
      oliveOilDoc: oliveOilDoc,
      easyLevelDoc: easyLevelDoc,
      hardLevelDoc: hardLevelDoc,
      ovenMethodDoc: ovenMethodDoc,
      steamMethodDoc: steamMethodDoc,
      veganDoc: veganDoc,
      vegetarianDoc: vegetarianDoc,
      glutenFreeDoc: glutenFreeDoc,
      ketoDoc: ketoDoc,
      lowCarbDoc: lowCarbDoc,
      mediterraneanDoc: mediterraneanDoc,
      paleoDoc: paleoDoc,
      grillMethodDoc: grillMethodDoc,
      pressureCookerMethodDoc: pressureCookerMethodDoc,
      springDoc: springDoc,
      summerDoc: summerDoc,
      autumnDoc: autumnDoc,
      winterDoc: winterDoc,
      marmaraDoc: marmaraDoc,
      egeDoc: egeDoc,
      icAnatoliaDoc: icAnatoliaDoc,
      europeDoc: europeDoc,
      turkeyDoc: turkeyDoc,
      istanbulDoc: istanbulDoc,
      ankaraDoc: ankaraDoc,
      izmirDoc: izmirDoc,
    }),
  })

  const recipe2Doc = await payload.create({
    collection: 'recipes',
    depth: 0,
    data: recipe2({
      heroImage: imageRecipe2Doc,
      author: demoAuthor,
      tomatoDoc: tomatoDoc,
      onionDoc: onionDoc,
      riceDoc: riceDoc,
      eggDoc: eggDoc,
      saltDoc: saltDoc,
      blackPepperDoc: blackPepperDoc,
      gramUnitDoc: gramUnitDoc,
      pieceUnitDoc: pieceUnitDoc,
      tablespoonUnitDoc: tablespoonUnitDoc,
      teaspoonUnitDoc: teaspoonUnitDoc,
      mediumLevelDoc: mediumLevelDoc,
      stovetopMethodDoc: stovetopMethodDoc,
      caloriesDoc: caloriesDoc,
      proteinDoc: proteinDoc,
      carbohydratesDoc: carbohydratesDoc,
      fatDoc: fatDoc,
      fiberDoc: fiberDoc,
      sugarDoc: sugarDoc,
      sodiumDoc: sodiumDoc,
      cholesterolDoc: cholesterolDoc,
      lentilDoc: lentilDoc,
      carrotDoc: carrotDoc,
      potatoDoc: potatoDoc,
      oliveOilDoc: oliveOilDoc,
      easyLevelDoc: easyLevelDoc,
      hardLevelDoc: hardLevelDoc,
      ovenMethodDoc: ovenMethodDoc,
      steamMethodDoc: steamMethodDoc,
      veganDoc: veganDoc,
      vegetarianDoc: vegetarianDoc,
      glutenFreeDoc: glutenFreeDoc,
      ketoDoc: ketoDoc,
      lowCarbDoc: lowCarbDoc,
      mediterraneanDoc: mediterraneanDoc,
      paleoDoc: paleoDoc,
      grillMethodDoc: grillMethodDoc,
      pressureCookerMethodDoc: pressureCookerMethodDoc,
      springDoc: springDoc,
      summerDoc: summerDoc,
      autumnDoc: autumnDoc,
      winterDoc: winterDoc,
      marmaraDoc: marmaraDoc,
      egeDoc: egeDoc,
      icAnatoliaDoc: icAnatoliaDoc,
      europeDoc: europeDoc,
      turkeyDoc: turkeyDoc,
      istanbulDoc: istanbulDoc,
      ankaraDoc: ankaraDoc,
      izmirDoc: izmirDoc,
    }),
  })

  const recipe3Doc = await payload.create({
    collection: 'recipes',
    depth: 0,
    data: recipe3({
      heroImage: imageRecipe3Doc,
      author: demoAuthor,
      tomatoDoc: tomatoDoc,
      onionDoc: onionDoc,
      riceDoc: riceDoc,
      eggDoc: eggDoc,
      saltDoc: saltDoc,
      blackPepperDoc: blackPepperDoc,
      gramUnitDoc: gramUnitDoc,
      pieceUnitDoc: pieceUnitDoc,
      tablespoonUnitDoc: tablespoonUnitDoc,
      teaspoonUnitDoc: teaspoonUnitDoc,
      mediumLevelDoc: mediumLevelDoc,
      stovetopMethodDoc: stovetopMethodDoc,
      caloriesDoc: caloriesDoc,
      proteinDoc: proteinDoc,
      carbohydratesDoc: carbohydratesDoc,
      fatDoc: fatDoc,
      fiberDoc: fiberDoc,
      sugarDoc: sugarDoc,
      sodiumDoc: sodiumDoc,
      cholesterolDoc: cholesterolDoc,
      lentilDoc: lentilDoc,
      carrotDoc: carrotDoc,
      potatoDoc: potatoDoc,
      oliveOilDoc: oliveOilDoc,
      flourDoc: flourDoc,
      waterDoc: waterDoc,
      yeastDoc: yeastDoc,
      beefDoc: beefDoc,
      parsleyDoc: parsleyDoc,
      pepperPasteDoc: pepperPasteDoc,
      garlicDoc: garlicDoc,
      greenPepperDoc: greenPepperDoc,
      sumacDoc: sumacDoc,
      paprikaDoc: paprikaDoc,
      easyLevelDoc: easyLevelDoc,
      hardLevelDoc: hardLevelDoc,
      ovenMethodDoc: ovenMethodDoc,
      steamMethodDoc: steamMethodDoc,
      veganDoc: veganDoc,
      vegetarianDoc: vegetarianDoc,
      glutenFreeDoc: glutenFreeDoc,
      ketoDoc: ketoDoc,
      lowCarbDoc: lowCarbDoc,
      mediterraneanDoc: mediterraneanDoc,
      paleoDoc: paleoDoc,
      grillMethodDoc: grillMethodDoc,
      pressureCookerMethodDoc: pressureCookerMethodDoc,
      springDoc: springDoc,
      summerDoc: summerDoc,
      autumnDoc: autumnDoc,
      winterDoc: winterDoc,
      marmaraDoc: marmaraDoc,
      egeDoc: egeDoc,
      icAnatoliaDoc: icAnatoliaDoc,
      europeDoc: europeDoc,
      turkeyDoc: turkeyDoc,
      istanbulDoc: istanbulDoc,
      ankaraDoc: ankaraDoc,
      izmirDoc: izmirDoc,
    }),
  })

  // update each recipe with relations
  await payload.update({
    id: recipe1Doc.id,
    collection: 'recipes',
    data: {
      relatedRecipes: [recipe2Doc.id, recipe3Doc.id],
    },
  })

  await payload.update({
    id: recipe2Doc.id,
    collection: 'recipes',
    data: {
      relatedRecipes: [recipe1Doc.id, recipe3Doc.id],
    },
  })

  await payload.update({
    id: recipe3Doc.id,
    collection: 'recipes',
    data: {
      relatedRecipes: [recipe1Doc.id, recipe2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding genders...`)

  await Promise.all([
    gendersData.map((gender) =>
      payload.create({
        collection: 'genders',
        data: gender,
      }),
    ),
  ])

  payload.logger.info(`— Seeding roles...`)
  const createdRoles = await Promise.all(
    rolesData.map((role) =>
      payload.create({
        collection: 'roles',
        data: role,
      }),
    ),
  )

  // Admin rolünü bul
  const adminRole = createdRoles.find((role) => role.slug === 'admin')

  // Demo kullanıcısına admin rolü ve profil resmi ata
  if (adminRole && demoAuthor) {
    await payload.update({
      collection: 'users',
      id: demoAuthor.id,
      data: {
        roles: adminRole.id,
        profilePicture: imageAuthor1Doc.id,
      },
    })
    payload.logger.info(`— Demo user updated with admin role and profile picture`)
  }

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
              label: 'Ingredients',
              url: '/ingredients',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Recipes',
              url: '/recipes',
            },
          },
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
