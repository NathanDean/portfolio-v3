import { type SchemaTypeDefinition } from 'sanity';
import { cvType } from './cv';
import { overviewType } from './overview';
import { projectType } from './project';
import { bioType } from './bio';
import { toolType } from './tool';
import { blogPostType } from './blogPost';
import { tagType } from './tag';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    cvType,
    overviewType,
    projectType,
    bioType,
    toolType,
    blogPostType,
    tagType,
  ],
};
