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
