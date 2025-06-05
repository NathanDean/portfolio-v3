import Link from 'next/link';
import Card from './Card';
import Project from '@/types/Project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card key={project.slug}>
      <div className="p-6">
        <h2 className="pb-1">{project.name}</h2>

        <p className="py-1 detail-text">{project.description}</p>

        <Link href={project.githubLink}>GitHub</Link>
      </div>
    </Card>
  );
}
