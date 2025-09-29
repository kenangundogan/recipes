import { RequiredDataFromCollectionSlug } from 'payload'

export const adminRole: () => RequiredDataFromCollectionSlug<'roles'> = () => ({
  slug: 'admin',
  name: 'Admin',
  description:
    'Sistemin tam kontrolüne sahip en üst düzey yönetici rolü. Tüm koleksiyonları oluşturabilir, okuyabilir, güncelleyebilir ve silebilir. Kullanıcı yönetimi, sistem ayarları ve tüm içerikler üzerinde tam yetkiye sahiptir.',
  permissions: ['create', 'read', 'update', 'delete'],
})

export const editorRole: () => RequiredDataFromCollectionSlug<'roles'> = () => ({
  slug: 'editor',
  name: 'Editör',
  description:
    'İçerik yönetimi ve düzenleme konusunda geniş yetkilere sahip rol. Tarifler, yazılar ve diğer içerikleri oluşturabilir, düzenleyebilir ve yayınlayabilir. Ancak kullanıcı yönetimi ve sistem ayarlarına erişimi yoktur.',
  permissions: ['create', 'read', 'update'],
})

export const authorRole: () => RequiredDataFromCollectionSlug<'roles'> = () => ({
  slug: 'author',
  name: 'Yazar',
  description:
    'Kendi içeriklerini oluşturma ve düzenleme yetkisine sahip rol. Tarifler ve yazılar ekleyebilir, kendi içeriklerini güncelleyebilir. Diğer kullanıcıların içeriklerini düzenleyemez veya silemez.',
  permissions: ['create', 'read', 'update'],
})

export const contributorRole: () => RequiredDataFromCollectionSlug<'roles'> = () => ({
  slug: 'contributor',
  name: 'Katkıda Bulunan',
  description:
    'Sınırlı yetkilere sahip rol. Yeni içerik oluşturabilir ancak yayınlayamaz. Oluşturduğu içerikler editör veya yönetici onayından geçmelidir. Mevcut içerikleri düzenleyemez.',
  permissions: ['create', 'read'],
})

export const subscriberRole: () => RequiredDataFromCollectionSlug<'roles'> = () => ({
  slug: 'subscriber',
  name: 'Abone',
  description:
    'Sadece okuma yetkisine sahip temel kullanıcı rolü. Tüm içerikleri görüntüleyebilir ancak yeni içerik oluşturamaz veya mevcut içerikleri düzenleyemez. Premium içeriklere erişim hakkına sahiptir.',
  permissions: ['read'],
})

export const guestRole: () => RequiredDataFromCollectionSlug<'roles'> = () => ({
  slug: 'guest',
  name: 'Misafir',
  description:
    'En sınırlı yetkilere sahip rol. Sadece genel içerikleri görüntüleyebilir. Kayıt olmadan siteyi ziyaret eden kullanıcılar için tasarlanmıştır. Premium içeriklere erişimi yoktur.',
  permissions: ['read'],
})

export const roles: RequiredDataFromCollectionSlug<'roles'>[] = [
  adminRole(),
  editorRole(),
  authorRole(),
  contributorRole(),
  subscriberRole(),
  guestRole(),
]
