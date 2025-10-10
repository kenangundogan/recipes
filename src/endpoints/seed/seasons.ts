import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

type SeasonsSeedArgs = {
  author?: User | null
  heroImage?: Media | null
  months?: { [key: string]: string } // month slug to id mapping
}

const createContent = (text: string) => ({
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text,
            version: 1,
          },
        ],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        textFormat: 0,
        version: 1,
      },
    ],
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})

const seasonEntries = [
  {
    title: 'İlkbahar',
    slug: 'ilkbahar',
    description:
      'Doğanın uyanış mevsimi; taze yeşillikler ve hafif tariflerle sofralarınızı canlandırın.',
    content:
      'İlkbahar, doğanın yeniden doğuşunun kutlandığı, sofralarımızı taze otlar ve bahar sebzeleriyle renklendirdiğimiz büyülü bir dönemdir. Bu mevsimde, kışın ağırlığını üzerimizden atarak hafif, ferahlatıcı ve besleyici tariflerle yeni bir başlangıç yaparız.',
    hemisphereNorth: {
      months: ['mart', 'nisan', 'mayis'], // slug'lar
      startDate: '21 Mart',
      endDate: '21 Haziran',
    },
    hemisphereSouth: {
      months: ['eylul', 'ekim', 'kasim'], // slug'lar
      startDate: '23 Eylül',
      endDate: '21 Aralık',
    },
    meta: {
      title: 'İlkbahar Mevsimi Tarifleri',
      description:
        'İlkbahar aylarında hazırlayabileceğiniz taze, hafif ve besleyici tarifler. Doğanın uyanışıyla sofralarınızı renklendirin.',
    },
  },
  {
    title: 'Yaz',
    slug: 'yaz',
    description:
      'Güneşin ve lezzetlerin en parlak dönemi; ferahlatıcı tarifler ve açık hava sofraları.',
    content:
      'Yaz mevsimi, sofralarımızın en renkli ve ferah olduğu dönemdir. Taze meyveler, sebzeler ve deniz ürünleriyle hazırlanan hafif tarifler, sıcak günlerde bize serinlik ve enerji verir. Açık hava sofralarımızı mangal lezzetleri ve soğuk içeceklerle zenginleştiririz.',
    hemisphereNorth: {
      months: ['haziran', 'temmuz', 'agustos'], // slug'lar
      startDate: '21 Haziran',
      endDate: '23 Eylül',
    },
    hemisphereSouth: {
      months: ['aralik', 'ocak', 'subat'], // slug'lar
      startDate: '21 Aralık',
      endDate: '21 Mart',
    },
    meta: {
      title: 'Yaz Mevsimi Tarifleri',
      description:
        'Yaz aylarında hazırlayabileceğiniz ferahlatıcı, hafif ve besleyici tarifler. Sıcak günlerde sofralarınızı serinletin.',
    },
  },
  {
    title: 'Sonbahar',
    slug: 'sonbahar',
    description: 'Hasat mevsimi; kök sebzeler, mantarlar ve sıcak çorbalarla sofralarınızı ısıtın.',
    content:
      'Sonbahar, doğanın bize sunduğu son armağanların toplandığı, sofralarımızı kök sebzeler, mantarlar ve baharatlı tatlılarla zenginleştirdiğimiz bereketli bir dönemdir. Bu mevsimde, kış hazırlıklarına başlar, reçeller, turşular ve konserveler yaparız.',
    hemisphereNorth: {
      months: ['eylul', 'ekim', 'kasim'], // slug'lar
      startDate: '23 Eylül',
      endDate: '21 Aralık',
    },
    hemisphereSouth: {
      months: ['mart', 'nisan', 'mayis'], // slug'lar
      startDate: '21 Mart',
      endDate: '21 Haziran',
    },
    meta: {
      title: 'Sonbahar Mevsimi Tarifleri',
      description:
        'Sonbahar aylarında hazırlayabileceğiniz sıcak, doyurucu ve besleyici tarifler. Hasat mevsiminin bereketini sofralarınıza taşıyın.',
    },
  },
  {
    title: 'Kış',
    slug: 'kis',
    description: 'Sıcaklık ve huzur mevsimi; güveçler, çorbalar ve comfort food tarifleri.',
    content:
      'Kış mevsimi, evimizin sıcaklığında, sofralarımızı sıcak çorbalar, güveçler ve doyurucu yemeklerle ısıttığımız huzurlu bir dönemdir. Bu mevsimde, vücudumuzu güçlendiren besinlerle donatır, sevdiklerimizle paylaştığımız özel anları tatlılarla süsleriz.',
    hemisphereNorth: {
      months: ['aralik', 'ocak', 'subat'], // slug'lar
      startDate: '21 Aralık',
      endDate: '21 Mart',
    },
    hemisphereSouth: {
      months: ['haziran', 'temmuz', 'agustos'], // slug'lar
      startDate: '21 Haziran',
      endDate: '23 Eylül',
    },
    meta: {
      title: 'Kış Mevsimi Tarifleri',
      description:
        'Kış aylarında hazırlayabileceğiniz sıcak, doyurucu ve besleyici tarifler. Soğuk günlerde sofralarınızı ısıtın.',
    },
  },
] as const

const BASE_YEAR = 2024

export const seasonsSeed = ({
  author,
  heroImage,
  months = {},
}: SeasonsSeedArgs = {}): RequiredDataFromCollectionSlug<'seasons'>[] => {
  return seasonEntries.map(
    ({ title, slug, description, content, hemisphereNorth, hemisphereSouth, meta }) => ({
      title,
      slug,
      description,
      content: createContent(content),
      heroImage: heroImage?.id ?? null,
      authors: author ? [author.id] : [],
      hemisphereNorth: {
        months: hemisphereNorth.months.map((monthSlug) => months[monthSlug]).filter(Boolean),
        startDate: hemisphereNorth.startDate,
        endDate: hemisphereNorth.endDate,
      },
      hemisphereSouth: {
        months: hemisphereSouth.months.map((monthSlug) => months[monthSlug]).filter(Boolean),
        startDate: hemisphereSouth.startDate,
        endDate: hemisphereSouth.endDate,
      },
      _status: 'published',
      meta: {
        title: meta.title,
        description: meta.description,
        image: heroImage?.id ?? null,
      },
      publishedAt: new Date(BASE_YEAR, 0, 1).toISOString(),
    }),
  )
}
