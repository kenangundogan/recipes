import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    group: 'User Management',
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: {
    loginWithUsername: {
      allowEmailLogin: true,
      requireEmail: false,
    },
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000, // 10 minutes
  },
  timestamps: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'general',
          label: 'General',
          fields: [
            {
              name: 'firstName',
              type: 'text',
              label: 'First Name',
              admin: {
                placeholder: 'Örn. Kenan',
              },
            },
            {
              name: 'lastName',
              type: 'text',
              label: 'Last Name',
              admin: {
                placeholder: 'Örn. Gündoğan',
              },
            },
            {
              name: 'username',
              type: 'text',
              label: 'Username',
              admin: {
                placeholder: 'Örn. kenangundogan',
              },
            },
            {
              name: 'birthDate',
              type: 'date',
              label: 'Birth Date',
              admin: {
                placeholder: 'Örn. 1988-01-01',
              },
            },
          ],
        },
        {
          name: 'genders',
          label: 'Genders',
          fields: [
            {
              name: 'gender',
              type: 'relationship',
              label: 'Gender',
              relationTo: 'genders',
              admin: {
                placeholder: 'Örn. Erkek',
              },
            },
          ],
        },
        {
          name: 'addresses',
          label: 'Addresses',
          fields: [
            {
              name: 'country',
              type: 'text',
              label: 'Country',
              admin: {
                placeholder: 'Örn. Türkiye',
              },
            },
            {
              name: 'city',
              type: 'text',
              label: 'City',
              admin: {
                placeholder: 'Örn. İstanbul',
              },
            },
            {
              name: 'district',
              type: 'text',
              label: 'District',
              admin: {
                placeholder: 'Örn. Beşiktaş',
              },
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Address',
              admin: {
                placeholder: 'Örn. Beşiktaş Mahallesi, 123. Sokak, No: 1',
              },
            },
          ],
        },
        {
          name: 'phones',
          label: 'Phones',
          fields: [
            {
              name: 'landline',
              type: 'text',
              label: 'Landline',
              admin: {
                placeholder: 'Örn. 0212 555 55 55',
              },
            },
            {
              name: 'gsm',
              type: 'text',
              label: 'GSM',
              admin: {
                placeholder: 'Örn. 0555 555 55 55',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'roles',
      type: 'relationship',
      relationTo: 'roles',
      admin: {
        position: 'sidebar',
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
  ],
}
