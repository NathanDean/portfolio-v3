import { client } from '@/sanity/lib/client';
import BlogPost from '@/types/BlogPost';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import createPortableTextComponents from '@/components/PortableText';
import Link from 'next/link';

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
    <div className="flex flex-col justify-center items-center min-h-screen px-10 py-20 md:py-10 bg-sky-200">
      <div className="container pt-20">
        {posts.map((post) => (
          <div key={post.slug.current} className="post-card pb-20">
            <h2 className="post-heading">{post.title}</h2>

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
