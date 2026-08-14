"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Globe2,
  BadgeDollarSign,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: HeartHandshake,
    title: "The Core DNA",
    description:
      "We take immense pride in our Customer Service-it is the very foundation and core DNA of Autus.",
  },
  {
    id: 2,
    icon: Globe2,
    title: "Export & Domestic",
    description:
      "Big or small, whether it is for the Export Industry or Domestic Manufacturing, we cater to all scales of production.",
  },
  {
    id: 3,
    icon: BadgeDollarSign,
    title: "Cost-Effective Solutions",
    description:
      "We will go completely out of our way to provide a highly cost-effective solution tailored to our diverse customers.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function WhyAutus() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Why Choose Autus ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't just supply chemicals; we partner in your success. Discover
            what makes us the preferred choice for industry leaders.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className="relative group bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/80 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient Inside the Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#01CD61]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 transition-all duration-500">
                    <Icon
                      className="text-[#01CD61]"
                      size={28}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#01CD61] text-black font-semibold rounded-xl hover:bg-[#01CD61]/90 transition-all duration-300 shadow-sm"
          >
            Read more about us <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
