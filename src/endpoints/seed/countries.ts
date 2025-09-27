import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type CountryArgs = {
  heroImage: Media
  author: User
}

export const turkeyCountry: (args: CountryArgs) => RequiredDataFromCollectionSlug<'countries'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'turkey',
    _status: 'published',
    title: 'Türkiye',
    description:
      'Avrupa ve Asya kıtalarında yer alan, köklü tarihi ve zengin kültürü ile tanınan cumhuriyet.',
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
                text: 'Türkiye: İki Kıtanın Köprüsü',
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
                text: 'Türkiye, Avrupa ve Asya kıtalarını birleştiren stratejik konumu ile tarihin her döneminde önemli bir rol oynamıştır. 84 milyon nüfusuyla dünyanın en kalabalık ülkelerinden biri olan Türkiye, zengin kültürel mirası ve modern gelişimiyle dikkat çeker.',
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
                text: 'Tarihi Miras',
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
                text: 'Anadolu toprakları, Hitit, Roma, Bizans ve Osmanlı gibi büyük medeniyetlere ev sahipliği yapmıştır. Kapadokya, Ephesus, Truva gibi UNESCO Dünya Mirası listesindeki sayısız tarihi alan, bu zengin geçmişin tanıklarıdır.',
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
                text: 'Modern Türkiye',
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
                text: "1923'te Mustafa Kemal Atatürk önderliğinde kurulan Türkiye Cumhuriyeti, laik, demokratik değerleriyle modern bir devlet olarak gelişimini sürdürmektedir. Güçlü ekonomisi, gelişen teknoloji sektörü ve jeopolitik konumuyla bölgesel güç konumundadır.",
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
    code: 'TR',
    point: [38.9637, 35.2433],
    meta: {
      description:
        'Avrupa ve Asya kıtalarında yer alan, köklü tarihi ve zengin kültürü ile tanınan cumhuriyet.',
      image: heroImage.id,
      title: 'Türkiye - İki Kıtanın Köprüsü',
    },
    relatedCountries: [], // Bu seed script tarafından doldurulacak
  }
}

export const germanyCountry: (args: CountryArgs) => RequiredDataFromCollectionSlug<'countries'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'germany',
    _status: 'published',
    title: 'Almanya',
    description:
      "Avrupa'nın kalbi olarak bilinen, güçlü ekonomisi ve teknolojik gelişimiyle öne çıkan ülke.",
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
                text: "Almanya: Avrupa'nın Kalbi",
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
                text: "Almanya, Orta Avrupa'da yer alan ve dünyanın dördüncü büyük ekonomisine sahip güçlü bir ülkedir. 83 milyon nüfusuyla Avrupa Birliği'nin en kalabalık üyesi olan Almanya, teknoloji, otomotiv ve endüstri alanlarında dünya lideridir.",
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
                text: 'Teknoloji ve İnovasyon',
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
                text: 'BMW, Mercedes-Benz, Volkswagen gibi dünya çapında tanınan otomotiv markalarının anavatanı olan Almanya, mühendislik ve teknoloji alanında öncü konumundadır. Endüstri 4.0 kavramının da doğduğu ülkedir.',
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
    code: 'DE',
    point: [51.1657, 10.4515],
    meta: {
      description:
        "Avrupa'nın kalbi olarak bilinen, güçlü ekonomisi ve teknolojik gelişimiyle öne çıkan ülke.",
      image: heroImage.id,
      title: "Almanya - Avrupa'nın Kalbi",
    },
    relatedCountries: [], // Bu seed script tarafından doldurulacak
  }
}

export const franceCountry: (args: CountryArgs) => RequiredDataFromCollectionSlug<'countries'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'france',
    _status: 'published',
    title: 'Fransa',
    description:
      'Sanat, kültür ve gastronomi başkenti olarak bilinen, dünyanın en çok ziyaret edilen ülkesi.',
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
                text: 'Fransa: Sanat ve Kültür Ülkesi',
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
                text: "Fransa, Batı Avrupa'da yer alan ve dünyanın en önemli kültür merkezlerinden biri olan ülkedir. Paris'teki Eiffel Kulesi, Louvre Müzesi ve Champs-Élysées gibi ikonik yapılarıyla dünya çapında tanınır.",
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
                text: 'Gastronomi ve Yaşam Tarzı',
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
                text: 'Fransız mutfağı UNESCO tarafından insanlığın somut olmayan kültürel mirası olarak kabul edilmiştir. Şarap, peynir, croissant ve haute cuisine geleneği ile gastronomi dünyasına öncülük eder.',
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
    code: 'FR',
    point: [46.2276, 2.2137],
    meta: {
      description:
        'Sanat, kültür ve gastronomi başkenti olarak bilinen, dünyanın en çok ziyaret edilen ülkesi.',
      image: heroImage.id,
      title: 'Fransa - Sanat ve Kültür Ülkesi',
    },
    relatedCountries: [], // Bu seed script tarafından doldurulacak
  }
}
