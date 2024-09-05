//query
//page

import { GetStaticProps } from "next"

import { groq, SanityClient } from 'next-sanity'

import { pagesBySlugQuery, pagePathsQuery } from "@/sanity/lib/querys"
import { client } from "@/sanity/lib/client"

interface PageProps {
    params: {slug:string}
}

export default async function PageSlugRoute(props: PageProps) {
    const { params } = props

    const data = await client.fetch(pagesBySlugQuery, { slug: params.slug })

    return(
        <div>
            <h1>{data?.title}</h1>
        </div>
    )
}
