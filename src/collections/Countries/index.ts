import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidateCountry } from './hooks/revalidateCountry'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Countries: CollectionConfig<'countries'> = {
  slug: 'countries',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    cities: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Geography Management',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'countries',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'countries',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Örn. Türkiye',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        placeholder: 'Örn. Türkiye',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          label: 'Other',
          fields: [
            {
              name: 'iso2Code',
              label: 'ISO 2 Code',
              type: 'text',
              required: false,
              admin: {
                placeholder: 'Örn. TR',
                description: '2 harfli ISO ülke kodu',
              },
            },
            {
              name: 'iso3Code',
              label: 'ISO 3 Code',
              type: 'text',
              required: false,
              admin: {
                placeholder: 'Örn. TUR',
                description: '3 harfli ISO ülke kodu',
              },
            },
            {
              name: 'capitalCity',
              label: 'Capital City',
              type: 'text',
              required: false,
              admin: {
                placeholder: 'Örn. Ankara',
                description: 'Başkent şehri',
              },
            },
            {
              name: 'coordinates',
              type: 'group',
              label: 'Coordinates',
              fields: [
                {
                  name: 'longitude',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. 32.3606',
                    description: 'Boylam',
                  },
                },
                {
                  name: 'latitude',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. 39.7153',
                    description: 'Enlem',
                  },
                },
                {
                  name: 'point',
                  type: 'point',
                  admin: {
                    placeholder: 'Örn. 37.774929, 29.032321',
                    description: 'Harita üzerinde konum',
                  },
                },
              ],
            },
            {
              name: 'region',
              type: 'group',
              label: 'Region',
              fields: [
                {
                  name: 'id',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. ECS',
                  },
                },
                {
                  name: 'iso2code',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. Z7',
                  },
                },
                {
                  name: 'value',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. Europe & Central Asia',
                  },
                },
              ],
            },
            {
              name: 'adminregion',
              type: 'group',
              label: 'Administrative Region',
              fields: [
                {
                  name: 'id',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. ECA',
                  },
                },
                {
                  name: 'iso2code',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. 7E',
                  },
                },
                {
                  name: 'value',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. Europe & Central Asia (excluding high income)',
                  },
                },
              ],
            },
            {
              name: 'incomeLevel',
              type: 'group',
              label: 'Income Level',
              fields: [
                {
                  name: 'id',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. UMC',
                  },
                },
                {
                  name: 'iso2code',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. XT',
                  },
                },
                {
                  name: 'value',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. Upper middle income',
                  },
                },
              ],
            },
            {
              name: 'lendingType',
              type: 'group',
              label: 'Lending Type',
              fields: [
                {
                  name: 'id',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. IBD',
                  },
                },
                {
                  name: 'iso2code',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. XF',
                  },
                },
                {
                  name: 'value',
                  type: 'text',
                  admin: {
                    placeholder: 'Örn. IBRD',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              name: 'relatedCountries',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
              hasMany: true,
              relationTo: 'countries',
            },
            {
              name: 'cities',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'cities',
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
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
  hooks: {
    afterChange: [revalidateCountry],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
