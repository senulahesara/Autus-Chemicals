"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { urlFor } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

interface CategoryDetailClientProps {
  category: {
    title: string;
    description?: any;
  };
  products: any[];
}

export default function CategoryDetailClient({
  category,
  products,
}: CategoryDetailClientProps) {
  const groupedProducts = products.reduce(
    (acc, product) => {
      const subCategoryName = product.subcategory || "Other Products";

      if (!acc[subCategoryName]) {
        acc[subCategoryName] = [];
      }
      acc[subCategoryName].push(product);
      return acc;
    },
    {} as Record<string, any[]>,
  );

  const subCategories = Object.keys(groupedProducts);

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#01CD61] transition-colors mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Products
        </Link>

        {/* Main Title & Description */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 text-balance"
          >
            {category.title}
          </motion.h1>

          {category.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="prose prose-slate prose-lg md:prose-xl max-w-none prose-p:leading-relaxed prose-li:list-disc prose-ul:list-outside prose-ul:ml-5 prose-li:marker:text-[#01CD61]"
            >
              <PortableText value={category.description} />
            </motion.div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {subCategories.length > 0 ? (
          subCategories.map((subCategoryTitle, index) => (
            <div key={index} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {subCategoryTitle}
                </h2>
                <div className="w-16 h-1 bg-[#01CD61] mt-3 rounded-full"></div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {groupedProducts[subCategoryTitle].map((product, pIndex) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (pIndex % 4) * 0.1 }}
                    className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-between group"
                  >
                    {/* Product Image Box (No links, purely display) */}
                    <div className="relative w-full aspect-[4/3] mb-4 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                      
                        <Image
                          src={urlFor(product.image).url()}
                          alt={product.title}
                          fill
                          className="object-contain p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>

                    {/* Product Title */}
                    <h3 className="text-sm md:text-base font-semibold text-slate-700 text-center text-balance w-full">
                      {product.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
