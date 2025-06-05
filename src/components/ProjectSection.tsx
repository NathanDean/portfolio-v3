import { client } from '@/sanity/lib/client';
import ProjectCard from './ProjectCard';
import Project from '@/types/Project';

export default async function ProjectSection(){

    const PROJECTS_QUERY = `*[_type == "project"]`;
    const options = { next: { revalidate: 30 } };
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY, {}, options);


    return (

        <div className = "min-h-screen bg-cyan-50">

            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}

        </div>

    )

}