import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Card from './Card';
import Project from '@/types/Project';

interface ProjectCardProps {
  project: Project,
}

export default function ProjectCard({ project }: ProjectCardProps) {

  return (
    <Card key={project.slug} className = "flex flex-col sm:flex-row">
        <div className = "w-full sm:w-1/2 relative">
          <Image 
            src = {urlFor(project.image).url()}
            alt = ""
            width = {400}
            height = {400}
            className = "w-full h-full object-cover"
          />
        </div>

      <div className = "w-full sm:w-1/2 border-t border-gray-200 sm:border-l sm:border-t-0">
        <div className = "p-6 space-y-1 md:space-y-2">
        <h2>{project.name}</h2>

        <div className = "flex flex-wrap gap-1 md:gap-2 py-1 md:py-2 text-sm">
          {project.tools.map(tool => (
            <span key = {tool} className = "p-1 md:py-2 md:px-4 border-1 border-gray-400 rounded-4xl">{tool}</span>
          ))}
        </div>

        <p>{project.description}</p>

        {project.gitHubLink && <Link href={project.gitHubLink}>GitHub</Link>}
        </div>
      </div>
    </Card>
  );
}