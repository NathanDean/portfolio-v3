import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './project';
import { bioType } from './bio';
import { toolType } from './tool';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, bioType, toolType],
};
