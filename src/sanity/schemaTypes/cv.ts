import { defineField, defineType } from 'sanity';

export const cvType = defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
});
