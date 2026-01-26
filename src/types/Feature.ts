import { SanityDocument } from 'next-sanity';

export default interface Feature extends SanityDocument {
  name: string;
}
