import Image from "next/image";
import { ModeToggle } from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

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
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.thumbnailImage).url()}
            alt={post.title}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.smallDescription}</CardDescription>
          </CardContent>
        </Card>
      ))}

    </div>
  );
}
