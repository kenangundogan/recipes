import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type RecipeCategoryArgs = {
  heroImage: Media
  author: User
}

export const soupRecipeCategory: (
  args: RecipeCategoryArgs,
) => RequiredDataFromCollectionSlug<'recipeCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'corba',
    _status: 'published',
    title: 'Çorba',
    description:
      'Çorbalar, Türk ve dünya mutfağında yemeğe başlangıç olarak sunulan, genellikle sıvı kıvamlı yemeklerdir. Sağlıklı, besleyici ve doyurucu özellikleriyle öne çıkar.',
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
                text: 'Çorba Kategorisi',
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
                text: 'Çorba, hem günlük sofralarda hem de özel davetlerde vazgeçilmez bir başlangıçtır. Mercimek, tarhana, domates, tavuk suyu gibi pek çok çeşidi bulunur.',
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
                text: 'Besleyici değerleri, şifalı özellikleri ve kolay hazırlanabilirliğiyle çorba mutfak kültüründe özel bir yere sahiptir.',
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
    relatedRecipeCategories: [], // İleride diğer kategorilerle ilişkilendirilecek
    meta: {
      description:
        'Çorbalar, Türk ve dünya mutfağında başlangıç yemeği olarak sunulan besleyici ve doyurucu tariflerdir.',
      image: heroImage.id,
      title: 'Çorba Tarifleri',
    },
  }
}

export const doughRecipeCategory: (
  args: RecipeCategoryArgs,
) => RequiredDataFromCollectionSlug<'recipeCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'hamur',
    _status: 'published',
    title: 'Hamur',
    description:
      'Hamur tabanlı yemekler; pide, lahmacun, börek, pizza ve diğer fırın ürünlerini kapsayan geniş bir kategoridir.',
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
                text: 'Hamur Kategorisi',
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
                text: 'Hamurdan hazırlanan yemekler mutfak kültüründe çok geniş bir yer tutar. Özellikle fırın ürünleri arasında lahmacun, pide, börek ve pizza gibi çeşitler öne çıkar.',
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
                text: 'Bu kategori altındaki tarifler genellikle fırında pişirilir ve farklı iç harçlarla zenginleştirilir. Lahmacun, kıymalı harcı ve ince hamuruyla bu kategorinin en bilinen örneklerindendir.',
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
    relatedRecipeCategories: [], // Alt kategoriler (Pide, Lahmacun vb.) buraya bağlanabilir
    meta: {
      description:
        'Hamur tabanlı yemekler; pide, lahmacun, börek, pizza ve diğer fırın ürünlerini kapsar.',
      image: heroImage.id,
      title: 'Hamur Tarifleri',
    },
  }
}
