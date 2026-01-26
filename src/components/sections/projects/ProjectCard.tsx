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
    <div key={project.slug.current} className="flex flex-col xl:flex-row">
      <div className="w-full h-96 lg:h-auto xl:w-1/2 relative">
        <Image
          src={urlFor(project.image).url()}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full p-6 xl:w-1/2 space-y-4 border-t border-gray-200 sm:border-l sm:border-t-0 bg-white shadow-sm overflow-hidden">
        <div className="space-y-4">
          <h3>{project.name}</h3>
          <div className="xl:flex flex-row">
            <h4 className="inline pr-3">Tools:</h4>
            <div className="flex flex-wrap -ml-3">
              {project.tools.map((tool) => (
                <span
                  key={tool.name}
                  className="px-3 mb-1 border-r border-gray-600 last:border-none"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          <div className="xl:flex flex-row">
            {project.features && (
              <>
                <h4 className="inline pr-3">Features:</h4>
                <div className="flex flex-wrap -ml-3">
                  {project.features &&
                    project.features.map((feature) => (
                      <span
                        key={feature.name}
                        className="px-3 mb-1 border-r border-gray-600 last:border-none"
                      >
                        {feature.name}
                      </span>
                    ))}
                </div>
              </>
            )}
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
