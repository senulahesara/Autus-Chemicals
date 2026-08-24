"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

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
    id: 3,
    name: "Saransingh",
    email: "sinniahs@autus.lk",
    phone: "+94 77 219 3281",
  },
  {
    id: 4,
    name: "Isuru Madawa",
    email: "shop@autus.lk",
    phone: "+94 77 033 9788",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-slate-50 min-h-screen pt-16 pb-24 lg:pt-16">
      
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative bg-slate-950 p-8 md:p-10 rounded-[2rem] overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[#01CD61] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Head Office</h3>
            <ul className="space-y-5 relative z-10">
              <li className="flex items-start gap-4 text-slate-300">
                <MapPin className="text-[#01CD61] shrink-0 mt-1" size={20} />
                <span className="leading-relaxed">
                  No.278, 4th Floor, Access Towers<br />
                  Union Place, Colombo 00200<br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-4 text-slate-300">
                <Phone className="text-[#01CD61] shrink-0" size={20} />
                <a href="tel:+94114322942" className="hover:text-[#01CD61] transition-colors duration-300">
                  +94 11 432 2942
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-300">
                <Mail className="text-[#01CD61] shrink-0" size={20} />
                <a href="mailto:inquiry@autus.lk" className="hover:text-[#01CD61] transition-colors duration-300">
                  inquiry@autus.lk
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:border-[#01CD61]/40 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Retail Shop</h3>
            <ul className="space-y-5">
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
                <div className="flex flex-col gap-1">
                  <a href="tel:+94114332189" className="hover:text-[#01CD61] transition-colors duration-300">
                    +94 11 433 2189
                  </a>
                  <a href="tel:+94770339788" className="hover:text-[#01CD61] transition-colors duration-300">
                    +94 77 033 9788
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:border-[#01CD61]/40 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Working Hours</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-slate-600">
                <Clock className="text-[#01CD61] shrink-0 mt-1" size={20} />
                <div className="space-y-2">
                  <div className="flex justify-between w-full min-w-[200px]">
                    <span className="font-medium">Mon - Fri:</span>
                    <span>8 AM - 5 PM</span>
                  </div>
                  <div className="flex justify-between w-full min-w-[200px]">
                    <span className="font-medium">Saturday:</span>
                    <span>8 AM - 1.30 PM</span>
                  </div>
                  <div className="flex justify-between w-full min-w-[200px]">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-slate-400">Closed</span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>

        <div className="pt-8 border-t border-slate-200">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {salesTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#01CD61] hover:shadow-[0_8px_30px_rgba(1,205,97,0.08)] transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <User className="text-[#01CD61]" size={20} />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-4">{member.name}</h3>
                
                <div className="space-y-3 mt-auto">
                  <a 
                    href={`tel:${member.phone.replace(/\s+/g, '')}`} 
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#01CD61] transition-colors duration-300"
                  >
                    <Phone size={16} className="shrink-0" />
                    <span className="font-medium tracking-wide">{member.phone}</span>
                  </a>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#01CD61] transition-colors duration-300 truncate"
                  >
                    <Mail size={16} className="shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}