import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type NutrientArgs = {
  heroImage: Media
  author: User
}

export const calories: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'calories',
    _status: 'published',
    title: 'Kalori',
    description: 'Enerji birimi. Vücudun günlük aktiviteleri için gerekli enerjiyi sağlar.',
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
                text: 'Kalori (kcal)',
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
                text: 'Kalori, vücudun enerji ihtiyacını karşılamak için kullandığı temel ölçü birimidir. Günlük yaşamımızda nefes alma, kalp atışı ve fiziksel aktiviteler için enerji gerekir.',
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
                text: 'Ortalama bir yetişkinin günlük kalori ihtiyacı kadınlar için 2000-2200 kcal, erkekler için 2500-2800 kcal arasındadır.',
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Enerji birimi. Vücudun günlük aktiviteleri için gerekli enerjiyi sağlar.',
      image: heroImage.id,
      title: 'Kalori - Enerji Birimi',
    },
  }
}

export const protein: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'protein',
    _status: 'published',
    title: 'Protein',
    description: 'Kas gelişimi ve onarımı için gerekli makro besin. Amino asitlerin kaynağıdır.',
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
                text: 'Protein (g)',
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
                text: 'Protein, vücudumuzun temel yapı taşlarından biridir. Kas gelişimi, doku onarımı ve enzim üretimi için hayati önem taşır.',
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
                text: 'Günlük protein ihtiyacı vücut ağırlığının kg başına 0.8-1.2 gram arasındadır. Sporcu bireyler için bu miktar daha yüksek olabilir.',
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Kas gelişimi ve onarımı için gerekli makro besin. Amino asitlerin kaynağıdır.',
      image: heroImage.id,
      title: 'Protein - Kas Gelişimi',
    },
  }
}

export const carbohydrates: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'carbohydrates',
    _status: 'published',
    title: 'Karbonhidrat',
    description:
      'Vücudun birincil enerji kaynağı. Beyin ve kas fonksiyonları için hayati önem taşır.',
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
                text: 'Karbonhidrat (g)',
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
                text: 'Karbonhidrat, vücudumuzun en temel enerji kaynağıdır. Özellikle beyin ve kas fonksiyonları için vazgeçilmezdir.',
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
                text: 'Kompleks karbonhidratlar (tahıllar, baklagiller) basit karbonhidratlara (şeker, bal) göre daha uzun süreli enerji sağlar.',
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Vücudun birincil enerji kaynağı. Beyin ve kas fonksiyonları için hayati önem taşır.',
      image: heroImage.id,
      title: 'Karbonhidrat - Enerji Kaynağı',
    },
  }
}

export const fat: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'fat',
    _status: 'published',
    title: 'Yağ',
    description: 'Uzun süreli enerji depolama ve vitamin emilimi için gerekli makro besin.',
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
                text: 'Yağ (g)',
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
                text: 'Yağlar, vücudumuzun uzun süreli enerji depolama sistemidir. Ayrıca A, D, E, K vitaminlerinin emilimi için gereklidir.',
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
                text: "Doymamış yağlar (zeytinyağı, balık yağı) doymuş yağlara göre daha sağlıklıdır. Günlük kalorinin %20-35'i yağdan gelmelidir.",
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Uzun süreli enerji depolama ve vitamin emilimi için gerekli makro besin.',
      image: heroImage.id,
      title: 'Yağ - Enerji Depolama',
    },
  }
}

export const fiber: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'fiber',
    _status: 'published',
    title: 'Lif',
    description:
      'Sindirim sistemi sağlığı için önemli. Tokluk hissi verir ve bağırsak sağlığını destekler.',
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
                text: 'Lif (g)',
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
                text: 'Lif, sindirim sistemi sağlığı için vazgeçilmezdir. Tokluk hissi verir, kan şekerini dengeler ve bağırsak sağlığını destekler.',
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
                text: 'Günlük 25-35 gram lif alımı önerilir. Sebze, meyve, tam tahıllar ve baklagiller iyi lif kaynaklarıdır.',
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Sindirim sistemi sağlığı için önemli. Tokluk hissi verir ve bağırsak sağlığını destekler.',
      image: heroImage.id,
      title: 'Lif - Sindirim Sağlığı',
    },
  }
}

export const sugar: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'sugar',
    _status: 'published',
    title: 'Şeker',
    description: 'Hızlı enerji kaynağı. Aşırı tüketimi sağlık sorunlarına yol açabilir.',
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
                text: 'Şeker (g)',
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
                text: 'Şeker, vücuda hızlı enerji sağlayan basit karbonhidrattır. Ancak aşırı tüketimi obezite, diyabet ve diş çürüğüne yol açabilir.',
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
                text: "DSÖ, günlük şeker alımının toplam kalorinin %10'unu geçmemesini önerir. Doğal şekerler (meyve) eklenmiş şekerlere tercih edilmelidir.",
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Hızlı enerji kaynağı. Aşırı tüketimi sağlık sorunlarına yol açabilir.',
      image: heroImage.id,
      title: 'Şeker - Hızlı Enerji',
    },
  }
}

export const sodium: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'sodium',
    _status: 'published',
    title: 'Sodyum',
    description:
      'Sıvı dengesi ve sinir iletimi için gerekli mineral. Aşırı tüketimi yüksek tansiyon riskini artırır.',
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
                text: 'Sodyum (mg)',
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
                text: 'Sodyum, vücudun sıvı dengesi, kas kasılması ve sinir iletimi için gerekli bir mineraldir. Ancak aşırı tüketimi yüksek tansiyon riskini artırır.',
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
                text: "Günlük sodyum alımı 2300 mg'ı geçmemelidir. İşlenmiş gıdalar sodyumun en büyük kaynağıdır.",
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Sıvı dengesi ve sinir iletimi için gerekli mineral. Aşırı tüketimi yüksek tansiyon riskini artırır.',
      image: heroImage.id,
      title: 'Sodyum - Sıvı Dengesi',
    },
  }
}

export const cholesterol: (args: NutrientArgs) => RequiredDataFromCollectionSlug<'nutrients'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'cholesterol',
    _status: 'published',
    title: 'Kolesterol',
    description:
      'Hücre yapısı ve hormon üretimi için gerekli. Aşırı miktarda kalp sağlığına zararlıdır.',
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
                text: 'Kolesterol (mg)',
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
                text: 'Kolesterol, hücre zarı yapısı ve bazı hormonların üretimi için gereklidir. Ancak yüksek kolesterol seviyesi kalp hastalığı riskini artırır.',
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
                text: "Günlük kolesterol alımı 300 mg'ı geçmemelidir. HDL (iyi kolesterol) ve LDL (kötü kolesterol) dengesi önemlidir.",
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
    relatedNutrients: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Hücre yapısı ve hormon üretimi için gerekli. Aşırı miktarda kalp sağlığına zararlıdır.',
      image: heroImage.id,
      title: 'Kolesterol - Hücre Yapısı',
    },
  }
}
