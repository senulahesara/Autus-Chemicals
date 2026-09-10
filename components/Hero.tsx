"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "We represent leading manufacturers",
    subtitle: "in Screen Printing and Textile Chemicals",
    image: "/newhero1.avif",
  },
  {
    id: 2,
    title: "We provide cost effective solutions",
    subtitle: "by understanding our customers needs",
    image: "/newhero2.avif",
  },
  {
    id: 3,
    title: "Advanced Chemical Solutions for Modern Textiles",
    subtitle: "Delivering premium innovations for the global garment industry",
    image: "/newhero3.avif",
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
    // Section height changed to 80vh and min-height to ensure it doesn't break on very small screens
    <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden flex items-center bg-slate-950">
      
      {/* 1. Full Screen Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-black/20 sm:bg-transparent"></div>

      {/* 3. Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        {/* Adjusted top margin to center better in 80vh */}
        <div className="max-w-2xl mt-12 md:mt-16">
          
          {/* Badge: Font size reduced to text-xs / text-sm */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#A3D936] text-slate-900 text-xs md:text-sm font-semibold mb-6 shadow-sm">
            Printing Chemicals & Materials • Sri Lanka
          </div>

          {/* Animated Text Content: Min height and font sizes reduced */}
          <div className="relative w-full min-h-[120px] md:min-h-[140px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full"
              >
                {/* Title font size reduced */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-3 text-balance drop-shadow-lg">
                  {slides[currentSlide].title}
                </h1>
                {/* Subtitle font size reduced */}
                <p className="text-base md:text-xl text-slate-200 font-medium leading-relaxed drop-shadow-md">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Buttons: Padding, font size (text-sm), and icon size (16) reduced */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#009B60] text-white text-sm font-semibold rounded-lg hover:bg-[#009B60]/90 transition-all duration-300 shadow-lg"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-transparent text-white text-sm font-semibold rounded-lg border border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Sales
            </Link>
          </div>

          {/* Slider Indicators: Scaled down slightly to match */}
          <div className="flex items-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "w-6 bg-[#A3D936]" // Shorter active pill
                    : "w-1.5 bg-white/40 hover:bg-white/70" // Smaller inactive dot
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}