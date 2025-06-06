import { defineField, defineType } from 'sanity';

export const bioType = defineType({
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
