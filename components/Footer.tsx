import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-950 text-slate-300 overflow-hidden pt-20 pb-10 border-t border-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Autus Chemicals"
                width={160}
                height={50}
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm mb-8">
              Delivering premium, cost-effective, and sustainable chemical
              innovations for the global textile and screen printing industry.
              Partnering in your success.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#01CD61] shrink-0 mt-0.5" />
                <a
                  href="tel:+94114322942"
                  className="hover:text-[#01CD61] transition-colors"
                >
                  +94 11 432 2942
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#01CD61] shrink-0 mt-0.5" />
                <a
                  href="mailto:inquiry@autus.lk"
                  className="hover:text-[#01CD61] transition-colors"
                >
                  inquiry@autus.lk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#01CD61] shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  No.278, 4th Floor, Access Towers Union Place, Colombo, Sri
                  Lanka
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (Spans 2 cols) */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Products Column (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
              Top Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/products/rubber-white-clear"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Rubber White & Clear
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pigment-emulsion"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Pigment Emulsion
                </Link>
              </li>
              <li>
                <Link
                  href="/products/binder"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Binder
                </Link>
              </li>
              <li>
                <Link
                  href="/products/silicone-base"
                  className="inline-flex items-center gap-2 hover:text-[#01CD61] transition-colors group"
                >
                  <ChevronRight
                    size={14}
                    className="text-slate-700 group-hover:text-[#01CD61] transition-colors"
                  />{" "}
                  Silicone Base
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-[#01CD61] hover:text-white transition-colors mt-2 font-medium"
                >
                  View all products <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Autus Chemicals. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight } from "lucide-react";
