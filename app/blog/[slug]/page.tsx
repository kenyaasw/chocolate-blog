import { blogArticle } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(slug: string) {
    const query = `
    *[_type == 'blog' && slug.current == $slug][0] {
        "currentSlug": slug.current,
        title,
        content,
        thumbnailImage
    }
    `;

    const data = await client.fetch(query, { slug });
    return data;
}

export default async function BlogArticle({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const data: blogArticle = await getData((await params).slug);

    if (!data) {
        notFound();
    }

    return (
        <div className="mt-8">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Article</span>
                <span className="mt-4 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image
                src={urlFor(data.thumbnailImage).url()}
                alt={data.title}
                width={800}
                height={800}
                priority
                className="rounded-lg mt-8 border mx-auto"
            />
            <div className="mt-16 mx-auto max-w-5xl text-justify">
                <PortableText value={data.content} />
            </div>
        </div>

    );
}