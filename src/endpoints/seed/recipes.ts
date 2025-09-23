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
    cookingMethod: [stovetopMethodDoc.id], // Çorba genelde sadece ocak üstü
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: riceDoc.id,
        amount: 100,
        unit: gramUnitDoc.id,
        notes: 'Baldo pirinç tercih edilir',
        optional: false, // Ana malzeme
      },
      {
        ingredient: onionDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy soğan',
        optional: false, // Ana malzeme
      },
      {
        ingredient: saltDoc.id,
        amount: 2,
        unit: teaspoonUnitDoc.id,
        notes: 'Tuz',
        optional: false, // Temel baharat
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Karabiber',
        optional: true, // Baharatlar genelde opsiyonel
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
    dietTypes: [], // Bu seed script tarafından doldurulacak
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
  ovenMethodDoc,
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
    cookingMethod: [stovetopMethodDoc.id, ovenMethodDoc.id], // Hem tavada hem fırında yapılabilir
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: eggDoc.id,
        amount: 4,
        unit: pieceUnitDoc.id,
        notes: 'Taze yumurta',
        optional: false, // Ana malzeme
      },
      {
        ingredient: tomatoDoc.id,
        amount: 3,
        unit: pieceUnitDoc.id,
        notes: 'Orta boy, olgun domates',
        optional: false, // Ana malzeme
      },
      {
        ingredient: onionDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Küçük boy soğan',
        optional: true, // Tercihe göre eklenebilir
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Tuz',
        optional: false, // Temel baharat
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 0.5,
        unit: teaspoonUnitDoc.id,
        notes: 'Karabiber',
        optional: true, // Tercihe göre eklenebilir
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
    dietTypes: [], // Bu seed script tarafından doldurulacak
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
    cookingMethod: [stovetopMethodDoc.id], // Pilav geleneksel olarak ocak üstü
    heroImage: heroImage.id,
    authors: [author],
    ingredients: [
      {
        ingredient: riceDoc.id,
        amount: 300,
        unit: gramUnitDoc.id,
        notes: 'Baldo pirinç',
        optional: false, // Ana malzeme
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Tuz',
        optional: true, // İsteğe bağlı tuzlama
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
    dietTypes: [], // Bu seed script tarafından doldurulacak
  }
}

export const lentilSoupRecipe: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
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
        step: 1,
        instruction: 'Mercimekleri soğuk suyla iyice yıkayın ve süzün.',
        time: 2,
      },
      {
        step: 2,
        instruction: 'Soğanı ince doğrayın, havuç ve patatesi küp şeklinde doğrayın.',
        time: 8,
      },
      {
        step: 3,
        instruction:
          'Geniş bir tencerede zeytinyağını ısıtın ve soğanları pembeleşene kadar kavurun.',
        time: 5,
      },
      {
        step: 4,
        instruction: 'Domates salçasını ekleyip 1-2 dakika kavurun.',
        time: 2,
      },
      {
        step: 5,
        instruction: 'Mercimek, havuç ve patates ekleyip karıştırın.',
        time: 2,
      },
      {
        step: 6,
        instruction: 'Üzerini geçecek kadar su ekleyin (yaklaşık 1 litre).',
        time: 1,
      },
      {
        step: 7,
        instruction:
          'Kaynadıktan sonra kısık ateşte 25-30 dakika, mercimekler yumuşayana kadar pişirin.',
        time: 30,
      },
      {
        step: 8,
        instruction: 'Blender ile püre haline getirin veya tel çırpıcıyla ezerek karıştırın.',
        time: 3,
      },
      {
        step: 9,
        instruction: 'Tuz ve karabiber ile tatlandırın. 2-3 dakika daha kaynatın.',
        time: 3,
      },
      {
        step: 10,
        instruction: 'Sıcak servis yapın. Dilediğiniz ile limon sıkarak servis edebilirsiniz.',
        time: 1,
      },
    ],
    tips: [
      'Mercimek çorbası koyulaştığında su veya tavuk suyu ekleyerek kıvamını ayarlayabilirsiniz.',
      'Çorbanın üzerine tereyağı ve kırmızı pul biber ile terbiye yapabilirsiniz.',
      'Soğan kavururken yanmamasına dikkat edin, aksi halde çorba acı olur.',
      'Daha besleyici olması için çorbaya bulgur veya pirinç ekleyebilirsiniz.',
    ],
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
