import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

type AdminRoleAccess = (args: AccessArgs<User>) => boolean

export const adminRoleAccess: AdminRoleAccess = ({ req: { user } }) => {
  // Kullanıcı giriş yapmamışsa erişim yok
  if (!user) {
    return false
  }

  // Kullanıcının role bilgisi var mı kontrol et
  if (!user.roles || typeof user.roles !== 'object' || !('slug' in user.roles)) {
    return false
  }

  // Admin, editor veya author rolü olanlar admin panele erişebilir
  const allowedRoles = ['admin', 'editor', 'author']
  return allowedRoles.includes(user.roles.slug as string)
}

// Sadece admin ve editor erişimi
export const adminEditorAccess: AdminRoleAccess = ({ req: { user, payload } }) => {
  if (!user) {
    return false
  }

  if (!user.roles || typeof user.roles !== 'object' || !('slug' in user.roles)) {
    return false
  }

  const allowedRoles = ['admin', 'editor']
  return allowedRoles.includes(user.roles.slug as string)
}

// Sadece admin erişimi (zaten var olan adminOnly ile aynı ama tutarlılık için)
export const adminOnlyRoleAccess: AdminRoleAccess = ({ req: { user } }) => {
  if (!user) {
    return false
  }

  if (!user.roles || typeof user.roles !== 'object' || !('slug' in user.roles)) {
    return false
  }

  return user.roles.slug === 'admin'
}
