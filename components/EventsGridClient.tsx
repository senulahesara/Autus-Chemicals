"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/client";

interface EventType {
  _id: string;
  title: string;
  slug: string;
  date: string;
  location: string;
  coverImage: any;
}

export default function EventsGridClient({ events }: { events: EventType[] }) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-[2rem] border border-slate-200">
        <p className="text-slate-500 text-lg">
          No events found at the moment. Check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {events.map((event, index) => (
        <motion.div
          key={event._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/events/${event.slug}`} className="block h-full group">
            <div className="h-full bg-white rounded-3xl p-4 border border-slate-200 hover:border-[#01CD61] hover:shadow-[0_8px_30px_rgba(1,205,97,0.08)] transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                {event.coverImage ? (
                  <Image
                    src={urlFor(event.coverImage).url()}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    No Cover Image
                  </div>
                )}

                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-sm flex items-center gap-2">
                  <Calendar size={14} className="text-[#01CD61]" />
                  <span className="text-xs font-semibold text-slate-800">
                    {formatDate(event.date)}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                {/* Location (If available) */}
                {event.location && (
                  <div className="flex items-center gap-1.5 text-slate-500 mb-3">
                    <MapPin size={14} className="shrink-0" />
                    <span className="text-xs font-medium uppercase tracking-wide truncate">
                      {event.location}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#01CD61] transition-colors duration-300 mb-6 line-clamp-2 text-balance">
                  {event.title}
                </h2>

                {/* Bottom Action */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-slate-700 group-hover:text-[#01CD61] transition-colors">
                  View Event Details
                  <ArrowRight
                    size={16}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
