import { Image } from 'sanity';
import { Slug } from 'sanity';
import { SanityDocument } from 'next-sanity';
import { PortableTextBlock } from 'next-sanity';
import Tool from './Tool';

export default interface Project extends SanityDocument {
  name: string;
  slug: Slug;
  image: Image;
  description: PortableTextBlock[];
  appLink?: string;
  gitHubLink?: string;
  tools: Tool[];
}
