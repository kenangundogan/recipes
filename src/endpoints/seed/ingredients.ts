import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type IngredientArgs = {
  heroImage: Media
  author: User
}

// Vegetables
export const tomatoIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'tomato',
    _status: 'published',
    title: 'Domates',
    description: 'Türk mutfağının vazgeçilmez malzemesi, licopenin kaynağı.',
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
                text: 'Domates: Mutfağın Vazgeçilmezi',
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
                text: 'Domates, Türk mutfağının en önemli malzemelerinden biridir. C vitamini ve likopen antioksidanı açısından zengindir. Taze, konserve veya salça halinde kullanılabilir.',
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
                text: 'Salata, çorba, soslar, dolma, kebap gibi sayısız yemekte kullanılır. Hem çiğ hem de pişmiş olarak tüketilebilir.',
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
      description: 'Türk mutfağının vazgeçilmez malzemesi, licopenin kaynağı.',
      image: heroImage.id,
      title: 'Domates - Mutfağın Vazgeçilmezi',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const onionIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'onion',
    _status: 'published',
    title: 'Soğan',
    description: 'Temel lezzet kaynağı, her yemeğin vazgeçilmez bileşeni.',
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
                text: 'Soğan: Lezzetin Temeli',
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
                text: 'Soğan, neredeyse her yemeğin temel malzemelerinden biridir. Antibakteriyel özellikler taşır ve immün sistemi güçlendirir. Pişirme sırasında karamelleşerek tatlı bir lezzet kazanır.',
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
      description: 'Temel lezzet kaynağı, her yemeğin vazgeçilmez bileşeni.',
      image: heroImage.id,
      title: 'Soğan - Lezzetin Temeli',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const potatoIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'potato',
    _status: 'published',
    title: 'Patates',
    description: 'Doyurucu ve çok yönlü sebze, karbonhidrat kaynağı.',
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
                text: 'Patates: Çok Yönlü Sebze',
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
                text: 'Patates, karbonhidrat, C vitamini ve potasyum açısından zengindir. Haşlama, kızartma, fırınlama gibi farklı pişirme yöntemleriyle çeşitli lezzetler sunar.',
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
      description: 'Doyurucu ve çok yönlü sebze, karbonhidrat kaynağı.',
      image: heroImage.id,
      title: 'Patates - Çok Yönlü Sebze',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

// Fruits
export const appleIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'apple',
    _status: 'published',
    title: 'Elma',
    description: 'Lif ve antioksidan açısından zengin, klasik meyve.',
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
                text: 'Elma: Sağlığın Sembolü',
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
                text: 'Elma, lif, C vitamini ve antioksidanlar açısından zengindir. "Günde bir elma doktoru uzaklaştırır" sözü boşuna değildir. Taze tüketilebildiği gibi komposto, turta ve tatlılarda da kullanılır.',
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
      description: 'Lif ve antioksidan açısından zengin, klasik meyve.',
      image: heroImage.id,
      title: 'Elma - Sağlığın Sembolü',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const lemonIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'lemon',
    _status: 'published',
    title: 'Limon',
    description: 'C vitamini kaynağı, ekşi lezzet veren narenciye.',
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
                text: 'Limon: Doğal Vitamin Deposu',
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
                text: 'Limon, yüksek C vitamini içeriği ile bağışıklık sistemini güçlendirir. Suyu ve kabuğu mutfakta yaygın olarak kullanılır. Yemeklere taze ve ekşi bir lezzet katar.',
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
      description: 'C vitamini kaynağı, ekşi lezzet veren narenciye.',
      image: heroImage.id,
      title: 'Limon - Doğal Vitamin Deposu',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

// Grains
export const riceIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'rice',
    _status: 'published',
    title: 'Pirinç',
    description: 'Temel karbonhidrat kaynağı, pilav ve tatlıların temel malzemesi.',
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
                text: 'Pirinç: Beslenmenin Temeli',
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
                text: 'Pirinç, dünya nüfusunun yarısının temel besin kaynağıdır. Karbonhidrat açısından zengin olan pirinç, kolay sindirilebilir ve gluten içermez. Pilav, dolma, tatlı gibi sayısız yemekte kullanılır.',
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
      description: 'Temel karbonhidrat kaynağı, pilav ve tatlıların temel malzemesi.',
      image: heroImage.id,
      title: 'Pirinç - Beslenmenin Temeli',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const bulgurIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'bulgur',
    _status: 'published',
    title: 'Bulgur',
    description: 'Türk mutfağının geleneksel tahılı, lif açısından zengin.',
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
                text: "Bulgur: Anadolu'nun Hazinesi",
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
                text: 'Bulgur, buğdayın kaynayan suda haşlanıp kurutulması ve kırılmasıyla elde edilir. Protein, lif ve B vitaminleri açısından zengindir. Pilav, çorba, salata ve köfte yapımında kullanılır.',
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
      description: 'Türk mutfağının geleneksel tahılı, lif açısından zengin.',
      image: heroImage.id,
      title: "Bulgur - Anadolu'nun Hazinesi",
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

// Proteins
export const chickenIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'chicken',
    _status: 'published',
    title: 'Tavuk',
    description: 'Yüksek protein, düşük yağ içeren beyaz et.',
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
                text: 'Tavuk: Sağlıklı Protein Kaynağı',
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
                text: 'Tavuk eti, yüksek kaliteli protein sağlar ve nispeten düşük yağ içerir. B vitaminleri ve mineraller açısından zengindir. Izgara, haşlama, kavurma gibi çeşitli yöntemlerle pişirilebilir.',
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
      description: 'Yüksek protein, düşük yağ içeren beyaz et.',
      image: heroImage.id,
      title: 'Tavuk - Sağlıklı Protein Kaynağı',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const eggIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'egg',
    _status: 'published',
    title: 'Yumurta',
    description: 'Tam protein kaynağı, çok yönlü kullanım alanı.',
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
                text: 'Yumurta: Doğanın Mükemmel Besini',
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
                text: 'Yumurta, tüm esansiyel amino asitleri içeren tam protein kaynağıdır. Kahvaltıdan tatlılara kadar geniş kullanım alanına sahiptir. Haşlama, omlet, çırpılmış gibi çeşitli şekillerde hazırlanabilir.',
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
      description: 'Tam protein kaynağı, çok yönlü kullanım alanı.',
      image: heroImage.id,
      title: 'Yumurta - Doğanın Mükemmel Besini',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

// Dairy
export const milkIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'milk',
    _status: 'published',
    title: 'Süt',
    description: 'Kalsiyum ve protein kaynağı, temel süt ürünü.',
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
                text: 'Süt: Doğal Kalsiyum Deposu',
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
                text: 'Süt, kalsiyum, protein ve B vitamini açısından zengindir. Kemik sağlığı için önemlidir. İçecek olarak tüketilebildiği gibi tatlı, çorba ve fırın ürünlerinde de kullanılır.',
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
      description: 'Kalsiyum ve protein kaynağı, temel süt ürünü.',
      image: heroImage.id,
      title: 'Süt - Doğal Kalsiyum Deposu',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const yogurtIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'yogurt',
    _status: 'published',
    title: 'Yoğurt',
    description: 'Probiyotik bakteriler içeren fermente süt ürünü.',
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
                text: 'Yoğurt: Faydalı Bakterilerin Yurdu',
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
                text: 'Yoğurt, probiyotik bakteriler içeren fermente süt ürünüdür. Sindirim sistemini destekler ve bağışıklığı güçlendirir. Türk mutfağında önemli bir yere sahiptir ve çeşitli yemeklerde kullanılır.',
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
      description: 'Probiyotik bakteriler içeren fermente süt ürünü.',
      image: heroImage.id,
      title: 'Yoğurt - Faydalı Bakterilerin Yurdu',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

// Spices
export const saltIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'salt',
    _status: 'published',
    title: 'Tuz',
    description: 'Temel lezzet verici, yemeklerin vazgeçilmez çeşnisi.',
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
                text: 'Tuz: Lezzetin Anahtarı',
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
                text: 'Tuz, yemeklerin lezzetini ortaya çıkaran en temel çeşnidir. Konservasyonda da kullanılır ve vücudun sodyum ihtiyacını karşılar. Ölçülü kullanım önemlidir.',
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
      description: 'Temel lezzet verici, yemeklerin vazgeçilmez çeşnisi.',
      image: heroImage.id,
      title: 'Tuz - Lezzetin Anahtarı',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const blackPepperIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'black-pepper',
    _status: 'published',
    title: 'Karabiber',
    description: 'Keskin lezzet veren evrensel baharat.',
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
                text: 'Karabiber: Baharatların Kralı',
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
                text: 'Karabiber, dünya mutfaklarında en yaygın kullanılan baharattır. Keskin ve aromatik lezzeti ile yemeklere derinlik katar. Sindirime yardımcı olur ve antioksidan özellikler taşır.',
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
      description: 'Keskin lezzet veren evrensel baharat.',
      image: heroImage.id,
      title: 'Karabiber - Baharatların Kralı',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const lentilIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'lentil',
    _status: 'published',
    title: 'Mercimek',
    description:
      'Protein açısından zengin baklagil, özellikle kırmızı mercimek çorbalarda sıkça kullanılır.',
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
                text: 'Mercimek: Protein Deposu',
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
                text: 'Mercimek, özellikle vegan ve vejetaryen beslenmede çok önemli bir protein kaynağıdır. Kırmızı mercimek daha hızlı pişer ve çorbalarda yaygın kullanılır.',
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
      description:
        'Protein açısından zengin baklagil, özellikle kırmızı mercimek çorbalarda sıkça kullanılır.',
      image: heroImage.id,
      title: 'Mercimek - Protein Deposu',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const carrotIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'carrot',
    _status: 'published',
    title: 'Havuç',
    description:
      'Beta karoten açısından zengin turuncu sebze, çorbalarda ve yemeklerde yaygın kullanılır.',
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
                text: 'Havuç: A Vitamini Kaynağı',
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
                text: 'Havuç, beta karoten içeriği ile A vitamini kaynağıdır. Çorbalarda, salatalarda ve sebze yemeklerinde yaygın olarak kullanılır.',
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
      description:
        'Beta karoten açısından zengin turuncu sebze, çorbalarda ve yemeklerde yaygın kullanılır.',
      image: heroImage.id,
      title: 'Havuç - A Vitamini Kaynağı',
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const oliveOilIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'olive-oil',
    _status: 'published',
    title: 'Zeytinyağı',
    description:
      'Sağlıklı tekli doymamış yağ asitleri açısından zengin, Akdeniz mutfağının vazgeçilmezi.',
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
                text: "Zeytinyağı: Akdeniz'in Altını",
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
                text: 'Zeytinyağı, sağlıklı tekli doymamış yağ asitleri ve E vitamini içerir. Özellikle sızma zeytinyağı, yüksek antioksidan içeriği ile kalp sağlığını destekler.',
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
      description:
        'Sağlıklı tekli doymamış yağ asitleri açısından zengin, Akdeniz mutfağının vazgeçilmezi.',
      image: heroImage.id,
      title: "Zeytinyağı - Akdeniz'in Altını",
    },
    relatedIngredients: [], // Bu seed script tarafından doldurulacak
    ingredientCategories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
  }
}

// Added for Lahmacun
export const flourIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'flour',
    _status: 'published',
    title: 'Un',
    description: 'Hamur işleri ve ekmek yapımının temel bileşeni, doğru gluten yapısı için kritik.',
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
                text: 'Un Hakkında',
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
                text: 'Doğru protein oranı ve öğütümle hamurun elastikiyetini belirler.',
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
      description: 'Doğru protein oranı ve öğütümle hamurun elastikiyetini belirler.',
      image: heroImage.id,
      title: 'Un - Hamurun Temeli',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const waterIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'water',
    _status: 'published',
    title: 'Su',
    description: 'Hamurun hidrasyonu ve gluten gelişimi için vazgeçilmez.',
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
                text: 'Su Hakkında',
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
                text: 'Hidrasyon düzeyi kıvam, doku ve pişme kalitesini etkiler.',
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
      description: 'Hidrasyon düzeyi kıvam, doku ve pişme kalitesini etkiler.',
      image: heroImage.id,
      title: 'Su - Hamurun Hayati Bileşeni',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const yeastIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'yeast',
    _status: 'published',
    title: 'Maya',
    description: 'Hamuru fermente ederek hacim ve aroma kazandırır.',
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
                text: 'Maya Hakkında',
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
                text: 'Uygun sıcaklık ve süreyle optimum kabarma sağlar.',
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
      description: 'Uygun sıcaklık ve süreyle optimum kabarma sağlar.',
      image: heroImage.id,
      title: 'Maya - Doğal Fermantasyon Gücü',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const beefIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'beef',
    _status: 'published',
    title: 'Dana Kıyma',
    description: 'Lahmacun harcının protein kaynağı, yağ oranı lezzeti belirler.',
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
                text: 'Dana Kıyma Hakkında',
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
                text: '%15–20 yağ oranı ideal sulu doku sağlar.',
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
      description: '%15–20 yağ oranı ideal sulu doku sağlar.',
      image: heroImage.id,
      title: 'Dana Kıyma - Lezzetin Gövdesi',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const parsleyIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'parsley',
    _status: 'published',
    title: 'Maydanoz',
    description: 'Ferahlık ve denge; harçta tazelik katar.',
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
                text: 'Maydanoz Hakkında',
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
                text: 'İnce kıyım, harç dağılımını ve aromayı dengeler.',
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
      description: 'İnce kıyım, harç dağılımını ve aromayı dengeler.',
      image: heroImage.id,
      title: 'Maydanoz - Taze Dokunuş',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const pepperPasteIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'pepper-paste',
    _status: 'published',
    title: 'Biber Salçası',
    description: 'Renk, gövde ve kapsaisinle karakter katar.',
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
                text: 'Biber Salçası Hakkında',
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
                text: 'İyi kalite salça harca parıltı ve derinlik verir.',
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
      description: 'İyi kalite salça harca parıltı ve derinlik verir.',
      image: heroImage.id,
      title: 'Biber Salçası - Gövde ve Renk',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const garlicIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'garlic',
    _status: 'published',
    title: 'Sarımsak',
    description: 'Keskin ve tatlı aromasıyla harca omurga kazandırır.',
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
                text: 'Sarımsak Hakkında',
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
                text: 'Azı karar; doz aşımı acılığa kaçırabilir.',
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
      description: 'Azı karar; doz aşımı acılığa kaçırabilir.',
      image: heroImage.id,
      title: 'Sarımsak - Aromanın Omurgası',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const greenPepperIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'green-pepper',
    _status: 'published',
    title: 'Yeşil Biber',
    description: 'Taze biber aroması ve hafif acılık katar.',
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
                text: 'Yeşil Biber Hakkında',
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
                text: 'İnce doğrayın; su salmaması için fazla çalışmayın.',
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
      description: 'İnce doğrayın; su salmaması için fazla çalışmayın.',
      image: heroImage.id,
      title: 'Yeşil Biber - Taptaze Koku',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const sumacIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'sumac',
    _status: 'published',
    title: 'Sumak',
    description: 'Serviste ekşimsi tazelik ve dengeli asidite sağlar.',
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
                text: 'Sumak Hakkında',
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
                text: 'Son dokunuşta serpmek aromayı korur.',
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
      description: 'Son dokunuşta serpmek aromayı korur.',
      image: heroImage.id,
      title: 'Sumak - Taze Asidite',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}

// Added for Lahmacun
export const paprikaIngredient: (
  args: IngredientArgs,
) => RequiredDataFromCollectionSlug<'ingredients'> = ({ heroImage, author }) => {
  return {
    slug: 'paprika',
    _status: 'published',
    title: 'Toz Kırmızı Biber',
    description: 'Renk ve hafif tatlı-acı profil için kullanılır.',
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
                text: 'Toz Kırmızı Biber Hakkında',
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
                text: 'Isıya dayanıklıdır; yanmaması için kontrollü pişirin.',
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
      description: 'Isıya dayanıklıdır; yanmaması için kontrollü pişirin.',
      image: heroImage.id,
      title: 'Toz Kırmızı Biber - Renk ve Aroma',
    },
    relatedIngredients: [],
    ingredientCategories: [],
    seasons: [],
  }
}
