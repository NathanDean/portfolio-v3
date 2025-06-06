import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image';
import Card from './Card';
import Project from '@/types/Project';
import createPortableTextComponents from '@/utils/portableTextComponents';

interface ProjectCardProps {
  project: Project,
}

export default function ProjectCard({ project }: ProjectCardProps) {

  const components = createPortableTextComponents();

  return (
    <Card key={project.slug} className = "flex flex-col sm:flex-row sm:h-96">
        <div className = "w-full sm:w-1/2 relative">
          <Image 
            src = {urlFor(project.image).url()}
            alt = ""
            width = {400}
            height = {400}
            className = "w-full h-full object-cover"
          />
        </div>

      <div className = "flex flex-col justify-between w-full p-6 sm:w-1/2 space-y-4 border-t border-gray-200 sm:border-l sm:border-t-0">
        <div className = "space-y-4">
          <h3>{project.name}</h3>

          <div className = "flex flex-wrap gap-1 md:gap-2 text-sm">
            {project.tools.map(tool => (
              <span key = {tool} className = "px-2 py-1 md:px-4 md:py-2 border-1 border-gray-400 rounded-4xl">{tool}</span>
            ))}
          </div>

          <div className = "description">
            <PortableText value = {project.description} components = {components} />
          </div>

        </div>

          <div className = "flex gap-2">
            {project.gitHubLink && <Link className = "btn w-1/2" href={project.gitHubLink}>GitHub</Link>}
            {project.appLink && <Link className = "btn w-1/2" href = {project.appLink}>Visit app</Link>}
          </div>
      </div>
    </Card>
  );
}