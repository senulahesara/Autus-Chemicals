import React from "react";
import { client } from "@/sanity/client";
import EventDetailClient from "./EventDetailClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function SingleEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const query = `*[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    date,
    location,
    description,
    coverImage,
    gallery
  }`;

  const event = await client.fetch(query, { slug });

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
