import { Image } from 'sanity';
import { Slug } from 'sanity';
import { SanityDocument } from 'next-sanity';

export default interface Overview extends SanityDocument {
  title: string;
  slug: Slug;
  image: Image;
  description: string;
}
