import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './project';
import { bioType } from './bio';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, bioType],
};
