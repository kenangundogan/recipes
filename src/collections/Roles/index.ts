import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const Roles: CollectionConfig = {
  slug: 'roles',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
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
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ req, value, operation }) => {
            if (operation === 'create' && req.user) {
              return req.user.id
            }
            return value
          },
        ],
      },
    },
    {
      name: 'updatedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ req, operation }) => {
            if ((operation === 'create' || operation === 'update') && req.user) {
              return req.user.id
            }
          },
        ],
      },
    },
    ...slugField(),
  ],
}
