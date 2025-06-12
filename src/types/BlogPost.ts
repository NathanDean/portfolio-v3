import { SanityDocument } from 'next-sanity';
import { Slug } from 'sanity';
import { PortableTextBlock } from 'next-sanity';
import Tag from './Tag';

export default interface BlogPost extends SanityDocument {
  title: string;
  slug: Slug;
  body: PortableTextBlock[];
  publishedAt: Date;
  Tags: Tag[];
}
