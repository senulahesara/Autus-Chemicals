"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

interface Category {
  _id: string;
  title: string;
  slug: string;
  image: any;
}

export default function ProductsGridClient({
  categories,
}: {
  categories: Category[];
}) {
  const getBentoSpan = (index: number) => {
    const spans = [
      "lg:col-span-2 lg:row-span-2 col-span-2",
      "col-span-1",
      "col-span-1",
      "lg:col-span-2 col-span-2",
      "lg:col-span-2 col-span-2",
      "col-span-1",
      "col-span-1",
      "col-span-1",
      "col-span-1",
      "lg:col-span-2 col-span-2",
    ];
    return spans[index % spans.length];
  };

  return (
    <section className="w-full bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Textile Printing Products
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[160px] lg:auto-rows-[200px]">
          {categories.map((category, index) => (
            <Link
              href={`/products/${category.slug}`}
              key={category._id}
              className={`block h-full ${getBentoSpan(index)}`}
            >
              <div className="relative h-full flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-[#01CD61] transition-colors duration-300">
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4">
                  {category.image ? (
                    <Image
                      src={urlFor(category.image).url()}
                      alt={category.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full flex items-center justify-center border border-slate-200">
                      <span className="text-slate-400 text-[10px] tracking-wider">
                        No Icon
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-sm md:text-base font-semibold text-center text-foreground">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
