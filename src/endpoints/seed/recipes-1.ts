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
export const recipe1: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
  heroImage,
  author,
  lentilDoc,
  onionDoc,
  carrotDoc,
  potatoDoc,
  tomatoDoc,
  oliveOilDoc,
  saltDoc,
  blackPepperDoc,
  gramUnitDoc,
  pieceUnitDoc,
  tablespoonUnitDoc,
  teaspoonUnitDoc,
  milliliterUnitDoc,
  easyLevelDoc,
  stovetopMethodDoc,
  caloriesDoc,
  proteinDoc,
  carbohydratesDoc,
  fatDoc,
  fiberDoc,
  sugarDoc,
  sodiumDoc,
  cholesterolDoc,
  veganDoc,
  vegetarianDoc,
  glutenFreeDoc,
}) => {
  return {
    slug: 'lentil-soup',
    _status: 'published',
    title: 'Mercimek Çorbası',
    description:
      'Türk mutfağının en sevilen çorbalarından biri. Besleyici, sağlıklı ve pratik mercimek çorbası.',
    servings: 4,
    prepTime: 15,
    cookTime: 35,
    difficulty: easyLevelDoc.id,
    cookingMethod: [stovetopMethodDoc.id],
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: lentilDoc.id,
        amount: 250,
        unit: gramUnitDoc.id,
        notes: 'Kırmızı mercimek',
        optional: false,
      },
      {
        ingredient: onionDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy soğan, ince doğranmış',
        optional: false,
      },
      {
        ingredient: carrotDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy havuç, küp doğranmış',
        optional: false,
      },
      {
        ingredient: potatoDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy patates, küp doğranmış',
        optional: true,
      },
      {
        ingredient: tomatoDoc.id,
        amount: 1,
        unit: tablespoonUnitDoc.id,
        notes: 'Domates salçası',
        optional: false,
      },
      {
        ingredient: oliveOilDoc.id,
        amount: 2,
        unit: tablespoonUnitDoc.id,
        notes: 'Zeytinyağı',
        optional: false,
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Tuza göre ayarlayın',
        optional: false,
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 0.5,
        unit: teaspoonUnitDoc.id,
        notes: 'Karabiber',
        optional: false,
      },
    ],
    instructions: [
      {
        step: 'Mercimekleri soğuk suyla iyice yıkayın ve süzün.',
        tip: 'Taş veya yabancı madde kalmamasına dikkat edin.',
        image: null,
      },
      {
        step: 'Soğanı ince doğrayın, havuç ve patatesi küp şeklinde doğrayın.',
        tip: 'Sebzelerin eşit boyutta olması pişme süresini dengeler.',
        image: null,
      },
      {
        step: 'Geniş bir tencerede zeytinyağını ısıtın ve soğanları pembeleşene kadar kavurun.',
        tip: 'Orta ateşte kavurun, yanmamasına dikkat edin.',
        image: null,
      },
      {
        step: 'Domates salçasını ekleyip 1-2 dakika kavurun.',
        tip: 'Salça kokusu çıkana kadar kavurun.',
        image: null,
      },
      {
        step: 'Mercimek, havuç ve patates ekleyip karıştırın.',
        tip: 'Tüm malzemelerin yağla kaplanmasını sağlayın.',
        image: null,
      },
      {
        step: 'Üzerini geçecek kadar su ekleyin (yaklaşık 1 litre).',
        tip: 'Sıcak su eklemek pişirme süresini kısaltır.',
        image: null,
      },
      {
        step: 'Kaynadıktan sonra kısık ateşte 25-30 dakika, mercimekler yumuşayana kadar pişirin.',
        tip: 'Tahta kaşıkla ara sıra karıştırın, dibi tutmasın.',
        image: null,
      },
      {
        step: 'Blender ile püre haline getirin veya tel çırpıcıyla ezerek karıştırın.',
        tip: 'Blender çok uzun süre çalıştırılırsa kıvam fazla yoğunlaşabilir.',
        image: null,
      },
      {
        step: 'Tuz ve karabiber ile tatlandırın. 2-3 dakika daha kaynatın.',
        tip: 'Baharat miktarını damak zevkinize göre ayarlayın.',
        image: null,
      },
      {
        step: 'Sıcak servis yapın. Dilediğiniz ile limon sıkarak servis edebilirsiniz.',
        tip: 'Üzerine tereyağında kızdırılmış pul biber dökebilirsiniz.',
        image: null,
      },
    ],
    servingTips:
      'Közlenmiş ekmek, tereyağında kızdırılmış pul biber veya limon ile servis edilebilir.',

    nutritionValues: [
      {
        nutrient: caloriesDoc.id,
        amount: 180,
        unit: 'kcal',
      },
      {
        nutrient: proteinDoc.id,
        amount: 12,
        unit: 'g',
      },
      {
        nutrient: carbohydratesDoc.id,
        amount: 28,
        unit: 'g',
      },
      {
        nutrient: fatDoc.id,
        amount: 4,
        unit: 'g',
      },
      {
        nutrient: fiberDoc.id,
        amount: 8,
        unit: 'g',
      },
      {
        nutrient: sugarDoc.id,
        amount: 4,
        unit: 'g',
      },
      {
        nutrient: sodiumDoc.id,
        amount: 320,
        unit: 'mg',
      },
      {
        nutrient: cholesterolDoc.id,
        amount: 0,
        unit: 'mg',
      },
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
                text: 'Mercimek Çorbası: Türk Mutfağının Vazgeçilmez Lezzeti',
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
                text: 'Mercimek çorbası, Türk mutfağının en sevilen ve en besleyici çorbalarından biridir. Protein açısından zengin olan kırmızı mercimek, sebzelerle birleştiğinde hem lezzetli hem de sağlıklı bir öğün oluşturur.',
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
                text: 'Mercimeğin Faydaları',
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
                text: 'Kırmızı mercimek, yüksek protein içeriği, lif değeri ve B vitaminleri açısından zengindir. Vegan ve vejetaryen beslenme için mükemmel bir protein kaynağıdır. Ayrıca demir, magnezyum ve folat bakımından da oldukça değerlidir.',
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
                text: 'Servis Önerileri',
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
                text: 'Mercimek çorbası, yanında galeta bisküvisi, kruton veya taze ekmek ile servis edilir. Üzerine limon sıkmak çorbanın tadını arttırır. Tereyağı ve kırmızı pul biber ile terbiye yapmak da yaygın bir uygulamadır.',
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
      description: 'Besleyici ve lezzetli Türk mercimek çorbası tarifi. Kolay ve pratik hazırlım.',
      image: heroImage.id,
      title: 'Mercimek Çorbası - Türk Mutfağının Vazgeçilmez Lezzeti',
    },
    relatedRecipes: [], // Bu seed script tarafından doldurulacak
    categories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
    regions: [], // Bu seed script tarafından doldurulacak
    dietTypes: [veganDoc.id, vegetarianDoc.id, glutenFreeDoc.id], // Vegan, vejetaryen, glutensiz
  }
}
