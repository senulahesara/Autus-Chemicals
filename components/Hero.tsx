"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Advanced Chemical Solutions for Modern Textiles.",
    subtitle:
      "Delivering premium, cost-effective, and sustainable chemical innovations for the global garment industry.",
    image: "/hero-1.jpg",
  },
  {
    id: 2,
    title: "Global Leaders in Screen Printing & Dyes.",
    subtitle:
      "Partnering with top-tier manufacturers to bring you world-class pigments, binders, and custom solutions.",
    image: "/hero-2.jpg",
  },
  {
    id: 3,
    title: "Driven by Uncompromising Customer Service.",
    subtitle:
      "Your success is our core DNA. We provide tailored solutions and expert support for every scale of production.",
    image: "/hero-3.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-background overflow-hidden min-h-[100svh] lg:min-h-0 pt-8 pb-20 lg:pt-28 lg:pb-32 flex items-center">
      <div className="absolute inset-0 z-0 lg:hidden flex items-center justify-center opacity-[0.08] pointer-events-none">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 30%, transparent 80%)",
            }}
          >
            <Image
              src={slides[currentSlide].image}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 border border-border text-sm font-semibold w-fit">
              <span>Premium B2B Chemical Partner</span>
            </div>

            <div className="relative w-full h-[220px] sm:h-[180px] lg:h-[200px] mt-8 mb-8">
              <AnimatePresence>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col gap-4"
                >
                  <h1 className="text-[2rem] lg:text-[2.5rem] font-bold tracking-tight text-foreground leading-[1.2] text-balance max-w-lg">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md">
                    {slides[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#01CD61] text-black font-medium rounded-xl hover:bg-[#01CD61]/90 transition-all duration-300 shadow-sm"
              >
                Explore Products <ChevronRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-medium rounded-xl border border-border hover:bg-slate-50 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-8 bg-[#01CD61]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex relative w-full aspect-[4/3] items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
                style={{
                  // The ultimate 4-sided gradient mask for a seamless edge fade
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  maskComposite: "intersect",
                }}
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover"
                  priority={currentSlide === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
