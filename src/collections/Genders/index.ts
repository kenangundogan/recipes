import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const Genders: CollectionConfig = {
  slug: 'genders',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
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
