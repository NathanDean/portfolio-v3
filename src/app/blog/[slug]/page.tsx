import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import createPortableTextComponents from '@/components/PortableText';
import BlogPost from '@/types/BlogPost';

export default async function blogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]`;
  const options = { next: { revalidate: 30 } };
  const post = await client.fetch<BlogPost>(BLOG_POST_QUERY, { slug }, options);
  const components = createPortableTextComponents();

  return (
    <>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <PortableText value={post.body} components={components} />
        </div>
      ) : (
        <div>
          <h1>Post not found</h1>
        </div>
      )}
    </>
  );
}
