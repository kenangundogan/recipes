import type { AccessArgs, FieldAccess } from 'payload'

import type { User } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}

// Field access için ayrı fonksiyon
export const authenticatedField: FieldAccess = ({ req: { user } }) => {
  return Boolean(user)
}
