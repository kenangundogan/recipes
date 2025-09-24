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
export const recipe2: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
  heroImage,
  author,
  tomatoDoc,
  riceDoc,
  onionDoc,
  saltDoc,
  blackPepperDoc,
  gramUnitDoc,
  pieceUnitDoc,
  tablespoonUnitDoc,
  teaspoonUnitDoc,
  mediumLevelDoc,
  stovetopMethodDoc,
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
    slug: 'domates-corbasi',
    _status: 'published',
    title: 'Domates Çorbası',
    description:
      'Klasik Türk mutfağının en sevilen çorbalarından; ipeksi dokulu, domates aroması belirgin, pratik ve lezzetli.',
    servings: 4,
    prepTime: 10,
    cookTime: 30,
    difficulty: mediumLevelDoc.id,
    cookingMethod: [stovetopMethodDoc.id], // Çorba genelde sadece ocak üstü
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: tomatoDoc.id,
        amount: 800,
        unit: gramUnitDoc.id,
        notes: 'Olgun domates (yaklaşık 6-7 adet)',
        optional: false,
      },
      {
        ingredient: onionDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy, ince doğranmış',
        optional: false,
      },
      {
        ingredient: riceDoc.id,
        amount: 30,
        unit: gramUnitDoc.id,
        notes: 'Kıvam ve bağlayıcılık için (isteğe bağlı)',
        optional: true,
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Damaka göre ayarlayın',
        optional: false,
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 0.5,
        unit: teaspoonUnitDoc.id,
        notes: '',
        optional: true,
      },
    ],
    instructions: [
      {
        step: 'Domatesleri kabuklarını kolay soymak için çentikleyip 1 dakika kaynar suda bekletin, ardından soyup doğrayın.',
        tip: 'Konserve doğranmış domates de kullanabilirsiniz.',
        image: null,
      },
      {
        step: 'Tencerede az yağla (tohum yağı veya tereyağı) ince doğranmış soğanı şeffaflaşana kadar soteleyin.',
        tip: '',
        image: null,
      },
      {
        step: 'Doğranmış domatesleri ekleyip 5-6 dakika pişirin; tuz ve karabiberi ekleyin.',
        tip: 'Domatesin asiditesine göre tuzu dengeleyin.',
        image: null,
      },
      {
        step: 'İsteğe bağlı olarak yıkanmış pirinci ekleyin ve üzerini geçecek kadar sıcak su ilave edip kaynamaya bırakın (yaklaşık 12-15 dakika).',
        tip: 'Pirinç taneleri dağılmadan yumuşamalı.',
        image: null,
      },
      {
        step: 'El blenderı ile pürüzsüz kıvam alın. Gerekirse sıcak su ekleyerek kıvamı ayarlayın.',
        tip: 'Daha ipeksi doku için ince bir süzgeçten geçirebilirsiniz.',
        image: null,
      },
    ],
    servingTips: 'Üzerine rendelenmiş kaşar veya taze fesleğen serpip sıcak servis edin.',
    nutritionValues: [
      {
        nutrient: caloriesDoc.id,
        amount: 425,
        unit: 'kcal',
      },
      {
        nutrient: proteinDoc.id,
        amount: 28,
        unit: 'g',
      },
      {
        nutrient: carbohydratesDoc.id,
        amount: 22,
        unit: 'g',
      },
      {
        nutrient: fatDoc.id,
        amount: 18,
        unit: 'g',
      },
      {
        nutrient: fiberDoc.id,
        amount: 2,
        unit: 'g',
      },
      {
        nutrient: sugarDoc.id,
        amount: 4,
        unit: 'g',
      },
      {
        nutrient: sodiumDoc.id,
        amount: 980,
        unit: 'mg',
      },
      {
        nutrient: cholesterolDoc.id,
        amount: 75,
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
                text: "Beyran Çorbası: Gaziantep'in Lezzet Hazinesi",
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
                text: 'Beyran çorbası, Gaziantep mutfağının en önemli lezzetlerinden biridir. Yoğun baharatları ve et aroması ile tanınan bu çorba, özellikle soğuk kış günlerinde içinizi ısıtacak bir tarif.',
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
                text: 'Tarihi ve Kültürel Önemi',
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
                text: "Beyran, özellikle ramazan aylarında sahur vakti tüketilen, doyurucu ve besleyici bir çorbadır. Gaziantep'in gastronomi kültürünün ayrılmaz bir parçası olan bu lezzet, nesiller boyu aktarılan geleneksel tariflerle hazırlanır.",
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
      description: 'Kremasız veya pirinçli hazırlanabilen, ipeksi dokulu klasik domates çorbası.',
      image: heroImage.id,
      title: 'Domates Çorbası - Klasik ve İpeksi',
    },
    relatedRecipes: [], // Bu seed script tarafından doldurulacak
    categories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
    regions: [], // Bu seed script tarafından doldurulacak
    dietTypes: [], // Bu seed script tarafından doldurulacak
  }
}
