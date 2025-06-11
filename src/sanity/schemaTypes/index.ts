import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './project';
import { bioType } from './bio';
import { toolType } from './tool';
import { blogPostType } from './blogPost';
import { tagType } from './tag';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, bioType, toolType, blogPostType, tagType],
};
