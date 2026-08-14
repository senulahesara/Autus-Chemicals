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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {mainProductRanges.map((range, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#01CD61]/40 transition-colors duration-300"
            >
              <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-[#01CD61]/50"></div>

              <h3 className="text-lg md:text-xl font-bold text-slate-800 text-center text-balance">
                {range}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <ProductsGridClient categories={textileCategories} />
    </main>
  );
}
