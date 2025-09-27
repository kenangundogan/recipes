import type { CollectionConfig } from 'payload'

import { adminEditorAccess } from '../../access/adminRoleAccess'
import { slugField } from '@/fields/slug'

export const Roles: CollectionConfig = {
  slug: 'roles',
  access: {
    admin: adminEditorAccess,
    create: adminEditorAccess,
    delete: adminEditorAccess,
    read: adminEditorAccess,
    update: adminEditorAccess,
  },
  admin: {
    group: 'User Management',
    useAsTitle: 'name',
    defaultColumns: ['name', 'description'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Örn. Admin',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        placeholder: 'Örn. Admin rolü için bir açıklama',
        rows: 4,
      },
    },
    {
      name: 'permissions',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        {
          label: 'Create',
          value: 'create',
        },
        {
          label: 'Read',
          value: 'read',
        },
        {
          label: 'Update',
          value: 'update',
        },
        {
          label: 'Delete',
          value: 'delete',
        },
      ],
    },
    ...slugField(),
  ],
}
