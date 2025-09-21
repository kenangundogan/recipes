import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type IngredientUnitCategoryArgs = {
  heroImage: Media
  author: User
}

export const weightCategory: (
  args: IngredientUnitCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnitCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'weight',
    _status: 'published',
    title: 'Ağırlık',
    description: 'Gram, kilogram gibi ağırlık ölçü birimleri.',
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
                text: 'Ağırlık Ölçü Birimleri',
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
                text: 'Ağırlık ölçü birimleri mutfakta en yaygın kullanılan ölçüm yöntemlerinden biridir. Katı malzemeler genellikle ağırlıkla ölçülür ve bu da tariflerde hassas sonuçlar verir.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Hassasiyet',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Ağırlık ölçümleri özellikle fırıncılık ve pastanede çok önemlidir. Gram cinsinden hassas ölçümler, tutarlı sonuçlar elde etmek için gereklidir.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Kullanım Alanları',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Un, şeker, et, sebze gibi çoğu malzeme ağırlık ile ölçülür. Özellikle toz halindeki malzemeler için hacimden daha güvenilir sonuçlar verir.',
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
      description: 'Gram, kilogram gibi ağırlık ölçü birimleri.',
      image: heroImage.id,
      title: 'Ağırlık - Ölçü Birimleri',
    },
    relatedIngredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const volumeCategory: (
  args: IngredientUnitCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnitCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'volume',
    _status: 'published',
    title: 'Hacim',
    description: 'Litre, mililitre gibi hacim ölçü birimleri.',
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
                text: 'Hacim Ölçü Birimleri',
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
                text: 'Hacim ölçü birimleri özellikle sıvı malzemeler için kullanılır. Su, süt, yağ gibi sıvılar hacim cinsinden ölçülür ve ölçü kapları ile kolayca hesaplanır.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Sıvı Malzemeler',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Su, süt, meyve suyu, zeytinyağı gibi sıvı malzemeler hacim birimi ile ölçülür. Bu malzemeler için ölçü bardağı veya ölçü kaşığı kullanılır.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Pratik Kullanım',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Hacim ölçüleri ev mutfağında pratik kullanım sağlar. Standart ölçü kapları ile hızlı ve kolay ölçüm yapılabilir.',
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
      description: 'Litre, mililitre gibi hacim ölçü birimleri.',
      image: heroImage.id,
      title: 'Hacim - Ölçü Birimleri',
    },
    relatedIngredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const pieceCategory: (
  args: IngredientUnitCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnitCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'piece',
    _status: 'published',
    title: 'Adet/Parça',
    description: 'Adet, parça, dilim gibi sayısal ölçü birimleri.',
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
                text: 'Adet ve Parça Ölçüleri',
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
                text: 'Bazı malzemeler adet, parça veya dilim olarak ölçülür. Bu ölçüm şekli özellikle meyve, sebze, yumurta gibi doğal birimleri olan malzemeler için uygundur.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Doğal Birimler',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Elma, portakal, yumurta, domates gibi malzemeler doğal olarak adet halinde kullanılır. Bu da tariflerde anlaşılır ve pratik bir ölçüm sağlar.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Kesim ve Dilim',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Ekmek dilimi, limon dilimi, soğan halkası gibi kesim şekilleri de adet bazında sayılır. Bu da yemek hazırlamada görsel ve lezzet dengesini sağlar.',
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
      description: 'Adet, parça, dilim gibi sayısal ölçü birimleri.',
      image: heroImage.id,
      title: 'Adet/Parça - Ölçü Birimleri',
    },
    relatedIngredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const spoonCategory: (
  args: IngredientUnitCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientUnitCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'spoon',
    _status: 'published',
    title: 'Kaşık Ölçüleri',
    description: 'Yemek kaşığı, tatlı kaşığı gibi kaşık ölçü birimleri.',
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
                text: 'Kaşık Ölçü Birimleri',
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
                text: 'Kaşık ölçüleri mutfakta en pratik ölçüm yöntemlerinden biridir. Özellikle küçük miktarlardaki baharat, yağ ve sıvı malzemeler için idealdir.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Standart Ölçüler',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: "Yemek kaşığı yaklaşık 15ml, tatlı kaşığı 5ml'dir. Bu standart ölçüler tariflerde tutarlılık sağlar ve her evde bulunabilir.",
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Baharat ve Çeşniler',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Tuz, karabiber, zeytinyağı gibi az miktarda kullanılan malzemeler genellikle kaşık ölçüsü ile belirtilir. Bu da dozajlamayı kolaylaştırır.',
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
      description: 'Yemek kaşığı, tatlı kaşığı gibi kaşık ölçü birimleri.',
      image: heroImage.id,
      title: 'Kaşık Ölçüleri - Ölçü Birimleri',
    },
    relatedIngredientUnitCategories: [], // Bu seed script tarafından doldurulacak
  }
}
