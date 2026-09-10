"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User } from "lucide-react";

// Updated Sales Team (Saransingh Removed)
const salesTeam = [
  {
    id: 1,
    name: "Pathum Kumara",
    email: "pathumk@autus.lk",
    phone: "+94 77 473 5560",
  },
  {
    id: 2,
    name: "Pradeep Kodithuwakku",
    email: "pradeepk@autus.lk",
    phone: "+94 77 728 9797",
  },
  {
    id: 4, // Kept ID 4 as per your code
    name: "Isuru Madawa",
    email: "shop@autus.lk",
    phone: "+94 77 033 9788",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-slate-50 min-h-screen pt-24 pb-24 lg:pt-32">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 text-balance"
        >
          Get in <span className="text-[#01CD61]">Touch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-600 leading-relaxed text-balance max-w-2xl mx-auto"
        >
          We’re here to help you find the best chemical solutions for your industry. Reach out to our dedicated team today.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        
        {/* 1. Our Sales Team Section (Moved to Top) */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Sales Team
            </h2>
            <div className="w-16 h-1 bg-[#01CD61] mt-3 mx-auto md:mx-0 rounded-full"></div>
          </motion.div>

          {/* 3 Column Grid for 3 Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#01CD61] hover:shadow-[0_8px_30px_rgba(1,205,97,0.08)] transition-all duration-300 flex flex-col group"
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <User className="text-[#01CD61]" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6">{member.name}</h3>
                
                <div className="space-y-4 mt-auto">
                  <a 
                    href={`tel:${member.phone.replace(/\s+/g, '')}`} 
                    className="flex items-center gap-3 text-sm md:text-base text-slate-600 hover:text-[#01CD61] transition-colors duration-300"
                  >
                    <Phone size={18} className="shrink-0" />
                    <span className="font-medium tracking-wide">{member.phone}</span>
                  </a>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-3 text-sm md:text-base text-slate-600 hover:text-[#01CD61] transition-colors duration-300 truncate"
                  >
                    <Mail size={18} className="shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Locations Section (Moved to Bottom) */}
        <div className="pt-12 border-t border-slate-200">
          
          {/* 3 Column Grid for Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* 1. Head Office */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-slate-950 p-8 md:p-10 rounded-[2rem] overflow-hidden group shadow-lg flex flex-col"
            >
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[#01CD61] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Head Office</h3>
              <ul className="space-y-6 relative z-10 flex-grow">
                <li className="flex items-start gap-4 text-slate-300">
                  <MapPin className="text-[#01CD61] shrink-0 mt-1" size={20} />
                  <span className="leading-relaxed">
                    No.278, 4th Floor, Access Towers<br />
                    Union Place, Colombo 00200<br />
                    Sri Lanka
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* 2. Registered Warehouse */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:border-[#01CD61]/40 transition-colors duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Registered Warehouse</h3>
              <ul className="space-y-6 flex-grow">
                <li className="flex items-start gap-4 text-slate-600">
                  <MapPin className="text-[#01CD61] shrink-0 mt-1" size={20} />
                  <span className="leading-relaxed">
                    No.454/1, High Level Road,<br />
                    Makumbura, Kottawa,<br />
                    Sri Lanka
                  </span>
                </li>
                <li className="flex items-center gap-4 text-slate-600">
                  <Phone className="text-[#01CD61] shrink-0" size={20} />
                  <a href="tel:+94774735560" className="hover:text-[#01CD61] transition-colors duration-300">
                    +94 77 473 5560
                  </a>
                </li>
                <li className="flex items-center gap-4 text-slate-600">
                  <Mail className="text-[#01CD61] shrink-0" size={20} />
                  <a href="mailto:inquiry@autus.lk" className="hover:text-[#01CD61] transition-colors duration-300">
                    inquiry@autus.lk
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* 3. Retail Shop */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:border-[#01CD61]/40 transition-colors duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Retail Shop</h3>
              <ul className="space-y-6 flex-grow">
                <li className="flex items-start gap-4 text-slate-600">
                  <MapPin className="text-[#01CD61] shrink-0 mt-1" size={20} />
                  <span className="leading-relaxed">
                    No.98, Pamunuwa Road<br />
                    Maharagama<br />
                    Sri Lanka
                  </span>
                </li>
                <li className="flex items-center gap-4 text-slate-600">
                  <Phone className="text-[#01CD61] shrink-0" size={20} />
                  <a href="tel:+94770339788" className="hover:text-[#01CD61] transition-colors duration-300">
                    +94 77 033 9788
                  </a>
                </li>
                <li className="flex items-center gap-4 text-slate-600">
                  <Mail className="text-[#01CD61] shrink-0" size={20} />
                  <a href="mailto:shop@autus.lk" className="hover:text-[#01CD61] transition-colors duration-300">
                    shop@autus.lk
                  </a>
                </li>
              </ul>
            </motion.div>

          </div>
          
          {/* 3. Google Maps Integration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 bg-slate-200 relative"
          >
            {/* Note: Change the src link inside the iframe to your actual Google Maps Embed link */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5493.389061349168!2d79.9736305!3d6.8389565999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251007d6c82ff%3A0xdc4a00228285bd33!2sAutus%20chemicals%20Pvt%20Ltd!5e1!3m2!1sen!2ssg!4v1789056502383!5m2!1sen!2ssg"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          
          </motion.div>

        </div>

      </div>
    </main>
  );
}