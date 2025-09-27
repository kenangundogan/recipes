import { RequiredDataFromCollectionSlug } from 'payload'

export const maleGender: () => RequiredDataFromCollectionSlug<'genders'> = () => ({
  slug: 'male',
  title: 'Erkek',
  description: 'Erkekler için bir koleksiyon',
})

export const femaleGender: () => RequiredDataFromCollectionSlug<'genders'> = () => ({
  slug: 'female',
  title: 'Kadın',
  description: 'Kadınlar için bir koleksiyon',
})

export const otherGender: () => RequiredDataFromCollectionSlug<'genders'> = () => ({
  slug: 'other',
  title: 'Diğer',
  description: 'Diğerleri için bir koleksiyon',
})

export const genders: RequiredDataFromCollectionSlug<'genders'>[] = [
  maleGender(),
  femaleGender(),
  otherGender(),
]
