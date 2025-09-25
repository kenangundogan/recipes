import type {
  Media,
  User,
  Ingredient,
  IngredientUnit,
  DifficultyLevel,
  CookingMethod,
  Nutrient,
  DietType,
  Season,
  Region,
} from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type RecipeArgs = {
  heroImage: Media
  author: User
  // Ingredient docs
  tomatoDoc: Ingredient
  onionDoc: Ingredient
  riceDoc: Ingredient
  eggDoc: Ingredient
  saltDoc: Ingredient
  blackPepperDoc: Ingredient
  lentilDoc: Ingredient
  carrotDoc: Ingredient
  potatoDoc: Ingredient
  oliveOilDoc: Ingredient
  flourDoc: Ingredient
  waterDoc: Ingredient
  yeastDoc: Ingredient
  beefDoc: Ingredient
  parsleyDoc: Ingredient
  pepperPasteDoc: Ingredient
  garlicDoc: Ingredient
  greenPepperDoc: Ingredient
  sumacDoc: Ingredient
  paprikaDoc: Ingredient
  // Unit docs
  gramUnitDoc: IngredientUnit
  pieceUnitDoc: IngredientUnit
  tablespoonUnitDoc: IngredientUnit
  teaspoonUnitDoc: IngredientUnit
  // Difficulty and cooking method docs
  easyLevelDoc: DifficultyLevel
  mediumLevelDoc: DifficultyLevel
  hardLevelDoc: DifficultyLevel
  stovetopMethodDoc: CookingMethod
  ovenMethodDoc: CookingMethod
  steamMethodDoc: CookingMethod
  grillMethodDoc: CookingMethod
  pressureCookerMethodDoc: CookingMethod
  // Nutrient docs
  caloriesDoc: Nutrient
  proteinDoc: Nutrient
  carbohydratesDoc: Nutrient
  fatDoc: Nutrient
  fiberDoc: Nutrient
  sugarDoc: Nutrient
  sodiumDoc: Nutrient
  cholesterolDoc: Nutrient
  // Diet type docs
  veganDoc: DietType
  vegetarianDoc: DietType
  glutenFreeDoc: DietType
  ketoDoc: DietType
  lowCarbDoc: DietType
  mediterraneanDoc: DietType
  paleoDoc: DietType
  // Season docs
  springDoc: Season
  summerDoc: Season
  autumnDoc: Season
  winterDoc: Season
  // Region docs
  marmaraDoc: Region
  egeDoc: Region
  icAnatoliaDoc: Region
}

export const recipe3: (args: RecipeArgs) => RequiredDataFromCollectionSlug<'recipes'> = ({
  heroImage,
  author,
  onionDoc,
  tomatoDoc,
  oliveOilDoc,
  flourDoc,
  waterDoc: _waterDoc,
  yeastDoc,
  beefDoc,
  parsleyDoc,
  pepperPasteDoc,
  garlicDoc,
  greenPepperDoc,
  sumacDoc: _sumacDoc,
  paprikaDoc,
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
  springDoc,
  summerDoc,
  autumnDoc,
  winterDoc,
  marmaraDoc,
  egeDoc,
  icAnatoliaDoc,
}) => {
  return {
    slug: 'lahmacun',
    _status: 'published',
    title: 'Lahmacun',
    description:
      'İnce açılmış hamur üzerine domates, soğan ve baharatlarla tatlandırılmış harçla hazırlanan, yüksek ısıda kısa sürede pişen klasik lezzet.',
    servings: 6,
    prepTime: 45,
    cookTime: 12,
    difficulty: mediumLevelDoc.id,
    cookingMethod: [ovenMethodDoc.id],
    heroImage: heroImage.id,
    authors: [author],

    ingredients: [
      // Hamur
      {
        ingredient: flourDoc.id,
        amount: 500,
        unit: gramUnitDoc.id,
        notes: 'Un (ekmeklik, orta protein)',
        optional: false,
      },
      {
        ingredient: yeastDoc.id,
        amount: 7,
        unit: gramUnitDoc.id,
        notes: 'Kuru maya (1 paket)',
        optional: false,
      },
      {
        ingredient: saltDoc.id,
        amount: 1.5,
        unit: teaspoonUnitDoc.id,
        notes: 'Hamur tuzu',
        optional: false,
      },
      {
        ingredient: oliveOilDoc.id,
        amount: 1,
        unit: tablespoonUnitDoc.id,
        notes: 'Hamura esneklik için',
        optional: true,
      },

      // Harç
      {
        ingredient: beefDoc.id,
        amount: 350,
        unit: gramUnitDoc.id,
        notes: 'Dana kıyma (%15–20 yağ)',
        optional: false,
      },
      {
        ingredient: onionDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'İnce çekilmiş / çok ince doğranmış',
        optional: false,
      },
      {
        ingredient: tomatoDoc.id,
        amount: 200,
        unit: gramUnitDoc.id,
        notes: 'Rendelenmiş domates',
        optional: false,
      },
      {
        ingredient: pepperPasteDoc.id,
        amount: 1,
        unit: tablespoonUnitDoc.id,
        notes: 'Biber salçası',
        optional: false,
      },
      {
        ingredient: garlicDoc.id,
        amount: 2,
        unit: pieceUnitDoc.id,
        notes: 'Dövülmüş sarımsak dişi',
        optional: false,
      },
      {
        ingredient: parsleyDoc.id,
        amount: 20,
        unit: gramUnitDoc.id,
        notes: 'İnce kıyılmış maydanoz',
        optional: false,
      },
      {
        ingredient: greenPepperDoc.id,
        amount: 1,
        unit: pieceUnitDoc.id,
        notes: 'Çekirdekleri alınmış, ince doğranmış',
        optional: true,
      },
      {
        ingredient: blackPepperDoc.id,
        amount: 0.5,
        unit: teaspoonUnitDoc.id,
        notes: 'Karabiber',
        optional: false,
      },
      {
        ingredient: paprikaDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Toz kırmızı biber',
        optional: true,
      },
      {
        ingredient: saltDoc.id,
        amount: 1,
        unit: teaspoonUnitDoc.id,
        notes: 'Harç tuzu',
        optional: false,
      },
    ],
    instructions: [
      {
        step: 'Un, tuz ve mayayı karıştırın. Ilık suyu azar azar ekleyerek pürüzsüz, yumuşak bir hamur yoğurun.',
        tip: 'Hidrasyonu kontrollü verin; ele hafifçe yapışan yumuşak hamur hedeflenir.',
        image: null,
      },
      {
        step: 'Hamuru hafif yağlanmış kapta ılık ortamda 45–60 dakika mayalandırın.',
        tip: 'Hacim yaklaşık 2 katına çıkmalı.',
        image: null,
      },
      {
        step: 'Harç için soğan, domates, biber salçası, sarımsak, kıyma, maydanoz ve baharatları homojen olacak şekilde karıştırın.',
        tip: 'Rondodan geçirecekseniz fazla sulandırmayın.',
        image: null,
      },
      {
        step: 'Fırını 250–270°C’ye ve çelik/taş tepsiyi ön ısıtmaya alın.',
        tip: 'Kızgın yüzey altın rengi ve çıtır doku sağlar.',
        image: null,
      },
      {
        step: 'Hamurdan bezeler alın, çok ince (2–3 mm) açın. Üzerine harcı ince bir tabaka halinde yayın.',
        tip: 'Kenar payını çok taşırmayın; eşit yayılma önemli.',
        image: null,
      },
      {
        step: 'Kızgın tepside 7–10 dakika, kenarlar kızarana ve taban çıtırlaşana dek pişirin.',
        tip: 'Fırın gücüne göre süre değişebilir.',
        image: null,
      },
      {
        step: 'Sıcak servis edin. Üzerine limon sıkıp sumakla tatlandırın.',
        tip: 'Yeşillik ve soğan ile rulo yaparak servis edilebilir.',
        image: null,
      },
    ],
    servingTips:
      'Taze maydanoz, limon ve sumak soğanıyla servis edin. Yanına ayran iyi eşlik eder.',

    nutritionValues: [
      { nutrient: caloriesDoc.id, amount: 340, unit: 'kcal' },
      { nutrient: proteinDoc.id, amount: 15, unit: 'g' },
      { nutrient: carbohydratesDoc.id, amount: 42, unit: 'g' },
      { nutrient: fatDoc.id, amount: 12, unit: 'g' },
      { nutrient: fiberDoc.id, amount: 3, unit: 'g' },
      { nutrient: sugarDoc.id, amount: 5, unit: 'g' },
      { nutrient: sodiumDoc.id, amount: 620, unit: 'mg' },
      { nutrient: cholesterolDoc.id, amount: 35, unit: 'mg' },
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
    seasons: [springDoc.id, summerDoc.id, autumnDoc.id, winterDoc.id], // Her mevsim yapılabilir
    regions: [marmaraDoc.id, egeDoc.id, icAnatoliaDoc.id], // Tüm Türkiye'de sevilen lezzet
    dietTypes: [], // Et ve gluten içerdiği için vegan/vejetaryen/glutensiz işaretlenmedi
  }
}
