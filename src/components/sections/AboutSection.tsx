import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import createPortableTextComponents from '@/components/text/PortableText';
import TextContainer from '../text/TextContainer';

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
      <TextContainer className="">
        <h2 className="sectionHeading">about me</h2>

        <div className="space-y-2 sm:text-lg">
          <PortableText value={bio} components={components} />
        </div>
      </TextContainer>

      <div className="attribution absolute bottom-4 right-4">
        <p>
          Photo by{' '}
          <a
            href="https://unsplash.com/@resul?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resul Mentes
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/photos/white-clouds-and-blue-skies-DbwYNr8RPbg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
}
