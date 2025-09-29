import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type IngredientUnitArgs = {
  heroImage: Media
  author: User
}

// Weight Units
export const gramUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'gram',
    _status: 'published',
    title: 'Gram',
    description: 'Temel ağırlık ölçü birimi, özellikle küçük miktarlar için kullanılır.',
    authors: [author],
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
                text: 'Gram: Hassas Ölçüm Birimi',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Gram, metrik sistemin temel ağırlık ölçü birimidir. Mutfakta hassas ölçümler için vazgeçilmezdir, özellikle fırıncılık ve pastanede kritik öneme sahiptir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
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
                text: 'Un, şeker, baharat gibi malzemeler gram cinsinden ölçüldüğünde en tutarlı sonuçları verir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Temel ağırlık ölçü birimi, özellikle küçük miktarlar için kullanılır.',
      image: heroImage.id,
      title: 'Gram - Hassas Ölçüm Birimi',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const kilogramUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'kilogram',
    _status: 'published',
    title: 'Kilogram',
    description: 'Büyük miktarlar için kullanılan ağırlık ölçü birimi.',
    authors: [author],
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
                text: 'Kilogram: Büyük Miktarlar',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Kilogram, 1000 grama eşit olan ağırlık ölçü birimidir. Et, sebze gibi büyük miktarlardaki malzemeler için kullanılır.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Büyük miktarlar için kullanılan ağırlık ölçü birimi.',
      image: heroImage.id,
      title: 'Kilogram - Büyük Miktarlar',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

// Volume Units
export const milliliterUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'milliliter',
    _status: 'published',
    title: 'Mililitre',
    description: 'Sıvı malzemeler için temel hacim ölçü birimi.',
    authors: [author],
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
                text: 'Mililitre: Sıvı Ölçümü',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Mililitre, sıvı malzemeler için kullanılan temel hacim ölçü birimidir. Su, süt, zeytinyağı gibi sıvıları ölçmek için idealdir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Sıvı malzemeler için temel hacim ölçü birimi.',
      image: heroImage.id,
      title: 'Mililitre - Sıvı Ölçümü',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const literUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'liter',
    _status: 'published',
    title: 'Litre',
    description: 'Büyük miktarlardaki sıvılar için kullanılan hacim ölçü birimi.',
    authors: [author],
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
                text: 'Litre: Büyük Hacimler',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Litre, 1000 mililitreye eşit hacim ölçü birimidir. Çorba, komposto gibi büyük miktarlardaki sıvılar için kullanılır.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Büyük miktarlardaki sıvılar için kullanılan hacim ölçü birimi.',
      image: heroImage.id,
      title: 'Litre - Büyük Hacimler',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

// Piece Units
export const pieceUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'piece',
    _status: 'published',
    title: 'Adet',
    description: 'Sayılabilir malzemeler için kullanılan ölçü birimi.',
    authors: [author],
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
                text: 'Adet: Sayılabilir Malzemeler',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Adet, sayılabilir malzemeler için kullanılan pratik bir ölçü birimidir. Yumurta, elma, domates gibi malzemeler adet olarak sayılır.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Sayılabilir malzemeler için kullanılan ölçü birimi.',
      image: heroImage.id,
      title: 'Adet - Sayılabilir Malzemeler',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const sliceUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'slice',
    _status: 'published',
    title: 'Dilim',
    description: 'Dilimlenebilir malzemeler için kullanılan ölçü birimi.',
    authors: [author],
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
                text: 'Dilim: Kesim Ölçüsü',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Dilim, ekmek, peynir, limon gibi dilimlenebilir malzemeler için kullanılan ölçü birimidir. Görsel sunum ve porsiyonlama açısından pratiktir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Dilimlenebilir malzemeler için kullanılan ölçü birimi.',
      image: heroImage.id,
      title: 'Dilim - Kesim Ölçüsü',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

// Spoon Units
export const tablespoonUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'tablespoon',
    _status: 'published',
    title: 'Yemek Kaşığı',
    description: "Yaklaşık 15ml'ye eşit olan kaşık ölçü birimi.",
    authors: [author],
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
                text: 'Yemek Kaşığı: Pratik Ölçüm',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Yemek kaşığı, yaklaşık 15ml hacmine eşit olan pratik bir ölçü birimidir. Zeytinyağı, sirke, baharat gibi küçük miktarlardaki malzemeler için idealdir.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: "Yaklaşık 15ml'ye eşit olan kaşık ölçü birimi.",
      image: heroImage.id,
      title: 'Yemek Kaşığı - Pratik Ölçüm',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const teaspoonUnit: (
  args: IngredientUnitArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnits'> = ({ heroImage, author }) => {
  return {
    slug: 'teaspoon',
    _status: 'published',
    title: 'Tatlı Kaşığı',
    description: "Yaklaşık 5ml'ye eşit olan küçük kaşık ölçü birimi.",
    authors: [author],
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
                text: 'Tatlı Kaşığı: Küçük Dozlar',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
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
                text: 'Tatlı kaşığı, yaklaşık 5ml hacmine eşit olan küçük ölçü birimidir. Tuz, karabiber, vanilya gibi yoğun lezzetli malzemeler için uygundur.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: "Yaklaşık 5ml'ye eşit olan küçük kaşık ölçü birimi.",
      image: heroImage.id,
      title: 'Tatlı Kaşığı - Küçük Dozlar',
    },
    relatedIngredientUnits: [], // Bu seed script tarafından doldurulacak
    ingredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}
