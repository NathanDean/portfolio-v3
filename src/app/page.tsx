import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const PROJECTS_QUERY = `*[_type == "project"]`;
const options = { next: { revalidate: 30 } };

export default async function Home() {

  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options)

  return (
  
    <div>

        {projects.map(project => (
          <div key = {project.slug}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <Link href = {project.githubLink}>GitHub</Link>
          </div>
        ))}
  
    </div>
  
  );

}