import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type DietTypeArgs = {
  heroImage: Media
  author: User
}

export const vegan: (args: DietTypeArgs) => RequiredDataFromCollectionSlug<'dietTypes'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'vegan',
    _status: 'published',
    title: 'Vegan',
    description: 'Hiçbir hayvansal ürün içermeyen tamamen bitki bazlı beslenme tarzı.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Vegan Beslenme',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Vegan beslenme, et, balık, süt ürünleri, yumurta ve bal dahil olmak üzere hiçbir hayvansal ürün tüketilmediği beslenme şeklidir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Sebze, meyve, tahıl, baklagiller, kuruyemiş ve tohumlar vegan beslenmesinin temelini oluşturur.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    relatedDietTypes: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Hiçbir hayvansal ürün içermeyen tamamen bitki bazlı beslenme tarzı.',
      image: heroImage.id,
      title: 'Vegan Beslenme - Bitki Bazlı Yaşam',
    },
  }
}

export const vegetarian: (args: DietTypeArgs) => RequiredDataFromCollectionSlug<'dietTypes'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'vegetarian',
    _status: 'published',
    title: 'Vejetaryen',
    description: 'Et ve balık tüketilmeyen, süt ürünleri ve yumurta içerebilen beslenme şekli.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Vejetaryen Beslenme',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Vejetaryen beslenme, et ve balık tüketiminin olmadığı ancak süt ürünleri ve yumurta gibi hayvansal ürünlerin tüketilebileceği beslenme şeklidir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Protein ihtiyacı baklagiller, peynir, yumurta ve kuruyemişlerden karşılanabilir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    relatedDietTypes: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Et ve balık tüketilmeyen, süt ürünleri ve yumurta içerebilen beslenme şekli.',
      image: heroImage.id,
      title: 'Vejetaryen Beslenme - Dengeli Alternatif',
    },
  }
}

export const glutenFree: (args: DietTypeArgs) => RequiredDataFromCollectionSlug<'dietTypes'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'gluten-free',
    _status: 'published',
    title: 'Glutensiz',
    description: 'Gluten içeren tahılların (buğday, arpa, çavdar) tüketilmediği beslenme şekli.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Glutensiz Beslenme',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Glutensiz beslenme, çölyak hastalığı veya gluten intoleransı olan kişiler için hayati önem taşır. Buğday, arpa, çavdar ve tritikale içeren gıdalar tüketilmez.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Pirinç, mısır, kinoa, amarant gibi tahıllar glutensiz alternatifler sunar.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    relatedDietTypes: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Gluten içeren tahılların (buğday, arpa, çavdar) tüketilmediği beslenme şekli.',
      image: heroImage.id,
      title: 'Glutensiz Beslenme - Sağlıklı Alternatif',
    },
  }
}

export const keto: (args: DietTypeArgs) => RequiredDataFromCollectionSlug<'dietTypes'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'keto',
    _status: 'published',
    title: 'Ketojenik',
    description: 'Çok düşük karbonhidrat, yüksek yağ içeren metabolik beslenme yaklaşımı.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Ketojenik Beslenme',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Ketojenik diyet, vücudu ketoz durumuna sokmayı amaçlayan, çok düşük karbonhidrat (%5), orta protein (%20) ve yüksek yağ (%75) içeren beslenme şeklidir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Avokado, zeytinyağı, fındık, tereyağı gibi sağlıklı yağ kaynakları tercih edilir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    relatedDietTypes: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Çok düşük karbonhidrat, yüksek yağ içeren metabolik beslenme yaklaşımı.',
      image: heroImage.id,
      title: 'Ketojenik Beslenme - Metabolik Dönüşüm',
    },
  }
}

export const lowCarb: (args: DietTypeArgs) => RequiredDataFromCollectionSlug<'dietTypes'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'low-carb',
    _status: 'published',
    title: 'Düşük Karbonhidrat',
    description: 'Karbonhidrat alımının sınırlandırıldığı, protein ve yağ ağırlıklı beslenme.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Düşük Karbonhidrat Beslenme',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Düşük karbonhidrat diyeti, günlük karbonhidrat alımını sınırlayarak kan şekeri kontrolü ve kilo kaybını desteklemeyi amaçlar.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Et, balık, yumurta, peynir ve yeşil yapraklı sebzeler bu beslenme tarzının temelini oluşturur.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    relatedDietTypes: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Karbonhidrat alımının sınırlandırıldığı, protein ve yağ ağırlıklı beslenme.',
      image: heroImage.id,
      title: 'Düşük Karbonhidrat - Kontrollü Beslenme',
    },
  }
}

export const mediterranean: (args: DietTypeArgs) => RequiredDataFromCollectionSlug<'dietTypes'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'mediterranean',
    _status: 'published',
    title: 'Akdeniz Diyeti',
    description:
      'Zeytinyağı, balık, sebze ve tam tahıl ağırlıklı geleneksel Akdeniz beslenme tarzı.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Akdeniz Diyeti',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Akdeniz diyeti, kalp sağlığını desteklemesi ve uzun yaşamla ilişkilendirilmesi nedeniyle dünya çapında önerilen beslenme modelidir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Zeytinyağı, balık, sebze, meyve, kuruyemiş ve tam tahıllar bu diyetin temel bileşenleridir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    relatedDietTypes: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Zeytinyağı, balık, sebze ve tam tahıl ağırlıklı geleneksel Akdeniz beslenme tarzı.',
      image: heroImage.id,
      title: 'Akdeniz Diyeti - Sağlıklı Yaşam',
    },
  }
}

export const paleo: (args: DietTypeArgs) => RequiredDataFromCollectionSlug<'dietTypes'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'paleo',
    _status: 'published',
    title: 'Paleolitik',
    description: 'İşlenmemiş, doğal gıdalarla paleolitik çağ beslenme tarzını taklit eden diyet.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Paleolitik Beslenme',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Paleo diyet, paleolitik çağda yaşayan atalarımızın beslenme tarzını taklit eder. İşlenmiş gıdalar, tahıllar ve şeker tüketilmez.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Et, balık, yumurta, sebze, meyve, kuruyemiş ve tohum tüketimi desteklenir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    relatedDietTypes: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'İşlenmemiş, doğal gıdalarla paleolitik çağ beslenme tarzını taklit eden diyet.',
      image: heroImage.id,
      title: 'Paleolitik Beslenme - Doğal Yaşam',
    },
  }
}
