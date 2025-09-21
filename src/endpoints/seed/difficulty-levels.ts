import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type DifficultyLevelArgs = {
  heroImage: Media
  author: User
}

export const easyLevel: (
  args: DifficultyLevelArgs,
) => RequiredDataFromCollectionSlug<'difficultyLevels'> = ({ heroImage, author }) => {
  return {
    slug: 'easy',
    _status: 'published',
    title: 'Kolay',
    description: 'Başlangıç seviyesi. Basit malzemeler ve tekniklerle kısa sürede hazırlanabilir.',
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
                text: 'Kolay Zorluk Seviyesi',
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
                text: 'Kolay seviye tarifler, mutfakta yeni olanlar veya hızlı yemek hazırlamak isteyenler için idealdir. Bu tariflerde genellikle basit malzemeler kullanılır ve karmaşık teknikler gerektirmez.',
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
                text: 'Hazırlık süresi kısa olan bu tariflerde genellikle 30 dakika veya daha az sürede lezzetli yemekler hazırlanabilir.',
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
    relatedDifficultyLevels: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'Başlangıç seviyesi. Basit malzemeler ve tekniklerle kısa sürede hazırlanabilir.',
      image: heroImage.id,
      title: 'Kolay Zorluk Seviyesi',
    },
  }
}

export const mediumLevel: (
  args: DifficultyLevelArgs,
) => RequiredDataFromCollectionSlug<'difficultyLevels'> = ({ heroImage, author }) => {
  return {
    slug: 'medium',
    _status: 'published',
    title: 'Orta',
    description: 'Orta seviye. Biraz tecrübe gerektirir ve birkaç farklı teknik kullanılabilir.',
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
                text: 'Orta Zorluk Seviyesi',
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
                text: 'Orta seviye tarifler, temel mutfak deneyimine sahip olanlar için uygundur. Bu tariflerde birkaç farklı pişirme tekniği bir arada kullanılabilir.',
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
                text: 'Hazırlık süresi genellikle 30-60 dakika arasındadır ve dikkat gerektiren aşamalar içerebilir.',
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
    relatedDifficultyLevels: [], // Bu seed script tarafından doldurulacak
    meta: {
      description: 'Orta seviye. Biraz tecrübe gerektirir ve birkaç farklı teknik kullanılabilir.',
      image: heroImage.id,
      title: 'Orta Zorluk Seviyesi',
    },
  }
}

export const hardLevel: (
  args: DifficultyLevelArgs,
) => RequiredDataFromCollectionSlug<'difficultyLevels'> = ({ heroImage, author }) => {
  return {
    slug: 'hard',
    _status: 'published',
    title: 'Zor',
    description:
      'İleri seviye. Deneyimli aşçılar için. Karmaşık teknikler ve uzun hazırlık süresi gerektirir.',
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
                text: 'Zor Zorluk Seviyesi',
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
                text: 'Zor seviye tarifler, deneyimli aşçılar ve mutfak sanatını öğrenmek isteyenler için tasarlanmıştır. Bu tariflerde karmaşık teknikler ve özel ekipmanlar gerekebilir.',
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
                text: 'Hazırlık süresi genellikle 1-3 saat veya daha uzun olabilir. Timing ve teknik hassasiyeti çok önemlidir.',
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
    relatedDifficultyLevels: [], // Bu seed script tarafından doldurulacak
    meta: {
      description:
        'İleri seviye. Deneyimli aşçılar için. Karmaşık teknikler ve uzun hazırlık süresi gerektirir.',
      image: heroImage.id,
      title: 'Zor Zorluk Seviyesi',
    },
  }
}
