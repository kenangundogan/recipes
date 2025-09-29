import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type IngredientCategoryArgs = {
  heroImage: Media
  author: User
}

export const vegetablesCategory: (
  args: IngredientCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'vegetables',
    _status: 'published',
    title: 'Sebzeler',
    description: 'Taze ve besleyici sebzeler - sağlıklı beslenmenin temel taşları.',
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
                text: 'Sebzeler: Sağlıklı Beslenmenin Temeli',
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
                text: 'Sebzeler, vitamin, mineral ve lif açısından zengin olan ve sağlıklı beslenmenin vazgeçilmez unsurlarıdır. Yemeklerimize renk, lezzet ve besin değeri katarlar.',
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
                text: 'Besin Değeri',
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
                text: 'Sebzeler C vitamini, folat, potasyum ve diyet lifi açısından zengindir. Antioksidanlar içermeleri sayesinde hastalıklara karşı koruma sağlarlar.',
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
                text: 'Mutfakta Kullanım',
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
                text: 'Sebzeler çiğ olarak salatalarda, haşlanarak, buğulanarak, kavurularak veya fırınlanarak tüketilebilir. Her pişirme yöntemi farklı lezzet ve tekstür sunar.',
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
      description: 'Taze ve besleyici sebzeler - sağlıklı beslenmenin temel taşları.',
      image: heroImage.id,
      title: 'Sebzeler - Sağlıklı Beslenmenin Temeli',
    },
    relatedIngredientCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const fruitsCategory: (
  args: IngredientCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'fruits',
    _status: 'published',
    title: 'Meyveler',
    description: 'Doğal şeker ve vitamin kaynağı tatlı meyveler.',
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
                text: 'Meyveler: Doğanın Tatlıları',
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
                text: 'Meyveler doğal fruktoz içerikleri ile sağlıklı bir tatlı alternatifi sunarlar. Vitamin C, lif ve antioksidanlar açısından zengin olan meyveler hem lezzetli hem de besleyicidir.',
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
                text: 'Mevsimsel Çeşitlilik',
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
                text: 'Her mevsimin kendine özgü meyveleri vardır. İlkbaharda çilek, yazın şeftali, sonbaharda elma ve kışın portakal gibi mevsimsel meyveler en taze ve lezzetli hallerindedir.',
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
                text: 'Meyveler taze olarak tüketilebildiği gibi komposto, reçel, smoothie, pasta ve tatlılarda da kullanılabilir. Kurutulmuş halleri de besleyici atıştırmalıklardır.',
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
      description: 'Doğal şeker ve vitamin kaynağı tatlı meyveler.',
      image: heroImage.id,
      title: 'Meyveler - Doğanın Tatlıları',
    },
    relatedIngredientCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const grainsCategory: (
  args: IngredientCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'grains',
    _status: 'published',
    title: 'Tahıllar',
    description: 'Karbonhidrat ve enerji kaynağı tahıl ürünleri.',
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
                text: 'Tahıllar: Beslenmenin Temeli',
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
                text: 'Tahıllar insanlığın temel besin kaynağıdır. Buğday, pirinç, mısır, arpa gibi tahıllar karbonhidrat, protein, B vitamini ve lif sağlarlar.',
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
                text: 'Tam Tahıl Faydaları',
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
                text: 'Tam tahıllar işlenmemiş halleriyle daha fazla lif, vitamin ve mineral içerirler. Kalp sağlığı, sindirimi destekleme ve uzun süreli tokluk hissi sağlarlar.',
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
                text: 'Mutfaktaki Yeri',
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
                text: 'Tahıllar ekmek, makarna, pilav, bulgur pilavı gibi ana yemeklerin temelini oluşturur. Ayrıca tatlı ve tuzlu atıştırmalıklarda da kullanılır.',
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
      description: 'Karbonhidrat ve enerji kaynağı tahıl ürünleri.',
      image: heroImage.id,
      title: 'Tahıllar - Beslenmenin Temeli',
    },
    relatedIngredientCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const proteinsCategory: (
  args: IngredientCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'proteins',
    _status: 'published',
    title: 'Protein Kaynakları',
    description: 'Et, tavuk, balık, baklagil gibi protein açısından zengin besinler.',
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
                text: 'Protein Kaynakları: Yapı Taşları',
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
                text: 'Proteinler vücudumuzun yapı taşlarıdır. Kas gelişimi, doku onarımı ve enzim üretimi için gereklidirler. Hayvansal ve bitkisel protein kaynakları çeşitli seçenekler sunar.',
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
                text: 'Hayvansal Proteinler',
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
                text: 'Et, tavuk, balık, yumurta ve süt ürünleri tam protein içerirler. Tüm esansiyel amino asitleri barındırdıkları için yüksek biyolojik değere sahiptirler.',
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
                text: 'Bitkisel Proteinler',
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
                text: 'Baklagiller, fındık, ceviz gibi kuruyemişler ve tohum ürünleri önemli bitkisel protein kaynaklarıdır. Lif ve sağlıklı yağlar da içerirler.',
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
      description: 'Et, tavuk, balık, baklagil gibi protein açısından zengin besinler.',
      image: heroImage.id,
      title: 'Protein Kaynakları - Yapı Taşları',
    },
    relatedIngredientCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const dairyCategory: (
  args: IngredientCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'dairy',
    _status: 'published',
    title: 'Süt Ürünleri',
    description: 'Süt, peynir, yoğurt ve diğer süt ürünleri.',
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
                text: 'Süt Ürünleri: Kalsiyum Deposu',
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
                text: 'Süt ürünleri kalsiyum, protein ve B vitaminleri açısından zengindir. Kemik sağlığı için önemli olan bu ürünler çeşitli formlarda tüketilebilir.',
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
                text: 'Fermente Ürünler',
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
                text: 'Yoğurt, kefir ve peynir gibi fermente süt ürünleri probiyotik bakteriler içerir. Bu faydalı bakteriler sindirim sistemini destekler ve bağışıklığı güçlendirir.',
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
                text: 'Mutfakta Kullanım',
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
                text: 'Süt ürünleri hem tatlı hem tuzlu yemeklerde kullanılır. Soslar, tatlılar, fırın yemekleri ve kahvaltılık ürünlerde vazgeçilmez bileşenlerdir.',
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
      description: 'Süt, peynir, yoğurt ve diğer süt ürünleri.',
      image: heroImage.id,
      title: 'Süt Ürünleri - Kalsiyum Deposu',
    },
    relatedIngredientCategories: [], // Bu seed script tarafından doldurulacak
  }
}

export const spicesCategory: (
  args: IngredientCategoryArgs,
) => RequiredDataFromCollectionSlug<'ingredientCategories'> = ({ heroImage, author }) => {
  return {
    slug: 'spices',
    _status: 'published',
    title: 'Baharat ve Otlar',
    description: 'Yemeklere lezzet ve aroma katan baharat ve taze otlar.',
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
                text: 'Baharat ve Otlar: Lezzetin Sırrı',
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
                text: 'Baharat ve otlar yemeklere benzersiz lezzet, aroma ve renk katarlar. Aynı zamanda antioksidan, antimikrobiyal ve anti-inflamatuar özellikler taşırlar.',
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
                text: 'Türk Mutfağı Baharatları',
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
                text: 'Türk mutfağında kırmızı biber, karabiber, kimyon, kekik, dereotu, maydanoz gibi baharat ve otlar yaygın olarak kullanılır. Her bölgenin kendine özgü baharat karışımları vardır.',
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
                text: 'Saklama ve Kullanım',
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
                text: 'Baharatlar serin, kuru ve karanlık yerlerde saklanmalıdır. Taze otlar buzdolabında, kurutulmuş baharatlar ise kapalı kaplarda muhafaza edilir.',
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
      description: 'Yemeklere lezzet ve aroma katan baharat ve taze otlar.',
      image: heroImage.id,
      title: 'Baharat ve Otlar - Lezzetin Sırrı',
    },
    relatedIngredientCategories: [], // Bu seed script tarafından doldurulacak
  }
}
