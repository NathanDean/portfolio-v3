import { defineField, defineType } from 'sanity';

export const toolType = defineType({
  name: 'tool',
  title: 'Tools',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
