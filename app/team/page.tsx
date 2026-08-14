import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/sanity/client";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image: any;
}

export default async function TeamSection() {
  const query = `*[_type == "team"] | order(_createdAt asc) {
    _id,
    name,
    position,
    image
  }`;

  const team: TeamMember[] = await client.fetch(query);

  return (
    <section className="w-full bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24 items-start">
          {/* Left Title */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Team with <br className="hidden lg:block" />
              <span className="text-[#01CD61]">Experience</span>
            </h1>
          </div>

          {/* Right Description */}
          <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            <p className="font-semibold text-slate-800">
              Our team is your team. When your mission is to be better, faster
              and smarter, you need the best people supporting you to achieve
              your mission forward.
            </p>
            <p>
              You need people who can support to ensure the quality, who are
              expert in the industry, and who can deliver cost effective
              solutions. You need Autus Chemicals. Get to know our team.
            </p>
          </div>
        </div>

        {/* Team Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member) => (
            <div
              key={member._id}
              className="group bg-white rounded-3xl p-5 md:p-6 border border-slate-200 hover:border-[#01CD61] transition-colors duration-300"
            >
              {/* Profile Image Container */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-slate-100">
                {member.image ? (
                  <Image
                    src={urlFor(member.image).url()}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* Text Details */}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#01CD61] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-slate-500 mt-1 font-medium">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
