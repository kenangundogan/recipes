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
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Seasons: CollectionConfig<'seasons'> = {
  slug: 'seasons',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    hemisphere_north: true,
    hemisphere_south: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Time & Calendar',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'seasons',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'seasons',
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
        placeholder: 'Örn. İlkbahar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        placeholder: 'Örn. Doğanın uyanış mevsimi',
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
          label: 'Hemisphere Info',
          fields: [
            {
              name: 'hemisphere_north',
              type: 'group',
              label: 'Kuzey Yarım Küre',
              fields: [
                {
                  name: 'months',
                  type: 'relationship',
                  relationTo: 'months',
                  label: 'Aylar',
                  hasMany: true,
                  required: false,
                  admin: {
                    description: "Bu mevsimin Kuzey Yarım Küre'deki aylarını seçin",
                  },
                },
                {
                  name: 'start_date',
                  type: 'text',
                  label: 'Başlangıç Tarihi',
                  admin: {
                    placeholder: 'Örn. 21 Mart',
                  },
                },
                {
                  name: 'end_date',
                  type: 'text',
                  label: 'Bitiş Tarihi',
                  admin: {
                    placeholder: 'Örn. 21 Haziran',
                  },
                },
              ],
            },
            {
              name: 'hemisphere_south',
              type: 'group',
              label: 'Güney Yarım Küre',
              fields: [
                {
                  name: 'months',
                  type: 'relationship',
                  relationTo: 'months',
                  label: 'Aylar',
                  hasMany: true,
                  required: false,
                  admin: {
                    description: "Bu mevsimin Güney Yarım Küre'deki aylarını seçin",
                  },
                },
                {
                  name: 'start_date',
                  type: 'text',
                  label: 'Başlangıç Tarihi',
                  admin: {
                    placeholder: 'Örn. 23 Eylül',
                  },
                },
                {
                  name: 'end_date',
                  type: 'text',
                  label: 'Bitiş Tarihi',
                  admin: {
                    placeholder: 'Örn. 21 Aralık',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Relations',
          fields: [
            {
              name: 'relatedSeasons',
              type: 'relationship',
              label: 'İlişkili Mevsimler',
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
              relationTo: 'seasons',
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
              hasGenerateFn: true,
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
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
