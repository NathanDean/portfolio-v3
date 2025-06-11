import { SanityDocument } from 'next-sanity';

export default interface tool extends SanityDocument {
  name: string;
}
