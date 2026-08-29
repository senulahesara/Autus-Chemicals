import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/sanity/client";
import { getPartnersQuery } from "@/sanity/queries";

interface Partner {
  _id: string;
  name: string;
  image: any;
}

export default async function Partners() {
  const partners: Partner[] = await client.fetch(getPartnersQuery);

  if (!partners || partners.length === 0) return null;

  const duplicatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <section className="w-full bg-background flex items-center justify-center -mt-12 lg:mt-0 relative z-20">
      <div className="relative w-full max-w-7xl mx-auto h-24 md:h-32 flex items-center overflow-hidden px-6 lg:px-8">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-[260px] md:w-[360px] bg-gradient-to-r from-background from-50% to-transparent pointer-events-none"></div>

        <div className="absolute left-6 lg:left-8 top-0 bottom-0 z-20 flex items-center pointer-events-none">
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-black">
            Our Partners
          </h3>
        </div>

        <div className="absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

        <div className="flex pointer-events-none overflow-hidden w-full">
          <div
            className="flex items-center gap-12 md:gap-24 animate-marquee"
            style={{ width: "max-content" }}
          >
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); } 
              }
              .animate-marquee {
                animation: marquee 80s linear infinite;
              }
            `}</style>

            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner._id}-${index}`}
                className="relative h-10 md:h-12 w-28 md:w-36 flex-shrink-0"
              >
                <Image
                  src={urlFor(partner.image).url()}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
