import { SanityDocument } from 'next-sanity';

export default interface CV extends SanityDocument {
  url: string;
}
