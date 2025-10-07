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
import { revalidateDelete, revalidateRecipe } from './hooks/revalidateRecipe'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Recipes: CollectionConfig<'recipes'> = {
  slug: 'recipes',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    ingredients: true,
    seasons: true,
    servings: true,
    prepTime: true,
    cookTime: true,
    difficulty: true,
    cookingMethod: true,
    nutritionValues: true,
    dietTypes: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'difficulty', 'cookTime', 'servings', 'updatedAt'],
    group: 'Recipe Management',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'recipes',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'recipes',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    // Temel Bilgiler
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Örn. Beyran Çorbası',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        placeholder: 'Tarifin kısa tanıtımı, kültürel veya tarihi bilgisi...',
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
          label: 'Recipe Details',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'servings',
                  type: 'number',
                  required: true,
                  min: 1,
                  max: 50,
                  admin: {
                    placeholder: '4',
                    width: '33%',
                  },
                },
                {
                  name: 'prepTime',
                  type: 'number',
                  required: true,
                  min: 0,
                  admin: {
                    placeholder: '30',
                    width: '33%',
                  },
                },
                {
                  name: 'cookTime',
                  type: 'number',
                  required: true,
                  min: 0,
                  admin: {
                    placeholder: '45',
                    width: '34%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'difficulty',
                  type: 'relationship',
                  required: true,
                  relationTo: 'difficultyLevels',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'cookingMethod',
                  type: 'relationship',
                  required: true,
                  relationTo: 'cookingMethods',
                  hasMany: true,
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Ingredients',
          fields: [
            {
              name: 'ingredients',
              type: 'array',
              required: true,
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'ingredient',
                      type: 'relationship',
                      relationTo: 'ingredients',
                      required: true,
                      admin: {
                        width: '40%',
                      },
                    },
                    {
                      name: 'amount',
                      type: 'number',
                      required: true,
                      admin: {
                        placeholder: '250',
                        width: '30%',
                      },
                    },
                    {
                      name: 'unit',
                      type: 'relationship',
                      relationTo: 'ingredientUnits',
                      required: true,
                      admin: {
                        width: '30%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'notes',
                      type: 'text',
                      admin: {
                        placeholder: 'Örn. Alternatif malzeme notları...',
                        width: '100%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'optional',
                      type: 'checkbox',
                      label: 'İsteğe Bağlı',
                      defaultValue: false,
                    },
                  ],
                },
              ],
              admin: {
                description: 'Tarif malzemelerini ekleyin',
              },
            },
          ],
        },
        {
          label: 'Instructions',
          fields: [
            {
              name: 'instructions',
              type: 'array',
              required: true,
              minRows: 1,
              fields: [
                {
                  name: 'step',
                  type: 'textarea',
                  required: true,
                  admin: {
                    placeholder: 'Adım adım talimatları yazın...',
                  },
                },
                {
                  name: 'tip',
                  type: 'text',
                  admin: {
                    placeholder: 'Profesyonel ipucu (opsiyonel)',
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description: 'Adım görseli (opsiyonel)',
                  },
                },
              ],
              admin: {
                description: 'Hazırlama adımlarını sıralayın',
              },
            },
            {
              name: 'servingTips',
              type: 'textarea',
              admin: {
                placeholder: 'Sunum önerileri, garnitür, servis şekli...',
              },
            },
          ],
        },
        {
          label: 'Nutrition',
          description: 'Porsiyon başına besin değerleri',
          fields: [
            {
              name: 'nutritionValues',
              type: 'array',
              required: true,
              minRows: 1,
              admin: {
                description: 'Besin değerlerini ve miktarlarını belirtin',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'nutrient',
                      type: 'relationship',
                      relationTo: 'nutrients',
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      name: 'amount',
                      type: 'number',
                      required: true,
                      min: 0,
                      admin: {
                        placeholder: '25',
                        width: '30%',
                      },
                    },
                    {
                      name: 'unit',
                      type: 'select',
                      required: true,
                      options: [
                        {
                          label: 'kcal',
                          value: 'kcal',
                        },
                        {
                          label: 'g',
                          value: 'g',
                        },
                        {
                          label: 'mg',
                          value: 'mg',
                        },
                        {
                          label: 'μg',
                          value: 'mcg',
                        },
                      ],
                      admin: {
                        width: '20%',
                      },
                      defaultValue: 'g',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Relations',
          fields: [
            {
              name: 'relatedRecipes',
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
              relationTo: 'recipes',
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
            {
              name: 'dietTypes',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'dietTypes',
            },
            {
              name: 'continents',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'continents',
            },
            {
              name: 'countries',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'countries',
            },
            {
              name: 'regions',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'regions',
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
        {
          name: 'firstName',
          type: 'text',
        },
        {
          name: 'lastName',
          type: 'text',
        },
        {
          name: 'profilePicture',
          type: 'upload',
          relationTo: 'media',
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
    afterChange: [revalidateRecipe],
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
