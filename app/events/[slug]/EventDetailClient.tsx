"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/client";

export default function EventDetailClient({ event }: { event: any }) {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const closeLightbox = () => setPhotoIndex(null);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (event.gallery && photoIndex !== null) {
      setPhotoIndex((photoIndex + 1) % event.gallery.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (event.gallery && photoIndex !== null) {
      setPhotoIndex(
        (photoIndex - 1 + event.gallery.length) % event.gallery.length,
      );
    }
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-24 pb-24 lg:pt-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#01CD61] transition-colors mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Events
        </Link>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 text-balance leading-tight">
          {event.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 md:gap-8 border-y border-slate-200 py-6">
          <div className="flex items-center gap-2 text-slate-600">
            <Calendar className="text-[#01CD61]" size={20} />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          {event.location && (
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="text-[#01CD61]" size={20} />
              <span className="font-medium">{event.location}</span>
            </div>
          )}
        </div>
      </div>

      {event.description && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 prose prose-slate prose-lg lg:prose-xl prose-a:text-[#01CD61] hover:prose-a:text-[#01CD61]/80">
          <PortableText value={event.description} />
        </div>
      )}

      {event.gallery && event.gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Event Gallery</h3>
            <div className="w-12 h-1 bg-[#01CD61] mt-3 rounded-full"></div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
            {event.gallery.map((image: any, index: number) => (
              <motion.div
                key={image._key || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                className="break-inside-avoid relative group cursor-zoom-in"
                onClick={() => setPhotoIndex(index)}
              >
                <img
                  src={urlFor(image).url()}
                  alt={image.alt || `Event gallery image ${index + 1}`}
                  className="w-full h-auto rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:opacity-90"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-[#01CD61]/0 group-hover:bg-[#01CD61]/10 transition-colors duration-300 rounded-2xl pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {photoIndex !== null && event.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 md:left-8 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh] px-16 flex items-center justify-center">
              <motion.img
                key={photoIndex}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                src={urlFor(event.gallery[photoIndex]).url()}
                alt="Fullscreen gallery view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 md:right-8 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-medium tracking-wide">
              {photoIndex + 1} / {event.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
