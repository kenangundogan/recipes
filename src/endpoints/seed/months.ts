import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type MonthArgs = {
  heroImage: Media
  author: User
}

export const januaryMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'january',
    _status: 'published',
    title: 'Ocak',
    description: 'Yılın ilk ayı, kış mevsiminin ortası ve yeni başlangıçların simgesi.',
    monthOrder: 1,
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
                text: 'Ocak: Yeni Başlangıçların Ayı',
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
                text: "Ocak ayı, Gregoryen takviminin ilk ayıdır ve 31 gün sürer. Kış mevsiminin ortasında yer alan bu ay, Kuzey Yarımküre'de en soğuk aylardan biridir. Türkiye'de kar yağışları ve düşük sıcaklıklar görülür.",
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
                text: 'Yeni Yıl ve Hedefler',
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
                text: 'Ocak ayı, dünya genelinde yeni yıl kararları ve hedeflerin belirlendiği bir dönemdir. İnsanlar yaşamlarında pozitif değişiklikler yapmaya odaklanır ve gelecek planları kurar.',
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
                text: 'Doğa ve Mevsimsel Değişim',
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
                text: 'Doğada kış uykusundaki ağaçlar ve bitkiler, bahar için güç toplarken, kar örtüsü altında toprak dinlenir. Bu sessiz dönem, gelecekteki büyüme için gerekli enerjiyi biriktirme zamanıdır.',
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
      description: 'Yılın ilk ayı, kış mevsiminin ortası ve yeni başlangıçların simgesi.',
      image: heroImage.id,
      title: 'Ocak - Yeni Başlangıçların Ayı',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const februaryMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'february',
    _status: 'published',
    title: 'Şubat',
    description: 'Kış mevsiminin son ayı, sevgililer günü ve bahara geçiş dönemi.',
    monthOrder: 2,
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
                text: 'Şubat: Aşk ve Umudun Ayı',
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
                text: 'Şubat ayı, Gregoryen takviminin en kısa ayıdır ve genellikle 28 gün sürer (artık yıllarda 29 gün). Kış mevsiminin son ayı olan Şubat, bahara geçiş sürecinin başlangıcını müjdeler.',
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
                text: 'Sevgililer Günü',
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
                text: '14 Şubat Sevgililer Günü ile tanınan bu ay, aşk ve romantizmin kutlandığı özel bir zamandır. Dünya genelinde sevdiklerine hediyeler verilir ve duygular paylaşılır.',
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
      description: 'Kış mevsiminin son ayı, sevgililer günü ve bahara geçiş dönemi.',
      image: heroImage.id,
      title: 'Şubat - Aşk ve Umudun Ayı',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const marchMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'march',
    _status: 'published',
    title: 'Mart',
    description: 'Bahar mevsiminin başlangıcı, doğanın uyanışı ve yeniden doğum ayı.',
    monthOrder: 3,
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
                text: 'Mart: Baharın Başlangıcı',
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
                text: 'Mart ayı, bahar mevsiminin resmi başlangıcıdır ve 31 gün sürer. 20 veya 21 Mart tarihinde bahar ekinoksu yaşanır ve gündüz ile gece saatleri eşitlenir. Doğa uyanmaya başlar ve yeni yaşam döngüsü başlar.',
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
                text: 'Ağaçlar tomurcuklanmaya başlar, çiçekler açar ve kuşlar göç etmeye başlar. Bu ay, yenilenme ve büyüme enerjisinin hissedildiği, umut dolu bir dönemdir.',
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
      description: 'Bahar mevsiminin başlangıcı, doğanın uyanışı ve yeniden doğum ayı.',
      image: heroImage.id,
      title: 'Mart - Baharın Başlangıcı',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const aprilMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'april',
    _status: 'published',
    title: 'Nisan',
    description: 'Bahar mevsiminin tam ortası, çiçek açma zamanı ve yaşamın patlama ayı.',
    monthOrder: 4,
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
                text: 'Nisan: Çiçeklerin Dansı',
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
                text: 'Nisan ayı, baharın tam ortası ve 30 gün sürer. Bu ay doğada en büyük değişimlerin yaşandığı, çiçeklerin açtığı ve yaşamın her köşede kendini gösterdiği muhteşem bir dönemdir.',
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
                text: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı',
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
                text: "Türkiye'nin önemli bir milli bayramı olan 23 Nisan, hem ulusal egemenliği hem de çocukları kutlayan özel bir gündür. Atatürk'ün çocuklara hediye ettiği bu gün, dünya çapında tanınır.",
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
      description: 'Bahar mevsiminin tam ortası, çiçek açma zamanı ve yaşamın patlama ayı.',
      image: heroImage.id,
      title: 'Nisan - Çiçeklerin Dansı',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const mayMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'may',
    _status: 'published',
    title: 'Mayıs',
    description: 'Bahar mevsiminin son ayı, işçi bayramı ve yazın müjdecisi.',
    monthOrder: 5,
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
                text: 'Mayıs: Emek ve Bereketin Ayı',
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
                text: "Mayıs ayı, bahar mevsiminin son ayıdır ve 31 gün sürer. Bu ay hem doğanın en verimli dönemini hem de işçi haklarının kutlandığı 1 Mayıs İşçi Bayramı'nı barındırır.",
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
                text: '1 Mayıs İşçi Bayramı',
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
                text: 'Dünya genelinde işçi haklarının ve emeğinin kutlandığı bu gün, sosyal adalet ve dayanışma ruhunun yaşatıldığı önemli bir anma günüdür.',
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
      description: 'Bahar mevsiminin son ayı, işçi bayramı ve yazın müjdecisi.',
      image: heroImage.id,
      title: 'Mayıs - Emek ve Bereketin Ayı',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const juneMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'june',
    _status: 'published',
    title: 'Haziran',
    description: 'Yaz mevsiminin başlangıcı, en uzun gün ve tatil zamanının müjdecisi.',
    monthOrder: 6,
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
                text: 'Haziran: Yaz Gün Dönümü',
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
                text: 'Haziran ayı, yaz mevsiminin başlangıcıdır ve 30 gün sürer. 21 Haziran civarında yaşanan yaz gün dönümü ile yılın en uzun günü yaşanır ve güneş en yüksek noktasına çıkar.',
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
                text: 'Tatil ve Dinlence',
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
                text: 'Okul tatillerinin başladığı bu ay, aileler için tatil planları yapma ve doğa ile bütünleşme zamanıdır. Deniz, plaj ve açık hava aktiviteleri zirvede yaşanır.',
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
      description: 'Yaz mevsiminin başlangıcı, en uzun gün ve tatil zamanının müjdecisi.',
      image: heroImage.id,
      title: 'Haziran - Yaz Gün Dönümü',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const julyMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'july',
    _status: 'published',
    title: 'Temmuz',
    description: 'Yaz mevsiminin ortası, en sıcak günler ve tatil zamanının zirvesi.',
    monthOrder: 7,
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
                text: 'Temmuz: Yazın Kalbi',
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
                text: 'Temmuz ayı, yaz mevsiminin tam ortasıdır ve 31 gün sürer. Bu ay genellikle yılın en sıcak dönemlerinden biri olarak bilinir ve tatil sezonunun zirvesini oluşturur.',
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
                text: 'Tatil ve Dinlence',
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
                text: 'Temmuz ayı, aileler için tatil yapmanın en ideal zamanıdır. Deniz kenarları, göller ve yüzme havuzları en yoğun dönemini yaşar. Açık hava festivalleri ve etkinlikleri bu ayda zirve yapar.',
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
      description: 'Yaz mevsiminin ortası, en sıcak günler ve tatil zamanının zirvesi.',
      image: heroImage.id,
      title: 'Temmuz - Yazın Kalbi',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const augustMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'august',
    _status: 'published',
    title: 'Ağustos',
    description: 'Yazın son ayı, hasat zamanı ve okula dönüş hazırlıkları.',
    monthOrder: 8,
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
                text: 'Ağustos: Yazın Vedası',
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
                text: 'Ağustos ayı, yaz mevsiminin son ayıdır ve 31 gün sürer. Bu ay hem yaz tatillerinin son dönemini hem de yeni akademik yıla hazırlık sürecini barındırır.',
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
                text: '30 Ağustos Zafer Bayramı',
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
                text: "Türkiye için özel önem taşıyan 30 Ağustos Zafer Bayramı, Büyük Taarruz'un zaferle sonuçlandığı ve bağımsızlık mücadelesinin taçlandığı gündür.",
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
      description: 'Yazın son ayı, hasat zamanı ve okula dönüş hazırlıkları.',
      image: heroImage.id,
      title: 'Ağustos - Yazın Vedası',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const septemberMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'september',
    _status: 'published',
    title: 'Eylül',
    description: 'Sonbaharın başlangıcı, okul açılışları ve mevsim geçişi.',
    monthOrder: 9,
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
                text: 'Eylül: Sonbaharın Müjdecisi',
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
                text: 'Eylül ayı, sonbahar mevsiminin başlangıcıdır ve 30 gün sürer. 22-23 Eylül tarihlerinde sonbahar ekinoksu yaşanır ve gündüz ile gece saatleri eşitlenir.',
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
                text: 'Okul ve Eğitim',
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
                text: 'Eylül ayı geleneksel olarak yeni akademik yılın başlangıcıdır. Okular açılır, öğrenciler yeni dönem heyecanını yaşar ve eğitim hayatı yeniden canlanır.',
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
      description: 'Sonbaharın başlangıcı, okul açılışları ve mevsim geçişi.',
      image: heroImage.id,
      title: 'Eylül - Sonbaharın Müjdecisi',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const octoberMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'october',
    _status: 'published',
    title: 'Ekim',
    description: 'Sonbaharın tam ortası, renk değişimi ve Cumhuriyet Bayramı.',
    monthOrder: 10,
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
                text: 'Ekim: Altın Sonbahar',
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
                text: 'Ekim ayı, sonbahar mevsiminin tam ortasıdır ve 31 gün sürer. Bu ay doğadaki renk değişiminin en güzel örneklerinin yaşandığı, yaprakların sarı, turuncu ve kırmızı tonlara büründüğü dönemdir.',
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
                text: '29 Ekim Cumhuriyet Bayramı',
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
                text: "Türkiye Cumhuriyeti'nin kuruluşunun kutlandığı 29 Ekim Cumhuriyet Bayramı, Türk milletinin en önemli milli bayramlarından biridir ve coşkuyla kutlanır.",
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
      description: 'Sonbaharın tam ortası, renk değişimi ve Cumhuriyet Bayramı.',
      image: heroImage.id,
      title: 'Ekim - Altın Sonbahar',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const novemberMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'november',
    _status: 'published',
    title: 'Kasım',
    description: "Sonbaharın son ayı, kışa geçiş ve Atatürk'ü Anma Günü.",
    monthOrder: 11,
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
                text: 'Kasım: Sonbaharın Vedası',
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
                text: 'Kasım ayı, sonbahar mevsiminin son ayıdır ve 30 gün sürer. Bu ay kış mevsimine geçişin hissedildiği, havaların serinlediği ve doğanın kış uykusuna hazırlandığı dönemdir.',
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
                text: "10 Kasım Atatürk'ü Anma Günü",
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
                text: "Türkiye Cumhuriyeti'nin kurucusu Mustafa Kemal Atatürk'ün ölüm yıldönümü olan 10 Kasım, saygı ve minnetle anıldığı özel bir gündür.",
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
      description: "Sonbaharın son ayı, kışa geçiş ve Atatürk'ü Anma Günü.",
      image: heroImage.id,
      title: 'Kasım - Sonbaharın Vedası',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}

export const decemberMonth: (args: MonthArgs) => RequiredDataFromCollectionSlug<'months'> = ({
  heroImage,
  author,
}) => {
  return {
    slug: 'december',
    _status: 'published',
    title: 'Aralık',
    description: 'Yılın son ayı, kış gün dönümü ve yeni yıl hazırlıkları.',
    monthOrder: 12,
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
                text: 'Aralık: Yılın Vedası',
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
                text: 'Aralık ayı, yılın son ayıdır ve 31 gün sürer. 21-22 Aralık tarihlerinde kış gün dönümü yaşanır ve yılın en kısa günü yaşanır. Bu ay hem yılın bitişi hem de yeni yılın hazırlıkları ile doludur.',
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
                text: 'Yılbaşı Hazırlıkları',
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
                text: 'Aralık ayı boyunca yeni yıl hazırlıkları yapılır, hediyeler alınır ve gelecek yıl için planlar kurulur. Bu dönem, sevdiklerle bir araya gelme ve birliktelik duygularının güçlendiği bir zamandır.',
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
      description: 'Yılın son ayı, kış gün dönümü ve yeni yıl hazırlıkları.',
      image: heroImage.id,
      title: 'Aralık - Yılın Vedası',
    },
    relatedMonths: [], // Bu seed script tarafından doldurulacak
  }
}
