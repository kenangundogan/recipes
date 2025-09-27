import type { AccessArgs, FieldAccess } from 'payload'
import type { User } from '@/payload-types'

type isAdmin = (args: AccessArgs<User>) => boolean

export const adminOnly: isAdmin = ({ req: { user } }) => {
  // Kullanıcı giriş yapmış mı kontrol et
  if (!user) {
    return false
  }

  // Kullanıcının role bilgisi var mı ve admin rolü var mı kontrol et
  if (user.roles && typeof user.roles === 'object' && 'slug' in user.roles) {
    return user.roles.slug === 'admin'
  }

  return false
}

// Field access için ayrı fonksiyon
export const adminOnlyField: FieldAccess = ({ req: { user } }) => {
  // Kullanıcı giriş yapmış mı kontrol et
  if (!user) {
    return false
  }

  // Kullanıcının role bilgisi var mı ve admin rolü var mı kontrol et
  if (user.roles && typeof user.roles === 'object' && 'slug' in user.roles) {
    return user.roles.slug === 'admin'
  }

  return false
}
