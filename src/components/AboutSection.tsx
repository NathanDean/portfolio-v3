import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import createPortableTextComponents from "@/utils/portableTextComponents"

export default async function AboutSection(){

    const BIO_QUERY = `*[_type == "bio"][0].bio`;
    const options = { next: { revalidate: 30 } };
    const bio = await client.fetch<PortableTextBlock[]>(BIO_QUERY, {}, options);
    const components = createPortableTextComponents();

    return(

        <div className = "flex justify-center items-center min-h-screen p-10 bg-blue-200">

            <div className = "w-5/8">
                <h2 className = "sectionHeading">about me</h2>

                <div className = "space-y-2 text-xl">                
                <PortableText value = {bio} components = {components} />
                </div>

            </div>
        </div>

    )

}