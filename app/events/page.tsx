import React from "react";
import { client } from "@/sanity/client";
import EventsGridClient from "@/components/EventsGridClient";

export const revalidate = 60;

export default async function EventsPage() {
  const query = `*[_type == "event"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    location,
    coverImage
  }`;
  
  const events = await client.fetch(query);

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-24 pb-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Corporate <span className="text-[#01CD61]">Events</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed text-balance">
            Stay updated with our latest workshops, industry exhibitions, and corporate milestones. Join us in shaping a sustainable future.
          </p>
        </div>
        <EventsGridClient events={events} />
      </div>
    </main>
  );
}