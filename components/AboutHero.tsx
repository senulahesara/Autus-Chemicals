"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-8 md:pt-0"
    >
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm mb-8 mt-4 md:mt-0"
        >
          <span>Who We Are</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.15] mb-8"
        >
          Customer Service is the <br className="hidden md:block" />
          <span className="text-[#01CD61]">Core DNA</span> of Autus.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl text-balance space-y-6"
        >
          <p>
            We pride in our Customers Service, this is the core DNA of Autus. Big or Small, be it for Export Industry or Domestic Manufacturing. we will go out of our way to give a cost effective solution to our diverse customers.
          </p>
          <p>
            We represent some of the leading manufacturers in their respective product ranges for Screen Printing and Textile Chemicals.
          </p>
          <p>
            We provide cost effective solutions to our customers by understanding their needs and providing solutions through our own in-house expertise and in close collaboration with our partner suppliers.
          </p>
          <p>
            We maintain sufficient stock to ensure a constant supply of goods. In additional we also maintain Custom Bonded Warehouse for Exporters to give them the advantage of Duty Free Pricing.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}