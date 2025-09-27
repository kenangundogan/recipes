import { RequiredDataFromCollectionSlug } from 'payload'

export const maleGender: () => RequiredDataFromCollectionSlug<'genders'> = () => ({
  slug: 'male',
  title: 'Erkek',
  description:
    'Erkek kullanıcılar için tanımlanan cinsiyet kategorisi. Kullanıcı profillerinde ve kişiselleştirilmiş içerik önerilerinde kullanılır.',
})

export const femaleGender: () => RequiredDataFromCollectionSlug<'genders'> = () => ({
  slug: 'female',
  title: 'Kadın',
  description:
    'Kadın kullanıcılar için tanımlanan cinsiyet kategorisi. Kullanıcı profillerinde ve kişiselleştirilmiş içerik önerilerinde kullanılır.',
})

export const preferNotToSayGender: () => RequiredDataFromCollectionSlug<'genders'> = () => ({
  slug: 'prefer-not-to-say',
  title: 'Belirtmek İstemiyorum',
  description:
    'Cinsiyet bilgisini paylaşmak istemeyen kullanıcılar için seçenek. Gizlilik ve kişisel tercihleri korumak amacıyla kullanılır.',
})

export const otherGender: () => RequiredDataFromCollectionSlug<'genders'> = () => ({
  slug: 'other',
  title: 'Diğer',
  description:
    'Yukarıdaki kategorilerden hiçbirine uymayan cinsiyet kimlikleri için genel kategori. Kapsayıcı ve esnek bir seçenektir.',
})

export const genders: RequiredDataFromCollectionSlug<'genders'>[] = [
  maleGender(),
  femaleGender(),
  preferNotToSayGender(),
  otherGender(),
]
