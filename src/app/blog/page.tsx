import { client } from '@/sanity/lib/client';
import BlogPost from '@/types/BlogPost';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import createPortableTextComponents from '@/components/PortableText';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export default async function blog() {
  const BLOG_POSTS_QUERY = `*[_type == "blogPost"]`;
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<BlogPost[]>(BLOG_POSTS_QUERY, {}, options);
  // Gets first two paragraphs of post to display as preview
  const getPostPreview = (body: PortableTextBlock[]) => {
    const blocks = body.filter((block) => block._type === 'block');
    return blocks.slice(0, 2);
  };
  const components = createPortableTextComponents();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-20 md:py-10 bg-sky-200">
      <div className="container pt-20">
        {posts.map((post) => (
          <div key={post.slug.current} className="post-card pb-20">
            <div className="flex flex-col xl:flex-row items-center pb-8 border-b border-dotted">
              <h2 className="post-heading mb-4">{post.title}</h2>

              <Image
                src={urlFor(post.image).url()}
                alt=""
                width={400}
                height={400}
                className=""
              />
            </div>

            <PortableText
              value={getPostPreview(post.body)}
              components={components}
            />
            <span>...</span>
            <div className="mt-8">
              <Link
                href={`/blog/${post.slug.current}`}
                className="btn btn-dark bg-white-100"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
