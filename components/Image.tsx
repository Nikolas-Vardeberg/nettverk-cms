"use client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";

export type Image = {
    image: any;
}

export type Props = Image

export const Image = ({
    image,
}: Props) => {
    return(
        <div>
            <img src={image ? urlFor(image).url() : ""} alt="bilde" />
            <pre>
                {JSON.stringify(image)}
            </pre>
        </div>
    )
}