import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type ContinentArgs = {
  heroImage: Media
  author: User
}

export const europeContinent: (
  args: ContinentArgs,
) => RequiredDataFromCollectionSlug<'continents'> = ({ heroImage, author }) => {
  return {
    slug: 'europe',
    _status: 'published',
    title: 'Avrupa',
    description:
      'Batı uygarlığının beşiği, zengin tarihi ve kültürel çeşitliliği ile tanınan kıta.',
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
                text: 'Avrupa: Batı Uygarlığının Beşiği',
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
                text: 'Avrupa, Batı uygarlığının doğduğu ve geliştiği, zengin tarihi ve kültürel mirası ile tanınan bir kıtadır. 750 milyon nüfusuyla dünyanın en gelişmiş bölgelerinden biri olan Avrupa, 50 ülkeye ev sahipliği yapar.',
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
                text: 'Tarihi ve Kültürel Miras',
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
                text: 'Antik Yunan ve Roma medeniyetlerinden başlayarak Rönesans, Aydınlanma ve Sanayi Devrimi gibi önemli tarihi dönemlere ev sahipliği yapmıştır. Leonardo da Vinci, Mozart, Shakespeare gibi büyük sanatçılar bu topraklarda yetişmiştir.',
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
                text: 'Modern Avrupa Birliği',
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
                text: 'Günümüzde Avrupa Birliği çerçevesinde ekonomik ve politik entegrasyonu sürdüren Avrupa, demokrasi, insan hakları ve sürdürülebilir kalkınma konularında dünya lideridir. Euro para birimi ve Schengen anlaşması ile bütünleşmeyi derinleştirmiştir.',
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
    code: 'EU',
    point: [54.526, 15.2551],
    meta: {
      description:
        'Batı uygarlığının beşiği, zengin tarihi ve kültürel çeşitliliği ile tanınan kıta.',
      image: heroImage.id,
      title: 'Avrupa - Batı Uygarlığının Beşiği',
    },
    relatedContinents: [], // Bu seed script tarafından doldurulacak
  }
}

export const asiaContinent: (
  args: ContinentArgs,
) => RequiredDataFromCollectionSlug<'continents'> = ({ heroImage, author }) => {
  return {
    slug: 'asia',
    _status: 'published',
    title: 'Asya',
    description:
      'Dünyanın en büyük ve en kalabalık kıtası, çeşitli kültürler ve teknolojik gelişimin merkezi.',
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
                text: 'Asya: Büyük Kıta',
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
                text: 'Asya, dünya yüzölçümünün yaklaşık üçte birini kaplayan ve 4.6 milyar nüfusuyla dünyanın en kalabalık kıtasıdır. Çin ve Hindistan gibi dev ülkelerden küçük ada devletlerine kadar 49 ülkeye ev sahipliği yapar.',
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
                text: 'Ekonomik Güç',
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
                text: '21. yüzyılda Asya, dünya ekonomisinin motoru haline gelmiştir. Çin ve Japonya gibi ekonomik devlerle birlikte Güney Kore, Singapur, Hindistan gibi ülkeler teknoloji ve üretim alanlarında öne çıkmıştır.',
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
                text: 'Kültürel Çeşitlilik',
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
                text: 'Hinduizm, Budizm, İslam, Konfüçyüsçülük gibi büyük dinlerin ve felsefî akımların doğduğu Asya, binlerce yıllık kültürel birikimiyle insanlığın ortak mirasına büyük katkılarda bulunmuştur.',
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
    code: 'AS',
    point: [29.8405, 89.2956],
    meta: {
      description:
        'Dünyanın en büyük ve en kalabalık kıtası, çeşitli kültürler ve teknolojik gelişimin merkezi.',
      image: heroImage.id,
      title: 'Asya - Büyük Kıta',
    },
    relatedContinents: [], // Bu seed script tarafından doldurulacak
  }
}

export const africaContinent: (
  args: ContinentArgs,
) => RequiredDataFromCollectionSlug<'continents'> = ({ heroImage, author }) => {
  return {
    slug: 'africa',
    _status: 'published',
    title: 'Afrika',
    description:
      'İnsanlığın beşiği olarak bilinen, doğal zenginlikleri ve genç nüfusuyla öne çıkan kıta.',
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
                text: 'Afrika: İnsanlığın Beşiği',
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
                text: 'Afrika, 1.3 milyar nüfusuyla dünyanın ikinci en büyük ve en kalabalık kıtasıdır. 54 ülkeye ev sahipliği yapan Afrika, binlerce yıllık tarihi ve çeşitli kültürleriyle insanlık tarihinde özel bir yere sahiptir.',
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
                text: 'Doğal Zenginlikler',
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
                text: 'Afrika, altın, elmas, petrol, kobalt gibi değerli mineraller açısından dünyanın en zengin kıtalarından biridir. Sahara Çölü, Nil Nehri, Victoria Şelalesi gibi doğal harikalarıyla da ünlüdür.',
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
                text: 'Genç ve Dinamik Nüfus',
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
                text: "Afrika'nın nüfusunun yüzde 60'ı 25 yaşının altındadır. Bu genç ve dinamik nüfus, teknoloji ve girişimcilik alanlarında büyük potansiyel taşımaktadır. Lagos, Nairobi, Cape Town gibi şehirler teknoloji hub'ları olarak gelişmektedir.",
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
    code: 'AF',
    point: [-8.7832, 34.5085],
    meta: {
      description:
        'İnsanlığın beşiği olarak bilinen, doğal zenginlikleri ve genç nüfusuyla öne çıkan kıta.',
      image: heroImage.id,
      title: 'Afrika - İnsanlığın Beşiği',
    },
    relatedContinents: [], // Bu seed script tarafından doldurulacak
  }
}
