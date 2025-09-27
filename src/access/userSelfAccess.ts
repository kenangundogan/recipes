import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

type AdminAccess = (args: AccessArgs<User>) => boolean

// Admin panelde Users koleksiyonunu görebilme yetkisi
export const userAdminAccess: AdminAccess = ({ req: { user } }) => {
  // Kullanıcı giriş yapmamışsa erişim yok
  if (!user) {
    return false
  }

  // Admin, editor, author rolleri tüm kullanıcıları admin panelde görebilir
  if (user.roles && typeof user.roles === 'object' && 'slug' in user.roles) {
    const allowedRoles = ['admin', 'editor', 'author']
    if (allowedRoles.includes(user.roles.slug as string)) {
      return true
    }
  }

  // Diğer roller (contributor, subscriber, guest) kendi kayıtlarını görebilir
  // Ancak admin access sadece boolean döndürebilir, bu yüzden true döndürüyoruz
  // Gerçek filtreleme read/update access'te yapılacak
  return true
}
