import React from "react";
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import CategoryDetailClient from "./CategoryDetailClient";

export const revalidate = 60;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const query = `{
    "category": *[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      description
    },
    "products": *[_type == "product" && category->slug.current == $slug] {
      _id,
      title,
      image,
      "subcategory": subcategory->title
    }
  }`;

  const data = await client.fetch(query, { slug });

  if (!data.category) {
    notFound();
  }

  return (
    <CategoryDetailClient category={data.category} products={data.products} />
  );
}
