import type { CollectionConfig } from 'payload'

import { adminEditorAccess } from '../../access/adminRoleAccess'
import { slugField } from '@/fields/slug'

export const Genders: CollectionConfig = {
  slug: 'genders',
  access: {
    admin: adminEditorAccess,
    create: adminEditorAccess,
    delete: adminEditorAccess,
    read: adminEditorAccess,
    update: adminEditorAccess,
  },
  admin: {
    group: 'User Management',
    useAsTitle: 'title',
    defaultColumns: ['title', 'description'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Örn. Erkek',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        placeholder: 'Örn. Erkekler için bir koleksiyon',
        rows: 4,
      },
    },
    ...slugField(),
  ],
}
