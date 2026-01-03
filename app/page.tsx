import Image from "next/image";
import { ModeToggle } from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card } from "@/components/ui/card";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    thumbnailImage
  }`;

  const data = await client.fetch(query);

  return data;

}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image src={urlFor(post.thumbnailImage).url()} alt={post.title} width={500} height={500} />
        </Card>
      ))}

    </div>
  );
}
