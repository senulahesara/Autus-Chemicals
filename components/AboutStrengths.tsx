"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Lightbulb,
  BadgeDollarSign,
  Globe2,
  ShieldCheck,
  Microscope,
} from "lucide-react";

const strengths = [
  {
    id: 1,
    title: "Customer First",
    description:
      "We deliver a responsive customer service, with a 'Customer First' attitude.",
    icon: HeartHandshake,
  },
  {
    id: 2,
    title: "Solution Oriented",
    description:
      "We strive to understand the customers’ requirements, prioritizing in providing solutions to problems - everything else comes later.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Cost-Effective",
    description:
      "We focus on cost effective solutions that cater to customer specific needs.",
    icon: BadgeDollarSign,
  },
  {
    id: 4,
    title: "Global Network",
    description:
      "We represent some of the leading suppliers of Chemicals, Dyes and Auxiliaries from Far East and the Asian Region.",
    icon: Globe2,
  },
  {
    id: 5,
    title: "Quality Assurance",
    description:
      "We ensure the quality of products by doing in-house testing and usage before introduction to the market.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Driven by R&D",
    description:
      "We work with suppliers who are willing and able to possess capabilities in R&D and Innovation to cater to ever changing demands of the market.",
    icon: Microscope,
  },
];

const getBentoSpan = (index: number) => {
  const spans = [
    "md:col-span-2",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-1",
  ];
  return spans[index % spans.length];
};

export default function AboutStrengths() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Our Strengths
          </h2>
        </motion.div>

        {/* Bento Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={strength.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-[#01CD61] transition-colors duration-300 ${getBentoSpan(index)}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6">
                  <Icon
                    className="text-[#01CD61]"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {strength.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-2xl">
                  {strength.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
