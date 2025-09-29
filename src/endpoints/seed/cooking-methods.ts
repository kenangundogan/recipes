import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type CookingMethodArgs = {
  heroImage: Media
  author: User
}

export const stovetopMethod: (
  args: CookingMethodArgs,
) => RequiredDataFromCollectionSlug<'cookingMethods'> = ({ heroImage, author }) => {
  return {
    slug: 'stovetop',
    _status: 'published',
    title: 'Ocak Üstü',
    description:
      'Geleneksel ocak üstü pişirme yöntemi. Tencere, tava gibi kaplarla düşük, orta veya yüksek ateşte pişirme.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date().toISOString(),
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
                text: 'Ocak Üstü Pişirme Yöntemi',
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
                text: 'Ocak üstü pişirme, mutfakta en yaygın kullanılan pişirme yöntemlerinden biridir. Bu yöntemde yemekler doğrudan ısı kaynağı üzerinde, tencere veya tava gibi kaplar kullanılarak pişirilir.',
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
                text: 'Çorbalar, pilavlar, et yemekleri ve çoğu sebze yemeği bu yöntemle hazırlanır. Ateş kontrolü önemlidir ve yemeğin türüne göre düşük, orta veya yüksek ateşte pişirme yapılır.',
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
    relatedCookingMethods: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Geleneksel ocak üstü pişirme yöntemi. Tencere, tava gibi kaplarla düşük, orta veya yüksek ateşte pişirme.',
      image: heroImage.id,
      title: 'Ocak Üstü Pişirme Yöntemi',
    },
  }
}

export const ovenMethod: (
  args: CookingMethodArgs,
) => RequiredDataFromCollectionSlug<'cookingMethods'> = ({ heroImage, author }) => {
  return {
    slug: 'oven',
    _status: 'published',
    title: 'Fırın',
    description:
      'Fırında kuru sıcaklıkla pişirme yöntemi. Ekmekler, börekler, et ve sebze yemekleri için ideal.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date().toISOString(),
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
                text: 'Fırın Pişirme Yöntemi',
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
                text: 'Fırın pişirme, kapalı bir ortamda kuru sıcaklıkla yapılan pişirme yöntemidir. Bu yöntem, yemeğin her tarafının eşit şekilde pişmesini sağlar.',
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
                text: 'Ekmek, börek, kek, et rosto, sebze graten gibi birçok yemek fırında pişirilir. Önceden ısıtılmış fırın ve doğru sıcaklık ayarı başarının anahtarıdır.',
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
    relatedCookingMethods: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Fırında kuru sıcaklıkla pişirme yöntemi. Ekmekler, börekler, et ve sebze yemekleri için ideal.',
      image: heroImage.id,
      title: 'Fırın Pişirme Yöntemi',
    },
  }
}

export const steamMethod: (
  args: CookingMethodArgs,
) => RequiredDataFromCollectionSlug<'cookingMethods'> = ({ heroImage, author }) => {
  return {
    slug: 'steam',
    _status: 'published',
    title: 'Buharda Pişirme',
    description: 'Su buharı ile sağlıklı pişirme yöntemi. Sebzelerin vitamin değerlerini korur.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date().toISOString(),
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
                text: 'Buharda Pişirme Yöntemi',
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
                text: 'Buharda pişirme, yiyeceklerin doğrudan suya değmeden su buharı ile pişirildiği sağlıklı bir yöntemdir. Bu yöntem, besinlerin vitamin ve mineral değerlerini en iyi şekilde korur.',
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
                text: 'Özellikle sebzeler, balık ve pirinç için ideal olan bu yöntemde yağ kullanımına gerek yoktur. Buharlı tenceere veya buharlık ile kolayca uygulanabilir.',
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
    relatedCookingMethods: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Su buharı ile sağlıklı pişirme yöntemi. Sebzelerin vitamin değerlerini korur.',
      image: heroImage.id,
      title: 'Buharda Pişirme Yöntemi',
    },
  }
}

export const grillMethod: (
  args: CookingMethodArgs,
) => RequiredDataFromCollectionSlug<'cookingMethods'> = ({ heroImage, author }) => {
  return {
    slug: 'grill',
    _status: 'published',
    title: 'Izgara',
    description:
      'Doğrudan ateş veya ızgara üzerinde pişirme. Et, tavuk, balık ve sebzeler için idealdir.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date().toISOString(),
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
                text: 'Izgara Pişirme Yöntemi',
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
                text: 'Izgara pişirme, yiyeceklerin doğrudan ateş veya ızgara ızgarası üzerinde yüksek sıcaklıkta pişirildiği bir yöntemdir. Bu yöntem yiyeceklere karakteristik bir tat ve görünüm kazandırır.',
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
                text: 'Et, tavuk, balık, sebze ve hatta meyvelerin ızgara yapılması mümkündür. Mangal, gazlı ızgara veya ızgara tava kullanılabilir.',
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
    relatedCookingMethods: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Doğrudan ateş veya ızgara üzerinde pişirme. Et, tavuk, balık ve sebzeler için idealdir.',
      image: heroImage.id,
      title: 'Izgara Pişirme Yöntemi',
    },
  }
}

export const pressureCookerMethod: (
  args: CookingMethodArgs,
) => RequiredDataFromCollectionSlug<'cookingMethods'> = ({ heroImage, author }) => {
  return {
    slug: 'pressure-cooker',
    _status: 'published',
    title: 'Düdüklü Tencere',
    description:
      'Yüksek basınçla hızlı pişirme yöntemi. Zamandan tasarruf sağlar ve et gibi sert gıdaları yumuşatır.',
    heroImage: heroImage.id,
    authors: [author],
    publishedAt: new Date().toISOString(),
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
                text: 'Düdüklü Tencere Pişirme Yöntemi',
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
                text: 'Düdüklü tencere, yüksek basınç ve buhar kullanarak yiyecekleri normal pişirme süresinin yaklaşık üçte biri kadar sürede pişiren özel bir pişirme yöntemidir.',
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
                text: 'Özellikle et yemekleri, baklagiller ve sebze yemekleri için ideal olan bu yöntem, hem zamandan tasarruf sağlar hem de besinlerin vitamin değerlerini korur.',
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
    relatedCookingMethods: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Yüksek basınçla hızlı pişirme yöntemi. Zamandan tasarruf sağlar ve et gibi sert gıdaları yumuşatır.',
      image: heroImage.id,
      title: 'Düdüklü Tencere Pişirme Yöntemi',
    },
  }
}
