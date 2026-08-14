"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight, ChevronRight } from "lucide-react";

interface Category {
  name: string;
  slug: string;
}

export default function HeaderClient({ categories }: { categories: Category[] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic Bento Grid Span Logic
  // පළවෙනි එකටයි, 7 වෙනි එකටයි col-span-2 දීලා අනිත් ඒවට col-span-1 දෙනවා
  const getBentoSpan = (index: number) => {
    return index === 0 || index === 6 ? "col-span-2" : "col-span-1";
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="Autus Chemicals"
                  width={140}
                  height={45}
                  className="w-auto h-10 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-[#01CD61] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-[#01CD61] transition-colors"
              >
                About us
              </Link>

              {/* Mega Menu (Products) */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-[#01CD61] transition-colors py-8">
                  Products
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="w-[700px] bg-white border border-border rounded-2xl shadow-xl p-6 relative">
                    {/* Little pointer triangle at the top */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-border rotate-45"></div>

                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                        Textile Printing Solutions
                      </h4>
                      {/* Bento Grid Layout for Categories */}
                      <div className="grid grid-cols-3 gap-3">
                        {categories.map((category, index) => (
                          <Link
                            key={index}
                            href={`/products/${category.slug}`}
                            className={`block p-4 rounded-xl border border-transparent bg-slate-50 hover:bg-white hover:border-[#01CD61]/30 hover:shadow-sm transition-all duration-300 group/item ${getBentoSpan(index)}`}
                          >
                            <span className="text-sm font-semibold text-foreground group-hover/item:text-[#01CD61] transition-colors block">
                              {category.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/events"
                className="text-sm font-medium text-foreground hover:text-[#01CD61] transition-colors"
              >
                Events
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium text-foreground hover:text-[#01CD61] transition-colors"
              >
                Our Team
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#01CD61] text-black font-medium rounded-xl hover:bg-[#01CD61]/90 transition-all duration-300 shadow-sm"
              >
                Inquiry <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }} // Starts right below the header
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-foreground"
            >
              About us
            </Link>

            {/* Mobile Products Menu */}
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-semibold text-foreground">
                Products
              </span>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/products/${category.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-[#01CD61]"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-foreground"
            >
              Events
            </Link>
            <Link
              href="/team"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-foreground"
            >
              Our Team
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 px-8 py-4 bg-[#01CD61] text-black font-medium rounded-xl shadow-sm"
            >
              Inquiry <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}