import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type RecipeArgs = {
  heroImage: Media
  author: User
  // Ingredient docs
  tomatoDoc: any
  onionDoc: any
  riceDoc: any
  eggDoc: any
  saltDoc: any
  blackPepperDoc: any
  lentilDoc: any
  carrotDoc: any
  potatoDoc: any
  oliveOilDoc: any
  // Unit docs
  gramUnitDoc: any
  pieceUnitDoc: any
  tablespoonUnitDoc: any
  teaspoonUnitDoc: any
  milliliterUnitDoc: any
  // Difficulty and cooking method docs
  easyLevelDoc: any
  mediumLevelDoc: any
  hardLevelDoc: any
  stovetopMethodDoc: any
  ovenMethodDoc: any
  steamMethodDoc: any
  grillMethodDoc: any
  pressureCookerMethodDoc: any
  // Nutrient docs
  caloriesDoc: any
  proteinDoc: any
  carbohydratesDoc: any
  fatDoc: any
  fiberDoc: any
  sugarDoc: any
  sodiumDoc: any
  cholesterolDoc: any
  // Diet type docs
  veganDoc: any
  vegetarianDoc: any
  glutenFreeDoc: any
  ketoDoc: any
  lowCarbDoc: any
  mediterraneanDoc: any
  paleoDoc: any
}

export const recipe3: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
  heroImage,
  author,
  onionDoc,
  tomatoDoc,
  oliveOilDoc,
  saltDoc,
  blackPepperDoc,
  gramUnitDoc,
  pieceUnitDoc,
  tablespoonUnitDoc,
  teaspoonUnitDoc,
  ovenMethodDoc,
  mediumLevelDoc,
  caloriesDoc,
  proteinDoc,
  carbohydratesDoc,
  fatDoc,
  fiberDoc,
  sugarDoc,
  sodiumDoc,
  cholesterolDoc,
}) => {
  return {
    slug: 'lahmacun',
    _status: 'published',
    title: 'Lahmacun',
    description:
      'İnce açılmış hamur üzerine domates, soğan ve baharatlarla tatlandırılmış harçla hazırlanan, taş fırında pişen klasik lezzet.',
    servings: 6,
    prepTime: 45,
    cookTime: 12,
    difficulty: mediumLevelDoc.id,
    cookingMethod: [ovenMethodDoc.id],
    heroImage: heroImage.id,
    authors: [author],

    ingredients: [
      {
        ingredient: onionDoc.id,
        amount: 2,
        unit: pieceUnitDoc.id,
        notes: 'İnce doğranmış veya rondodan geçirilmiş; harç için',
        optional: false,
      },
      {
        ingredient: tomatoDoc.id,
        amount: 300,
        unit: gramUnitDoc.id,
        notes: 'Rendelenmiş domates; suyuyla birlikte harca',
        optional: false,
      },
      {
        ingredient: oliveOilDoc.id,
        amount: 2,
        unit: tablespoonUnitDoc.id,
        notes: 'Harca bağlayıcılık ve lezzet için',
        optional: false,
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Damak zevkine göre ayarlayın',
        optional: false,
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 0.5,
        unit: teaspoonUnitDoc.id,
        notes: 'Baharat dengesi için',
        optional: false,
      },

      // Not: Hamur (un, su, maya) ve kıyma, maydanoz, biber salçası vb. için
      // ilgili dokümanlar eklendiğinde aynı yapıda yeni item’lar kolayca eklenebilir.
      // Şimdilik mevcut doküman seti ile temel harç iskeleti verilmiştir.
    ],

    instructions: [
      {
        step: 'Fırını yüksek ısıya (250–270°C) ısıtın; mümkünse taş veya çelik tepsi kullanın.',
        tip: 'Isınmış taş/tepsi tabanını çok daha iyi kızartır.',
        image: null,
      },
      {
        step: 'Soğanı çok ince doğrayın veya rondodan geçirin. Rendelenmiş domates ve zeytinyağıyla karıştırın.',
        tip: 'Harç sulu değil, sürülebilir kıvamda olmalı.',
        image: null,
      },
      {
        step: 'Tuz ve karabiberle tatlandırın; doku ve lezzeti dengeleyin.',
        tip: 'Baharatları artırıp azaltarak profil oluşturabilirsiniz.',
        image: null,
      },
      {
        step: 'İnce açılmış hamur tabanına harcı eşit ve ince bir tabaka halinde sürün.',
        tip: 'Kenarları çok taşırmadan, her yere ince yayılmalı.',
        image: null,
      },
      {
        step: 'Önceden ısınmış fırında 8–12 dakika, kenarlar kızarana ve taban çıtırlaşana dek pişirin.',
        tip: 'Fırın gücüne göre süre değişir; alt-kızartma kritik.',
        image: null,
      },
      {
        step: 'Fırından çıkarıp sıcak servis edin. Yanında limon ve yeşilliklerle sunabilirsiniz.',
        tip: 'Servisten hemen önce limon sıkarak tazelik katın.',
        image: null,
      },
    ],

    servingTips:
      'Taze maydanoz, limon ve sumak soğanıyla servis edin. Yanına ayran iyi eşlik eder.',

    nutritionValues: [
      { nutrient: caloriesDoc.id, amount: 320, unit: 'kcal' },
      { nutrient: proteinDoc.id, amount: 8, unit: 'g' },
      { nutrient: carbohydratesDoc.id, amount: 44, unit: 'g' },
      { nutrient: fatDoc.id, amount: 12, unit: 'g' },
      { nutrient: fiberDoc.id, amount: 3, unit: 'g' },
      { nutrient: sugarDoc.id, amount: 5, unit: 'g' },
      { nutrient: sodiumDoc.id, amount: 520, unit: 'mg' },
      { nutrient: cholesterolDoc.id, amount: 0, unit: 'mg' },
    ],

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
                text: 'Lahmacun: İnce Hamur, Büyük Lezzet',
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
                text: 'Lahmacun, ince açılmış hamur üzerine sebzeler ve baharatlarla hazırlanan harcın sürülmesiyle kısa sürede yüksek ısıda pişirilir. Doğru ısı ve ince taban, çıtırlığın anahtarıdır.',
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
                text: 'Pişirme İpuçları',
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
                text: 'Fırın yeterince ön ısıtılmalı; tepsi/taş kızgın olmalı. Harç ince yayılmalı, kenarlar çıtır kalmalı.',
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

    meta: {
      description: 'Taş fırın lezzetini evde yakalayabileceğiniz pratik lahmacun tarifi.',
      image: heroImage.id,
      title: 'Lahmacun - İnce Hamur, Büyük Lezzet',
    },

    relatedRecipes: [],
    categories: [],
    seasons: [],
    regions: [],
    dietTypes: [], // Et ve gluten içerdiği için vegan/vejetaryen/glutensiz işaretlenmedi
  }
}
