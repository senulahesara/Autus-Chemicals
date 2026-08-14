import { client } from "@/sanity/client";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const query = `*[_type == "category"] | order(_createdAt asc) {
    "name": title,
    "slug": slug.current
  }`;

  const categories = await client.fetch(query);

  return <HeaderClient categories={categories} />;
}
