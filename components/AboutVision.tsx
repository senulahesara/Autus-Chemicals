"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function AboutVision() {
  return (
    <section className="relative w-full bg-slate-50 py-8 md:py-8 flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full bg-white/70 backdrop-blur-2xl border border-white/60 p-8 md:p-12 lg:p-20 rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.03)] text-center overflow-hidden flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#01CD61] rounded-full blur-[100px] opacity-[0.08] pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-3 mb-8 relative z-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
              <Target className="text-[#01CD61]" size={24} strokeWidth={2} />
            </div>
            <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400">
              Our Vision
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 leading-[1.4] md:leading-[1.5] text-balance max-w-4xl mx-auto"
          >
            To attain Market Leadership in the Supply of Industrial Chemicals
            with a Customer First approach, Stewardship in Sustainability and
            Environment, working with supplier partners strong in R&D and new
            Developments while looking after the interest of all our
            Stakeholders.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
