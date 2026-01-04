import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import createPortableTextComponents from '@/components/PortableText';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
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
    <div className="flex flex-col justify-center items-center min-h-screen py-20 md:py-10 bg-sky-200">
      {post ? (
        <div className="w-3/4 sm:w-5/8 py-20">
          <div className="post-card">
            <div className="flex flex-col xl:flex-row items-center pb-8 border-b border-dotted">
              <div className="mb-4 xl:mb-0 xl:mr-8">
                <h1 className="post-heading xl:mb-4">{post.title}</h1>
                <p>Posted {new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
              <Image
                src={urlFor(post.image).url()}
                alt=""
                width={400}
                height={400}
                className=""
              />
            </div>
            <PortableText value={post.body} components={components} />
          </div>
          <Link className="w-2/3 btn btn-dark bg-white-100" href="/blog">
            Back to blogs
          </Link>
        </div>
      ) : (
        <div>
          <h1>Post not found</h1>
          <Link className="btn" href="/blog">
            Back to blogs
          </Link>
        </div>
      )}
    </div>
  );
}
