import { Image } from 'sanity';
import { SanityDocument } from 'next-sanity';
import { PortableTextBlock } from 'next-sanity';
import tool from './Tool';

export default interface Project extends SanityDocument {
  name: string;
  slug: string;
  image: Image;
  description: PortableTextBlock[];
  appLink?: string;
  gitHubLink?: string;
  tools: tool[];
}
