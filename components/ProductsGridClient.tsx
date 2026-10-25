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
  return (
    <section className="w-full bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Our Printing Products
          </h2>
        </div>

        {/* Uniform Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on small desktop, 5 on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 auto-rows-[160px] lg:auto-rows-[200px]">
          {categories.map((category) => (
            <Link
              href={`/products/${category.slug}`}
              key={category._id}
              className="block h-full"
            >
              <div className="relative h-full flex flex-col items-center justify-center p-4 lg:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#01CD61] hover:shadow-[0_8px_30px_rgba(1,205,97,0.08)] transition-all duration-300 group">
                
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 group-hover:scale-105 transition-transform duration-300">
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
                      <span className="text-slate-400 text-[10px] tracking-wider text-center leading-tight">
                        No Icon
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-sm md:text-base font-semibold text-center text-slate-800 text-balance group-hover:text-[#01CD61] transition-colors duration-300">
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
