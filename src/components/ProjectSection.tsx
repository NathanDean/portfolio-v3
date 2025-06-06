import { client } from '@/sanity/lib/client';
import ProjectCard from './ProjectCard';
import Project from '@/types/Project';

export default async function ProjectSection(){

    const PROJECTS_QUERY = `*[_type == "project"]|order(orderRank)`;
    const options = { next: { revalidate: 30 } };
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY, {}, options);

    return (

        <div className = "flex flex-col justify-center items-center min-h-screen p-10 bg-sky-900">

            <h2 className = "sectionHeading text-white">selected projects</h2>
            
            <div className = "grid grid-cols-1 xl:grid-cols-2 items-center gap-8 my-4">

                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}

            </div>

        </div>

    )

}