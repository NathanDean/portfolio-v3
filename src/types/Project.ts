import { Image } from "sanity"
import { SanityDocument } from "next-sanity"

export default interface Project extends SanityDocument {
    name: string,
    slug: string,
    image: Image,
    description: string,
    appLink: string,
    githubLink: string,
    tools: string[]
}