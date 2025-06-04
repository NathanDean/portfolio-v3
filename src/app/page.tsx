import { client } from "@/sanity/lib/client";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import Project from "@/types/Project";

const PROJECTS_QUERY = `*[_type == "project"]`;
const options = { next: { revalidate: 30 } };

export default async function Home() {

  const projects = await client.fetch<Project[]>(PROJECTS_QUERY, {}, options)

  return (
  
    <>

      <HeroSection />

      {projects.map(project => (
        <ProjectCard key = {project.slug} project = {project} />
      ))}
  
    </>
  
  );

}