import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import Project from '@/types/Project';
import createPortableTextComponents from '@/components/text/PortableText';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const components = createPortableTextComponents();

  return (
    <div key={project.slug.current} className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative">
        <Image
          src={urlFor(project.image).url()}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full p-6 md:w-1/2 space-y-4 border-t border-gray-200 sm:border-l sm:border-t-0 bg-white shadow-sm overflow-hidden">
        <div className="space-y-4">
          <h3>{project.name}</h3>
          <div className="xl:flex flex-row text-sm lg:text-base">
            <h4 className="inline">Tools:</h4>
            <div className="flex flex-wrap">
              {project.tools.map((tool) => (
                <span
                  key={tool.name}
                  className="px-2 border-r border-gray-600 first:pl-0 xl:first:pl-2 last:border-none"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <PortableText value={project.description} components={components} />
          </div>
        </div>

        <div className="flex gap-2">
          {project.gitHubLink && (
            <a
              className="btn w-1/2 border-sky-900 rounded-xl hover:border-sky-900 hover:bg-sky-900 text-sky-900 hover:text-white"
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.appLink && (
            <a
              className="btn w-1/2 border-sky-900 rounded-xl hover:border-sky-900 hover:bg-sky-900 text-sky-900 hover:text-white"
              href={project.appLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live app
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
