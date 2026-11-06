import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Phone, Navigation } from 'lucide-react';
import { businessConfig } from '../config/business';

interface CoverageSectionProps {
  onCheckAvailability: () => void;
}

export const CoverageSection: React.FC<CoverageSectionProps> = ({ onCheckAvailability }) => {
  const routes = [
    'Nakuru Town & Suburbs',
    'Nakuru ⇄ Nairobi Corridor',
    'Nakuru ⇄ Eldoret & Western Kenya',
    'Nakuru ⇄ Naivasha & Central Rift',
    'Nakuru ⇄ Kisumu & Lake Region',
    'Nakuru ⇄ Mombasa & Coast Region',
    'Inter-County & Nationwide Moves',
  ];

  return (
    <section id="coverage" className="py-24 bg-[#0B1320] border-t border-[#162947] relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#162947_1px,transparent_1px),linear-gradient(to_bottom,#162947_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
          <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
            OUR COVERAGE
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-6"
        >
          BASED IN NAKURU. <br />
          <span className="text-[#38BDF8] inline-block font-serif italic">SERVING KENYA.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          Salem Movers And Logistics is based in Nakuru, Kenya, and serves customers across
          Kenya. Contact our team to discuss your location, service requirements, and
          availability.
        </motion.p>

        {/* Coverage Badges styled as Reference Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-3xl mx-auto"
        >
          {routes.map((route) => (
            <div
              key={route}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1E36] border border-[#203A63] rounded-full text-xs font-medium text-slate-200 hover:border-[#38BDF8] hover:text-white transition-all duration-200 shadow-sm hover:scale-105"
            >
              <Navigation className="w-3 h-3 text-[#38BDF8]" />
              <span>{route}</span>
            </div>
          ))}
        </motion.div>

        {/* High-Contrast Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={onCheckAvailability}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-bold text-sm sm:text-base px-8 py-4 uppercase tracking-wider rounded-xl active:scale-[0.98] transition-all duration-300 border border-[#38BDF8]/40 shadow-lg shadow-[#01388B]/40 hover:shadow-xl hover:shadow-[#01388B]/50 hover:-translate-y-0.5"
          >
            <span>Check Service Availability</span>
            <ArrowRight className="w-4 h-4 text-[#E09D4E] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* Secondary CTA */}
          <a
            href={businessConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F1E36] hover:bg-[#162947] text-white border border-[#203A63] hover:border-[#25D366] font-medium text-sm sm:text-base px-7 py-4 rounded-xl transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Talk to Us on WhatsApp</span>
          </a>

          {/* Direct Telephone CTA */}
          <a
            href={businessConfig.phoneLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-[#38BDF8] px-4 py-3 rounded-xl transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Call: {businessConfig.phoneDisplay}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
