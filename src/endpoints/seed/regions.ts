import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type RegionArgs = {
  heroImage: Media
  author: User
}

export const marmaraRegion: (args: RegionArgs) => RequiredDataFromCollectionSlug<'regions'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'marmara',
    _status: 'published',
    title: 'Marmara Bölgesi',
    description: "Türkiye'nin en gelişmiş ve en kalabalık bölgesi, ekonomik ve kültürel merkezi.",
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
                text: "Marmara Bölgesi: Türkiye'nin Kalbi",
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
                text: "Marmara Bölgesi, Türkiye'nin yedi coğrafi bölgesinden biridir ve ülkenin en küçük ancak en kalabalık bölgesidir. İstanbul, Bursa, Kocaeli gibi önemli sanayi ve ticaret merkezlerini barındırır.",
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
                text: 'Ekonomik Merkez',
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
                text: "Türkiye'nin GSYİH'sinin yaklaşık %40'ını üreten Marmara Bölgesi, ülkenin ekonomik lokomotifidir. Finans, sanayi, ticaret ve hizmetler sektöründe öncü konumdadır.",
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
                text: 'Kültür ve Tarih',
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
                text: "İstanbul'un tarihi yarımadası, Bursa'nın Osmanlı mirası, Edirne'nin Selimiye Camii gibi önemli kültürel varlıkları ile Marmara Bölgesi, Türkiye'nin kültürel zenginliğinin önemli bir parçasıdır.",
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
    code: 'MAR',
    point: [40.7589, 28.9662],
    meta: {
      description: "Türkiye'nin en gelişmiş ve en kalabalık bölgesi, ekonomik ve kültürel merkezi.",
      image: heroImage.id,
      title: "Marmara Bölgesi - Türkiye'nin Kalbi",
    },
    relatedRegions: [], // Bu seed script tarafından doldurulacak
    cities: [], // Bu seed script tarafından doldurulacak
  }
}

export const egeRegion: (args: RegionArgs) => RequiredDataFromCollectionSlug<'regions'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'ege',
    _status: 'published',
    title: 'Ege Bölgesi',
    description: 'Antik medeniyetlerin beşiği, turizm ve tarımın merkezi olan güzel bölge.',
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
                text: 'Ege Bölgesi: Antik Medeniyetlerin Beşiği',
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
                text: "Ege Bölgesi, Türkiye'nin batısında yer alan ve Ege Denizi'ne kıyısı olan bölgedir. İzmir, Manisa, Aydın, Muğla gibi önemli şehirleri barındıran bölge, tarih, turizm ve tarım açısından zengindir.",
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
                text: 'Ephesus antik kenti, Pergamon, Hierapolis, Aphrodisias gibi UNESCO Dünya Mirası listesindeki antik kentler, bölgenin tarihî önemini gösterir. Antik Yunan ve Roma medeniyetlerinin izleri her yerdedir.',
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
                text: 'Turizm ve Doğa',
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
                text: "Bodrum, Kuşadası, Çeşme, Foça gibi turizm cenneti sahil kasabaları ile Pamukkale'nin beyaz travertenleri, bölgeyi Türkiye'nin en önemli turizm destinasyonlarından biri yapar.",
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
    code: 'EGE',
    point: [38.7312, 27.2103],
    meta: {
      description: 'Antik medeniyetlerin beşiği, turizm ve tarımın merkezi olan güzel bölge.',
      image: heroImage.id,
      title: 'Ege Bölgesi - Antik Medeniyetlerin Beşiği',
    },
    relatedRegions: [], // Bu seed script tarafından doldurulacak
    cities: [], // Bu seed script tarafından doldurulacak
  }
}

export const icAnatoliaRegion: (args: RegionArgs) => RequiredDataFromCollectionSlug<'regions'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'ic-anadolu',
    _status: 'published',
    title: 'İç Anadolu Bölgesi',
    description:
      "Türkiye'nin başkenti Ankara'nın bulunduğu, tarihî ve kültürel önemi yüksek bölge.",
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
                text: "İç Anadolu Bölgesi: Anadolu'nun Kalbi",
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
                text: "İç Anadolu Bölgesi, Türkiye'nin merkezinde yer alan ve başkent Ankara'yı da içinde barındıran önemli bir bölgedir. Konya, Kayseri, Sivas gibi tarihi şehirleri ile dikkat çeker.",
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
                text: 'Siyasi Merkez',
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
                text: "Başkent Ankara'nın da bulunduğu bölge, Türkiye'nin siyasi merkezi konumundadır. TBMM, Cumhurbaşkanlığı Külliyesi ve bakanlıkların merkezleri burada yer alır.",
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
                text: 'Kültürel Miras',
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
                text: "Kapadokya'nın eşsiz peribacaları, Konya'nın Selçuklu eserleri, Hitit medeniyetinin kalıntıları ve Mevlana'nın şehri olan Konya ile bölge, kültürel açıdan çok zengindir.",
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
    code: 'ICA',
    point: [39.0626, 35.1628],
    meta: {
      description:
        "Türkiye'nin başkenti Ankara'nın bulunduğu, tarihî ve kültürel önemi yüksek bölge.",
      image: heroImage.id,
      title: "İç Anadolu Bölgesi - Anadolu'nun Kalbi",
    },
    relatedRegions: [], // Bu seed script tarafından doldurulacak
    cities: [], // Bu seed script tarafından doldurulacak
  }
}
