import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import createPortableTextComponents from '@/utils/portableTextComponents';

export default async function AboutSection() {
  const BIO_QUERY = `*[_type == "bio"][0].bio`;
  const options = { next: { revalidate: 30 } };
  const bio = await client.fetch<PortableTextBlock[]>(BIO_QUERY, {}, options);
  const components = createPortableTextComponents();

  return (
    <div
      id="about"
      className="relative flex justify-center items-center min-h-screen pt-20 pb-25 bg-[url('/sky.jpg')] bg-cover bg-top bg-no-repeat"
    >
      <div className="w-3/4 sm:w-5/8">
        <h2 className="sectionHeading">about me</h2>

        <div className="bio space-y-2">
          <PortableText value={bio} components={components} />
        </div>
      </div>

      <div className="attribution absolute bottom-4 right-4">
        <p>
          Photo by{' '}
          <a href="https://unsplash.com/@resul?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Resul Mentes
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/white-clouds-and-blue-skies-DbwYNr8RPbg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
}
