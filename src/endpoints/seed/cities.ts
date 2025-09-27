import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type CityArgs = {
  heroImage: Media
  author: User
}

export const istanbulCity: (args: CityArgs) => RequiredDataFromCollectionSlug<'cities'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'istanbul',
    _status: 'published',
    title: 'İstanbul',
    description: "Türkiye'nin en büyük şehri, iki kıtayı birleştiren tarihi kent.",
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
                text: 'İstanbul: İki Kıtanın Buluştuğu Şehir',
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
                text: "İstanbul, Türkiye'nin en kalabalık şehri ve ekonomik, kültürel, tarihi merkezi. Avrupa ve Asya kıtalarını ayıran Boğaziçi üzerinde kurulmuş olan şehir, yaklaşık 15 milyon nüfusuyla dünyanın en büyük şehirlerinden biridir.",
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
                text: 'Tarihi Zenginlik',
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
                text: 'Bizantion, Konstantinopolis ve İstanbul isimleriyle anılan bu kadim şehir, Roma, Bizans ve Osmanlı İmparatorluklarına başkentlik yapmıştır. Ayasofya, Sultanahmet Camii, Topkapı Sarayı gibi eşsiz tarihi yapılarıyla dünya mirası listesinde yer alır.',
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
                text: 'Modern İstanbul',
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
                text: 'Günümüzde İstanbul, modern mimarisi, gelişen teknoloji sektörü, canlı sanat sahnesı ve zengin mutfağıyla dünya çapında bir metropol olarak öne çıkmaktadır. Finans, ticaret ve turizmin merkezi konumundadır.',
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
    code: 'IST',
    point: [41.0082, 28.9784],
    meta: {
      description: "İstanbul, Türkiye'nin en büyük şehri, iki kıtayı birleştiren tarihi kent.",
      image: heroImage.id,
      title: 'İstanbul - İki Kıtanın Buluştuğu Şehir',
    },
    relatedCities: [], // Bu seed script tarafından doldurulacak
  }
}

export const ankaraCity: (args: CityArgs) => RequiredDataFromCollectionSlug<'cities'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'ankara',
    _status: 'published',
    title: 'Ankara',
    description: "Türkiye'nin başkenti ve ikinci büyük şehri.",
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
                text: "Ankara: Türkiye'nin Başkenti",
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
                text: "Ankara, Türkiye Cumhuriyeti'nin başkenti ve ikinci en kalabalık şehridir. İç Anadolu Bölgesi'nde yer alan şehir, modern Türkiye'nin siyasi merkezi konumundadır.",
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
                text: "Cumhuriyet'in Başkenti",
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
                text: "1923 yılında Türkiye Cumhuriyeti'nin başkenti ilan edilen Ankara, planlı bir şehir olarak geliştirilmiştir. Atatürk Mausoleum, TBMM Binası gibi cumhuriyet döneminin önemli yapılarına ev sahipliği yapar.",
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
                text: 'Eğitim ve Teknoloji Merkezi',
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
                text: "Ankara, ODTÜ, Hacettepe, Ankara Üniversitesi gibi önemli yükseköğretim kurumlarıyla Türkiye'nin eğitim merkezi konumundadır. Aynı zamanda savunma sanayii ve teknoloji alanında önemli bir hub'dır.",
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
    code: 'ANK',
    point: [39.9334, 32.8597],
    meta: {
      description: "Ankara, Türkiye'nin başkenti ve ikinci büyük şehri.",
      image: heroImage.id,
      title: "Ankara - Türkiye'nin Başkenti",
    },
    relatedCities: [], // Bu seed script tarafından doldurulacak
  }
}

export const izmirCity: (args: CityArgs) => RequiredDataFromCollectionSlug<'cities'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'izmir',
    _status: 'published',
    title: 'İzmir',
    description: "Ege Bölgesi'nin incisi, Türkiye'nin üçüncü büyük şehri.",
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
                text: "İzmir: Ege'nin İncisi",
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
                text: "İzmir, Ege Denizi kıyısında yer alan Türkiye'nin üçüncü büyük şehridir. Antik çağdan beri önemli bir liman kenti olan İzmir, modern zamanların en gelişmiş şehirlerinden biridir.",
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
                text: 'Tarihi Smyrna',
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
                text: 'Antik çağda Smyrna adıyla bilinen İzmir, binlerce yıllık geçmişe sahiptir. Agora, Kadifekale gibi tarihi kalıntılar şehrin zengin geçmişine tanıklık eder.',
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
                text: 'Modern Liman Kenti',
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
                text: "Günümüzde İzmir, modern limanı, üniversiteleri, kültürel etkinlikleri ve Kordon boyunca uzanan sahil şeridiyle Türkiye'nin en yaşanabilir şehirlerinden biri olarak kabul edilir.",
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
    code: 'IZM',
    point: [38.4192, 27.1287],
    meta: {
      description: "İzmir, Ege Bölgesi'nin incisi, Türkiye'nin üçüncü büyük şehri.",
      image: heroImage.id,
      title: "İzmir - Ege'nin İncisi",
    },
    relatedCities: [], // Bu seed script tarafından doldurulacak
  }
}
