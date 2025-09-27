import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { adminEditorAccess } from '../../access/adminRoleAccess'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidateIngredient } from './hooks/revalidateIngredient'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Ingredients: CollectionConfig<'ingredients'> = {
  slug: 'ingredients',
  access: {
    admin: adminEditorAccess,
    create: adminEditorAccess,
    delete: adminEditorAccess,
    read: adminEditorAccess,
    update: adminEditorAccess,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    relatedIngredients: true,
    seasons: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Ingredient Management',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'ingredients',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'ingredients',
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
        placeholder: 'Örn. Üzüm',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        placeholder: 'Örn. Üzüm',
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
          label: 'Nutrition Facts',
          fields: [
            {
              name: 'nutritionFacts',
              type: 'group',
              fields: [
                {
                  name: 'servingSize',
                  type: 'text',
                  label: 'Serving Size',
                  admin: {
                    placeholder: 'Örn. 100g, 1 adet, 1 bardak',
                    description: 'Besin değerlerinin hesaplandığı porsiyon boyutu',
                  },
                },
                {
                  name: 'calories',
                  type: 'number',
                  label: 'Calories (kcal)',
                  admin: {
                    placeholder: 'Örn. 65',
                    description: 'Porsiyon başına kalori miktarı',
                  },
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'protein',
                      type: 'number',
                      label: 'Protein (g)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 0.6',
                      },
                    },
                    {
                      name: 'carbohydrates',
                      type: 'number',
                      label: 'Carbohydrates (g)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 17',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'fat',
                      type: 'number',
                      label: 'Fat (g)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 0.2',
                      },
                    },
                    {
                      name: 'fiber',
                      type: 'number',
                      label: 'Fiber (g)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 1.4',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'sugar',
                      type: 'number',
                      label: 'Sugar (g)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 16',
                      },
                    },
                    {
                      name: 'sodium',
                      type: 'number',
                      label: 'Sodium (mg)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 1',
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: 'vitaminsAndMinerals',
              type: 'group',
              label: 'Vitamins and Minerals',
              fields: [
                {
                  name: 'vitaminC',
                  type: 'number',
                  label: 'Vitamin C (mg)',
                  admin: {
                    placeholder: 'Örn. 10.8',
                    description: 'Porsiyon başına Vitamin C miktarı',
                  },
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'vitaminA',
                      type: 'number',
                      label: 'Vitamin A (IU)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 66',
                      },
                    },
                    {
                      name: 'vitaminK',
                      type: 'number',
                      label: 'Vitamin K (mcg)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 22',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'potassium',
                      type: 'number',
                      label: 'Potassium (mg)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 191',
                      },
                    },
                    {
                      name: 'calcium',
                      type: 'number',
                      label: 'Calcium (mg)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 10',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'iron',
                      type: 'number',
                      label: 'Iron (mg)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 0.4',
                      },
                    },
                    {
                      name: 'magnesium',
                      type: 'number',
                      label: 'Magnesium (mg)',
                      admin: {
                        width: '50%',
                        placeholder: 'Örn. 7',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              name: 'relatedIngredients',
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
              relationTo: 'ingredients',
            },
            {
              name: 'ingredientCategories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'ingredientCategories',
            },
            {
              name: 'seasons',
              type: 'relationship',
              admin: {
                position: 'sidebar',
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
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateIngredient],
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
