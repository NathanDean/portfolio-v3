import { client } from '@/sanity/lib/client';
import BlogPost from '@/types/BlogPost';
import { PortableText } from '@portabletext/react';
import createPortableTextComponents from '@/components/PortableText';

export default async function Blog() {
  const BLOG_POSTS_QUERY = `*[_type == "blogPost"]`;
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<BlogPost[]>(BLOG_POSTS_QUERY, {}, options);
  const components = createPortableTextComponents();

  return (
    <>
      {posts.map((post) => (
        <div key={post.slug.current}>
          <h2>{post.title}</h2>

          <PortableText value={post.body} components={components} />
        </div>
      ))}
    </>
  );
}
