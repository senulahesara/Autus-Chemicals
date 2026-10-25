import React from "react";
import { client } from "@/sanity/client";
import ProductsGridClient from "@/components/ProductsGridClient";
export const revalidate = 60;

const mainProductRanges = [
  "PU & Acrylic Products",
  "Equipment",
  "Silicon Products",
  "Washing Chemicals",
];

export default async function ProductsPage() {
  const query = `*[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    image
  }`;

  const textileCategories = await client.fetch(query);

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-24 pb-12 lg:pt-32">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-12 lg:mb-16 items-end">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Our Product <br className="hidden lg:block" />
              <span className="text-[#01CD61]">Range</span>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-lg text-slate-600 leading-relaxed text-balance font-medium">
              For all your textile dyestuffs and pigments, textile chemicals,
              textile machinery and equipment.
            </p>
          </div>
        </div>
      </section>
      <ProductsGridClient categories={textileCategories} />
    </main>
  );
}
