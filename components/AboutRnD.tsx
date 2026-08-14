"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutRnD() {
  return (
    <section className="w-full bg-white py-8 md:py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full bg-slate-950 rounded-[2.5rem] overflow-hidden p-8 md:p-16 lg:p-20"
        >
          <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[45%] h-full z-0">
            <Image
              src="/rnd-image.jpg"
              alt="Research and Development"
              fill
              className="object-cover object-center opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/80 md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/40 md:to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Clean Title without Icons */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
              Research & <br className="hidden md:block" />
              <span className="text-[#01CD61]">Development</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed text-balance">
              <p>
                We recognize the importance of Research & Development in our
                quest to be a market leader. Hence our supplier partners are
                carefully chosen who have the same outlook on R&D as us and have
                capabilities to innovate and offer new products.
              </p>
              <p>
                This focus on R&D has resulted in our customers reaching out to
                us for collaborate in developing new products and applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
