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
    defaultColumns: ['email'],
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
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
            },
            {
              name: 'lastName',
              type: 'text',
              label: 'Last Name',
            },
            {
              name: 'username',
              type: 'text',
              label: 'Username',
            },
            {
              name: 'birthDate',
              type: 'date',
              label: 'Birth Date',
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
              name: 'address',
              type: 'textarea',
              label: 'Address',
              admin: {
                placeholder: 'Örn. Beşiktaş',
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
  ],
  timestamps: true,
}
