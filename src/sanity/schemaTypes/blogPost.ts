import { defineField, defineType } from 'sanity';

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      validation: (rule) => rule.required(),
    }),
  ],
});
