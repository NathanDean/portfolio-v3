import { defineField, defineType } from 'sanity';

export const featureType = defineType({
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
