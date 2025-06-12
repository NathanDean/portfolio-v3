import { SanityDocument } from 'next-sanity';

export default interface Tag extends SanityDocument {
  name: string;
}
