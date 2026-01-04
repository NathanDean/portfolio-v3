import { client } from '@/sanity/lib/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CV from '@/types/cv';

export default async function HeroSection() {
  const CV_URL_QUERY = `*[_type == "cv"][0]{
    "url": file.asset->url
  }`;
  const options = { next: { revalidate: 30 } };
  const { url } = await client.fetch<CV>(CV_URL_QUERY, {}, options);
  console.log(url);

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-[url('/water.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-3/4 md:w-2/5 mt-8 space-y-4">
        <h1>Hi, {`I'm`} Nathan</h1>

        <p className="text-lg sm:text-xl">
          Computer Science + AI grad with a background in creative industries
          communications.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex flex-row space-x-6">
            <a
              href="https://github.com/nathandean"
              className="flex flex-col justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="w-9 sm:w-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathanjdean/"
              className="flex flex-col justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-9 sm:h-14" />
            </a>
          </div>
          <a
            className="p-2 border-3 rounded-sm text-lg sm:text-xl font-medium hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="attribution absolute bottom-4 right-4">
        <p>
          Photo by{' '}
          <a
            href="https://unsplash.com/@marissar_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marissa Rodriguez
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/photos/light-reflected-on-water-at-daytime-2mKYEVGA4jE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
      </div>
    </section>
  );
}
