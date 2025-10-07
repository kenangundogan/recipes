import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type SeasonArgs = {
  heroImage: Media
  author: User
}

export const springSeason: (args: SeasonArgs) => RequiredDataFromCollectionSlug<'seasons'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'spring',
    _status: 'published',
    title: 'İlkbahar',
    description: 'Doğanın uyanışı, yenilenme ve umudun mevsimi.',
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
                text: 'İlkbahar: Yenilenme ve Umudun Mevsimi',
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
                text: "İlkbahar, dört mevsimden biridir ve genellikle Mart, Nisan ve Mayıs aylarını kapsar. Kuzey Yarımküre'de 20-21 Mart tarihlerinde başlayan bu mevsim, doğanın kış uykusundan uyandığı, yeni yaşamın başladığı dönemdir.",
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
                text: 'Doğanın Uyanışı',
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
                text: 'İlkbaharda ağaçlar yeşermeye başlar, çiçekler açar ve hayvanlar kış uykusundan uyanır. Kuşlar göç ederek geri döner, böcekler ve diğer canlılar aktif hale gelir. Bu doğal uyanış, insanlarda da yenilenme duygusunu yaratır.',
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
                text: 'İklim Özellikleri',
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
                text: 'İlkbahar mevsimi ılıman sıcaklıklar, bol yağışlar ve uzayan gün ışığı ile karakterizedir. Kar erimeye başlar, toprak ısınır ve bitki büyümesi için ideal koşullar oluşur.',
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
                text: 'Kültürel ve Psikolojik Etkiler',
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
                text: 'İlkbahar, dünya genelinde birçok kültürde yeniden doğuş ve bereket sembolü olarak görülür. İnsanlar bu mevsimde daha enerjik hisseder, açık hava aktivitelerine yönelir ve sosyal yaşam canlanır.',
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
    meta: {
      description: 'Doğanın uyanışı, yenilenme ve umudun mevsimi.',
      image: heroImage.id,
      title: 'İlkbahar - Yenilenme ve Umudun Mevsimi',
    },
    hemisphere_north: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '21 Mart',
      end_date: '21 Haziran',
    },
    hemisphere_south: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '23 Eylül',
      end_date: '21 Aralık',
    },
    relatedSeasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const summerSeason: (args: SeasonArgs) => RequiredDataFromCollectionSlug<'seasons'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'summer',
    _status: 'published',
    title: 'Yaz',
    description: 'En sıcak mevsim, tatil zamanı ve doğanın zirvede olduğu dönem.',
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
                text: 'Yaz: Güneş ve Enerjinin Mevsimi',
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
                text: "Yaz mevsimi, dört mevsimden en sıcağıdır ve genellikle Haziran, Temmuz ve Ağustos aylarını kapsar. Kuzey Yarımküre'de 20-21 Haziran tarihlerinde başlayan bu mevsim, güneşin en güçlü olduğu ve doğanın en verimli dönemini yaşadığı zamandır.",
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
                text: 'İklim ve Doğa',
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
                text: 'Yaz mevsimi yüksek sıcaklıklar, uzun gün ışığı ve genellikle az yağış ile karakterizedir. Bitkiler büyümelerini tamamlar, meyveler olgunlaşır ve doğa en canlı halini alır.',
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
                text: 'Tatil ve Rekreasyon',
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
                text: 'Yaz mevsimi geleneksel olarak tatil zamanıdır. Okul tatilleri, deniz tatilleri, kamp ve açık hava aktiviteleri bu dönemde zirve yapar. İnsanlar doğa ile daha fazla zaman geçirme fırsatı bulur.',
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
                text: 'Sosyal ve Kültürel Yaşam',
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
                text: 'Yaz aylarında festival ve açık hava konserleri düzenlenir, sosyal yaşam sokağa taşar ve insan etkileşimi artar. Geç saatlere kadar aydınlık olan günler, daha aktif bir yaşam tarzını teşvik eder.',
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
    meta: {
      description: 'En sıcak mevsim, tatil zamanı ve doğanın zirvede olduğu dönem.',
      image: heroImage.id,
      title: 'Yaz - Güneş ve Enerjinin Mevsimi',
    },
    hemisphere_north: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '21 Haziran',
      end_date: '23 Eylül',
    },
    hemisphere_south: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '21 Aralık',
      end_date: '21 Mart',
    },
    relatedSeasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const autumnSeason: (args: SeasonArgs) => RequiredDataFromCollectionSlug<'seasons'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'autumn',
    _status: 'published',
    title: 'Sonbahar',
    description: 'Hasat mevsimi, renk değişimi ve kışa hazırlık dönemi.',
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
                text: 'Sonbahar: Hasat ve Değişimin Mevsimi',
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
                text: "Sonbahar mevsimi, genellikle Eylül, Ekim ve Kasım aylarını kapsar. Kuzey Yarımküre'de 22-23 Eylül tarihlerinde başlayan bu mevsim, doğanın kış için hazırlandığı ve yaşamın yavaşladığı bir geçiş dönemidir.",
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
                text: 'Renklerin Festivali',
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
                text: 'Sonbahar, yaprakların altın sarısı, kızıl kırmızısı ve turuncu tonlarına büründüğü muhteşem bir renk şölenine sahne olur. Bu görsel şölen, doğanın en güzel sergilediği sanat eseri gibidir.',
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
                text: 'Hasat Zamanı',
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
                text: 'Sonbahar geleneksel olarak hasat mevsimidir. Ürünler toplanır, kış için hazırlıklar yapılır ve bolluk kutlanır. Elma, balkabağı, üzüm gibi mevsim ürünleri hasat edilir.',
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
                text: 'İç Dünya ve Düşünce',
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
                text: 'Günlerin kısalması ve havaların serinlemesi ile insanlar daha fazla iç dünyalarına yönelir. Bu mevsim, düşünce, okuma ve yaratıcı faaliyetler için ideal bir dönemdir.',
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
    meta: {
      description: 'Hasat mevsimi, renk değişimi ve kışa hazırlık dönemi.',
      image: heroImage.id,
      title: 'Sonbahar - Hasat ve Değişimin Mevsimi',
    },
    hemisphere_north: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '23 Eylül',
      end_date: '21 Aralık',
    },
    hemisphere_south: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '21 Mart',
      end_date: '21 Haziran',
    },
    relatedSeasons: [], // Bu seed script tarafından doldurulacak
  }
}

export const winterSeason: (args: SeasonArgs) => RequiredDataFromCollectionSlug<'seasons'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'winter',
    _status: 'published',
    title: 'Kış',
    description: 'En soğuk mevsim, kar ve sessizlik zamanı, dinlenme dönemi.',
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
                text: 'Kış: Sessizlik ve Dinginliğin Mevsimi',
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
                text: "Kış mevsimi, dört mevsimden en soğuğudur ve genellikle Aralık, Ocak ve Şubat aylarını kapsar. Kuzey Yarımküre'de 21-22 Aralık tarihlerinde başlayan bu mevsim, doğanın dinlenme dönemine girdiği, kar ve soğuğun hâkim olduğu zamandır.",
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
                text: 'Kar ve Soğuk',
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
                text: 'Kış mevsimi düşük sıcaklıklar, kar yağışı ve kısa gün ışığı ile karakterizedir. Kar örtüsü altında doğa dinlenir ve gelecek büyüme için enerji toplar.',
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
                text: 'İç Mekân ve Sıcaklık',
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
                text: 'Kış aylarında insanlar daha çok iç mekânlarda vakit geçirir, sıcak içecekler tüketir ve aile ile birlikte zaman geçirmeyi tercih eder. Bu mevsim, sıcaklık ve birliktelik duygularını güçlendirir.',
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
                text: 'Bayramlar ve Kutlamalar',
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
                text: 'Kış mevsimi dünya genelinde birçok önemli bayram ve kutlamaya ev sahipliği yapar. Noel, Yeni Yıl gibi önemli günler, insanları bir araya getirir ve birliktelik duygusunu pekiştirir.',
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
    meta: {
      description: 'En soğuk mevsim, kar ve sessizlik zamanı, dinlenme dönemi.',
      image: heroImage.id,
      title: 'Kış - Sessizlik ve Dinginliğin Mevsimi',
    },
    hemisphere_north: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '21 Aralık',
      end_date: '21 Mart',
    },
    hemisphere_south: {
      months: [], // Bu seed script tarafından doldurulacak
      start_date: '21 Haziran',
      end_date: '23 Eylül',
    },
    relatedSeasons: [], // Bu seed script tarafından doldurulacak
  }
}
