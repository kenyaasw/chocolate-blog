import { blogArticleData } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";

async function getData(slug: string) {
    const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,    
        title,
        thumbnailImage,
        smallDescription,
        content
    }[0]`;

    const data = await client.fetch(query);

    return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data: blogArticleData = await getData(params.slug);
    return (
        <h1>hello</h1>
    )
}