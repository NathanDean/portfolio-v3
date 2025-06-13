import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center h-screen bg-[url('/water.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-3/4 md:w-2/5 mt-8 space-y-4">
        <h1 className="hero-heading">Hi, {`I'm`} Nathan</h1>

        <h2 className="hero-subheading">
          MSc Computer Science w/ AI student with a background in creative
          industries communications.
        </h2>

        <div className="flex space-x-4">
          <Link href="https://github.com/nathandean">
            <Github
              size={35}
              className="hover:text-white transition duration-100"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/nathanjdean/">
            <Linkedin
              size={35}
              className="hover:text-white transition duration-100"
            />
          </Link>
        </div>
      </div>

      <div className="attribution absolute bottom-4 right-4">
        <p>
          Photo by{' '}
          <a href="https://unsplash.com/@marissar_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Marissa Rodriguez
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/light-reflected-on-water-at-daytime-2mKYEVGA4jE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </div>
    </section>
  );
}
