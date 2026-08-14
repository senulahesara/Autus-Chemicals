import React from "react";
import { client } from "@/sanity/client";
import ProductsGridClient from "./ProductsGridClient";

export default async function ProductsSection() {
  const query = `*[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    image
  }`;

  const categories = await client.fetch(query);

  return <ProductsGridClient categories={categories} />;
}
