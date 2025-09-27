import type { Access } from 'payload'

export const adminOrSelf: Access = ({ req }) => {
  const { user } = req

  // Kullanıcı giriş yapmamışsa erişim yok
  if (!user) {
    return false
  }

  // Admin ise tüm kayıtlara erişim var
  if (
    user.roles &&
    typeof user.roles === 'object' &&
    'slug' in user.roles &&
    user.roles.slug === 'admin'
  ) {
    return true
  }

  // Sadece kendi kaydına erişim var
  return {
    id: {
      equals: user.id,
    },
  }
}
