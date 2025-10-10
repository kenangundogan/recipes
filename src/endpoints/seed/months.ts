import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

type MonthsSeedArgs = {
  author?: User | null
  heroImage?: Media | null
}

const createContent = (text: string) => ({
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text,
            version: 1,
          },
        ],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        textFormat: 0,
        version: 1,
      },
    ],
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})

const monthEntries = [
  {
    order: 1,
    title: 'Ocak',
    description: 'Yılın ilk ayı; taze başlangıçlar ve sıcak tutan tarifler için ideal.',
    content:
      'Ocak ayında sofralarınızı sıcak çorbalar, güveçler ve lif açısından zengin sebzelerle doldurabilirsiniz.',
  },
  {
    order: 2,
    title: 'Şubat',
    description: 'Kışın ortası; mevsim meyveleri ve güçlendirici yemeklerle ilerleyin.',
    content:
      'Şubat için narenciye ağırlıklı salatalar ve sağlıklı tahıllarla dengeli menüler planlayabilirsiniz.',
  },
  {
    order: 3,
    title: 'Mart',
    description: 'İlkbaharın habercisi; yeşil sebzeler ve hafif tarifler öne çıkar.',
    content:
      'Mart ayı, taze otlar ve bahar sebzeleriyle ferahlatıcı başlangıçlar hazırlamak için harika bir dönemdir.',
  },
  {
    order: 4,
    title: 'Nisan',
    description: 'İlkbaharın ortası; canlı renkli tabaklar ve hafif tatlılar sizi bekliyor.',
    content:
      'Nisan ayında çilek, kuşkonmaz ve bakla gibi taze ürünlerle yaratıcı tarifler deneyebilirsiniz.',
  },
  {
    order: 5,
    title: 'Mayıs',
    description: 'Yaz yaklaşırken sofralar hafifler, piknik tarifleri öne çıkar.',
    content:
      'Mayıs ayı, taze fasulye ve kuzu eti gibi mevsimsel lezzetleri bir araya getirmenin tam zamanı.',
  },
  {
    order: 6,
    title: 'Haziran',
    description: 'Yazın gelişi; ferahlatıcı içecekler ve soğuk salatalar için biçilmiş kaftan.',
    content:
      'Haziran ayında karpuz, çilek ve domates gibi sulu ürünlerle serinleten menüler kurabilirsiniz.',
  },
  {
    order: 7,
    title: 'Temmuz',
    description: 'Yaz ortası; mangal tarifleri ve dondurmalar vazgeçilmez olur.',
    content:
      'Temmuz ayında açık hava sofralarınızı ızgara sebzeler ve mevsim meyveleriyle zenginleştirin.',
  },
  {
    order: 8,
    title: 'Ağustos',
    description: 'Yazın son demleri; bol bol meyve-sebze saklamak için ideal bir ay.',
    content:
      'Ağustos ayında domates sosu hazırlayıp kavanozlayabilir, reçellerle kış hazırlıklarına başlayabilirsiniz.',
  },
  {
    order: 9,
    title: 'Eylül',
    description: 'Sonbaharın başlangıcı; balkabağı ve kök sebzeler geri döner.',
    content:
      'Eylül menülerine balkabaklı çorbalar ve fırınlanmış kök sebzeler eklemek sofralarınıza sıcaklık katar.',
  },
  {
    order: 10,
    title: 'Ekim',
    description: 'Serin havalarla birlikte baharatlı tatlar ve fırın yemekleri öne çıkar.',
    content:
      'Ekim ayında tarçınlı elma tatlıları ve yavaş pişmiş et yemekleri ile comfort food ruhunu yakalayın.',
  },
  {
    order: 11,
    title: 'Kasım',
    description: 'Hasat dönemi; etli güveçler ve doyurucu garnitürler severleri bekler.',
    content:
      'Kasım ayında mantar, kestane ve lahana gibi ürünlerle zenginleştirilen tarifler hazırlanabilir.',
  },
  {
    order: 12,
    title: 'Aralık',
    description: 'Yılın kapanışı; kutlama sofraları ve paylaşılan tatlılarla dolu.',
    content:
      'Aralık ayında tarçın ve karanfil kokulu tatlılar, özel akşam yemeklerinin vazgeçilmez eşlikçisidir.',
  },
] as const

const BASE_YEAR = 2024

export const monthsSeed = ({
  author,
  heroImage,
}: MonthsSeedArgs = {}): RequiredDataFromCollectionSlug<'months'>[] => {
  return monthEntries.map(({ order, title, description, content }) => ({
    title,
    description,
    monthOrder: order,
    content: createContent(content),
    heroImage: heroImage?.id ?? null,
    authors: author ? [author.id] : [],
    _status: 'published',
    meta: {
      title: `${title} Ayı`,
      description,
      image: heroImage?.id ?? null,
    },
    publishedAt: new Date(Date.UTC(BASE_YEAR, order - 1, 1)).toISOString(),
  }))
}
