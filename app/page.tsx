import Image from "next/image";
import { ModeToggle } from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import { client } from "./lib/sanity";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current
  }`;

  const data = await client.fetch(query);

  return data;

}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <div >
      {/* <Navbar /> */}
      <h1>Hello index page</h1>

    </div>
  );
}
