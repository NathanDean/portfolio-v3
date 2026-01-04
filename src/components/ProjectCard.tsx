import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import Project from '@/types/Project';
import createPortableTextComponents from '@/components/PortableText';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const components = createPortableTextComponents();

  return (
    <div key={project.slug.current} className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 relative">
        <Image
          src={urlFor(project.image).url()}
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full p-6 sm:w-1/2 space-y-4 border-t border-gray-200 sm:border-l sm:border-t-0 bg-white shadow-sm overflow-hidden">
        <div className="space-y-4">
          <h3>{project.name}</h3>

          <div className="flex flex-wrap gap-2 text-sm">
            {project.tools.map((tool) => (
              <span
                key={tool.name}
                className="px-3 py-2 md:px-4 md:py-2 border-1 border-gray-400 rounded-4xl"
              >
                {tool.name}
              </span>
            ))}
          </div>

          <div>
            <PortableText value={project.description} components={components} />
          </div>
        </div>

        <div className="flex gap-2">
          {project.gitHubLink && (
            <a
              className="btn btn-blue w-1/2"
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.appLink && (
            <a
              className="btn btn-blue w-1/2"
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
