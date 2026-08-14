import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="w-full bg-white py-8 lg:py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative w-full bg-slate-950 rounded-[2.5rem] overflow-hidden p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[#01CD61] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-[#01CD61] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
              Ready to Elevate Your Production Quality ?
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Partner with Autus for premium, cost-effective chemical solutions.
              Our dedicated team is ready to assist you at every scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="tel:+94114322942"
                className="flex items-center gap-4 text-slate-300 hover:text-[#01CD61] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#01CD61]/30 transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <span className="font-medium tracking-wide">
                  +94 11 432 2942
                </span>
              </a>

              <a
                href="mailto:inquiry@autus.lk"
                className="flex items-center gap-4 text-slate-300 hover:text-[#01CD61] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#01CD61]/30 transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <span className="font-medium tracking-wide">
                  inquiry@autus.lk
                </span>
              </a>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="relative z-10 flex-shrink-0 mt-8 lg:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#01CD61] text-black font-semibold rounded-xl hover:bg-[#01CD61]/90 transition-all duration-300 shadow-[0_0_20px_rgba(1,205,97,0.2)]"
            >
              Contact Our Team <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
