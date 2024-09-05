//query
//page

import { GetStaticProps } from "next"

import { groq, SanityClient } from 'next-sanity'

import { pagesBySlugQuery, pagePathsQuery } from "@/sanity/lib/querys"
import { client } from "@/sanity/lib/client"
import { SelectionSlash } from "phosphor-react"
import { Image } from "../../../components/Image"

interface PageProps {
    params: {slug:string};
    sections: {section: any};
}


export default async function PageSlugRoute(props: PageProps) {
    const { params } = props

    const data = await client.fetch(pagesBySlugQuery, { slug: params.slug }, { sections: params.section})

    console.log(data)

    return(
        <div>
            <h1>{data?.title}</h1>
            <h1>{data?.slug}</h1>
            {
                data.sections && data.sections.map((section: any) => {
                    switch (section._type) {
                        case "image":
                            return <Image key={section._key} image={section} />
                    }
                })
            }
        </div>
    )
}
