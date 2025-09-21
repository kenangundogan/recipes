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
}

export const beyranSoupRecipe: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
  heroImage,
  author,
  riceDoc,
  onionDoc,
  saltDoc,
  blackPepperDoc,
  gramUnitDoc,
  pieceUnitDoc,
  tablespoonUnitDoc,
  teaspoonUnitDoc,
  milliliterUnitDoc,
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
    slug: 'beyran-soup',
    _status: 'published',
    title: 'Beyran Çorbası',
    description:
      'Gaziantep mutfağının ünlü lezzeti, yoğun baharatlarla hazırlanan geleneksel et çorbası.',
    servings: 6,
    prepTime: 30,
    cookTime: 120,
    difficulty: mediumLevelDoc.id,
    cookingMethod: stovetopMethodDoc.id,
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: riceDoc.id,
        amount: 100,
        unit: gramUnitDoc.id,
        notes: 'Baldo pirinç tercih edilir',
      },
      {
        ingredient: onionDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy soğan',
      },
      {
        ingredient: saltDoc.id,
        amount: 2,
        unit: teaspoonUnitDoc.id,
        notes: 'Tuz',
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Karabiber',
      },
    ],
    instructions: [
      {
        step: 'Kuzu etini küp küp doğrayın. Büyük bir tencerede tereyağını eritin ve etleri kavurun.',
        tip: 'Et suyunu salmaması için yüksek ateşte hızla kavurun.',
        image: null,
      },
      {
        step: 'Soğanı ince doğrayıp ete ekleyin. Kavurmaya devam edin.',
        tip: '',
        image: null,
      },
      {
        step: 'Sarımsağı ezin ve tencereye ekleyin. Salça, biber, kimyon ve karabiberi ilave edin.',
        tip: 'Baharatları yanmaması için 1-2 dakika kavurun.',
        image: null,
      },
      {
        step: 'Sıcak suyu ekleyip kaynatın. Köpüğünü alarak 1.5 saat pişirin.',
        tip: 'Et yumuşayıncaya kadar pişirme süresini ayarlayın.',
        image: null,
      },
      {
        step: 'Pirinci ekleyip 20 dakika daha pişirin.',
        tip: 'Pirinç dağılmaması için ara ara karıştırın.',
        image: null,
      },
      {
        step: 'Tuzu ekleyip tadını kontrol edin. Sıcak servis yapın.',
        tip: '',
        image: null,
      },
    ],
    servingTips:
      'Üzerine taze maydanoz serpin ve sıcak ekmek ile servis edin. Gaziantep usulü acı biber ile tatlandırabilirsiniz.',
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
      description:
        'Gaziantep mutfağının ünlü lezzeti, yoğun baharatlarla hazırlanan geleneksel et çorbası.',
      image: heroImage.id,
      title: "Beyran Çorbası - Gaziantep'in Lezzet Hazinesi",
    },
    relatedRecipes: [], // Bu seed script tarafından doldurulacak
    categories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
    regions: [], // Bu seed script tarafından doldurulacak
  }
}

export const menemenRecipe: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
  heroImage,
  author,
  tomatoDoc,
  onionDoc,
  eggDoc,
  saltDoc,
  blackPepperDoc,
  pieceUnitDoc,
  tablespoonUnitDoc,
  teaspoonUnitDoc,
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
}) => {
  return {
    slug: 'menemen',
    _status: 'published',
    title: 'Menemen',
    description:
      'Türk kahvaltısının vazgeçilmez lezzeti, domates ve biberle pişirilen yumurta yemeği.',
    servings: 2,
    prepTime: 10,
    cookTime: 15,
    difficulty: easyLevelDoc.id,
    cookingMethod: stovetopMethodDoc.id,
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: eggDoc.id,
        amount: 4,
        unit: pieceUnitDoc.id,
        notes: 'Taze yumurta',
      },
      {
        ingredient: tomatoDoc.id,
        amount: 3,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy, olgun domates',
      },
      {
        ingredient: onionDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Küçük boy soğan',
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Tuz',
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 0.5,
        unit: teaspoonUnitDoc.id,
        notes: 'Karabiber',
      },
    ],
    instructions: [
      {
        step: 'Domatesleri haşlayıp kabuklarını soyun, küp küp doğrayın.',
        tip: 'Domatesler olgun ve taze olmalı.',
        image: null,
      },
      {
        step: 'Sivri biberleri ve soğanı ince ince doğrayın.',
        tip: '',
        image: null,
      },
      {
        step: 'Tavada zeytinyağını ısıtın, soğanları pembeleşene kadar kavurun.',
        tip: 'Orta ateşte kavurun, yanmasın.',
        image: null,
      },
      {
        step: 'Biberleri ekleyip 2-3 dakika kavurun.',
        tip: '',
        image: null,
      },
      {
        step: 'Domatesleri ekleyip 5 dakika pişirin. Tuz ve karabiber ile baharatlayın.',
        tip: 'Domates suyu çekilene kadar pişirin.',
        image: null,
      },
      {
        step: 'Yumurtaları çırpıp tavaya ekleyin. Karıştırarak pişirin.',
        tip: 'Yumurtalar çok pişmesin, kremsi kalsın.',
        image: null,
      },
    ],
    servingTips:
      'Sıcakken servis edin. Yanında taze ekmek, peynir ve çay ile kahvaltının tadını çıkarın.',
    nutritionValues: [
      {
        nutrient: caloriesDoc.id,
        amount: 285,
        unit: 'kcal',
      },
      {
        nutrient: proteinDoc.id,
        amount: 16,
        unit: 'g',
      },
      {
        nutrient: carbohydratesDoc.id,
        amount: 12,
        unit: 'g',
      },
      {
        nutrient: fatDoc.id,
        amount: 20,
        unit: 'g',
      },
      {
        nutrient: fiberDoc.id,
        amount: 3,
        unit: 'g',
      },
      {
        nutrient: sugarDoc.id,
        amount: 8,
        unit: 'g',
      },
      {
        nutrient: sodiumDoc.id,
        amount: 420,
        unit: 'mg',
      },
      {
        nutrient: cholesterolDoc.id,
        amount: 350,
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
                text: 'Menemen: Türk Kahvaltısının Klasiği',
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
                text: 'Menemen, Türk mutfağının en sevilen kahvaltı yemeklerinden biridir. Basit malzemelerle hazırlanan bu lezzet, domates, biber ve yumurtanın mükemmel uyumu ile sofralarda yerini almıştır.',
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
      description:
        'Türk kahvaltısının vazgeçilmez lezzeti, domates ve biberle pişirilen yumurta yemeği.',
      image: heroImage.id,
      title: 'Menemen - Türk Kahvaltısının Klasiği',
    },
    relatedRecipes: [], // Bu seed script tarafından doldurulacak
    categories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
    regions: [], // Bu seed script tarafından doldurulacak
  }
}

export const pilafRecipe: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
  heroImage,
  author,
  riceDoc,
  saltDoc,
  gramUnitDoc,
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
}) => {
  return {
    slug: 'pilaf',
    _status: 'published',
    title: 'Pirinç Pilavı',
    description: 'Türk mutfağının temel lezzeti, her yemeğin yanında yer alan klasik pilav.',
    servings: 4,
    prepTime: 15,
    cookTime: 25,
    difficulty: easyLevelDoc.id,
    cookingMethod: stovetopMethodDoc.id,
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: riceDoc.id,
        amount: 300,
        unit: gramUnitDoc.id,
        notes: 'Baldo pirinç',
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Tuz',
      },
    ],
    instructions: [
      {
        step: 'Pirinci yıkayıp 30 dakika suda bekletin.',
        tip: 'Suyu berraklaşana kadar yıkayın.',
        image: null,
      },
      {
        step: 'Tencerede tereyağını eritin, şehriyeyi altın rengi olana kadar kavurun.',
        tip: 'Şehriye yanmaması için sürekli karıştırın.',
        image: null,
      },
      {
        step: 'Süzülmüş pirinci ekleyip 2-3 dakika kavurun.',
        tip: 'Pirinç taneleri şeffaflaşana kadar kavurun.',
        image: null,
      },
      {
        step: 'Sıcak suyu ekleyip kaynatın. Tuzu ilave edin.',
        tip: 'Su pirincin 2 cm üstünde olmalı.',
        image: null,
      },
      {
        step: 'Kısık ateşte 15 dakika pişirin. Altını kapatıp 10 dakika demlendirin.',
        tip: 'Kapağını açmadan demlenmesini bekleyin.',
        image: null,
      },
      {
        step: 'Çatal ile karıştırıp servis edin.',
        tip: 'Kaşık kullanmayın, pirinçler ezilir.',
        image: null,
      },
    ],
    servingTips: 'Her türlü et yemeği, sebze yemeği ve çorba ile servis edilebilir.',
    nutritionValues: [
      {
        nutrient: caloriesDoc.id,
        amount: 320,
        unit: 'kcal',
      },
      {
        nutrient: proteinDoc.id,
        amount: 6,
        unit: 'g',
      },
      {
        nutrient: carbohydratesDoc.id,
        amount: 58,
        unit: 'g',
      },
      {
        nutrient: fatDoc.id,
        amount: 8,
        unit: 'g',
      },
      {
        nutrient: fiberDoc.id,
        amount: 1,
        unit: 'g',
      },
      {
        nutrient: sugarDoc.id,
        amount: 0,
        unit: 'g',
      },
      {
        nutrient: sodiumDoc.id,
        amount: 400,
        unit: 'mg',
      },
      {
        nutrient: cholesterolDoc.id,
        amount: 20,
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
                text: 'Pirinç Pilavı: Türk Sofralarının Vazgeçilmezi',
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
                text: 'Pirinç pilavı, Türk mutfağının temel taşlarından biridir. Basit görünümüne rağmen, doğru teknikle hazırlandığında mükemmel bir tat ve doku sunar.',
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
      description: 'Türk mutfağının temel lezzeti, her yemeğin yanında yer alan klasik pilav.',
      image: heroImage.id,
      title: 'Pirinç Pilavı - Türk Sofralarının Vazgeçilmezi',
    },
    relatedRecipes: [], // Bu seed script tarafından doldurulacak
    categories: [], // Bu seed script tarafından doldurulacak
    seasons: [], // Bu seed script tarafından doldurulacak
    regions: [], // Bu seed script tarafından doldurulacak
  }
}
