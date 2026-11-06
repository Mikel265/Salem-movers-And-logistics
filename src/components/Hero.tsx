import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, Phone, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/business';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onExploreServices }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#080E1A]">
      {/* Background Photography with Official Brand Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/images/hero.jpg"
          alt="Professional Salem moving truck and relocation team handling furniture in Kenya"
          className="w-full h-full object-cover object-center scale-[1.02]"
          loading="eager"
        />
        {/* Brand Royal Navy Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E1A] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content Container utilizing wide screen space */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          {/* Brand Motto & Category Label styled as Reference Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 mb-6 bg-[#0F1E36]/90 border border-[#38BDF8]/40 rounded-full backdrop-blur-md shadow-sm shadow-black/30"
          >
            <span className="status-pulse-dot" />
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
              PROFESSIONAL MOVING &amp; FUMIGATION · NAKURU, KENYA
            </span>
          </motion.div>

          {/* Main Headline with Reference Serif & Italic Accent Hierarchy */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="text-hero-headline text-[#FFFFFF] font-serif uppercase tracking-tight mb-6 drop-shadow-md"
          >
            YOUR MOVE. <br />
            <span className="text-[#38BDF8] inline-block drop-shadow-sm font-serif italic">HANDLED.</span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.26 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed mb-8"
          >
            From house and office relocations to furniture transportation, storage, and
            fumigation, Salem Movers And Logistics helps make moving and property care simpler
            across Kenya. <span className="text-[#E09D4E] font-medium italic">Moving you with care.</span>
          </motion.p>

          {/* Action Buttons with Reference Micro-Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            {/* Primary Royal Blue CTA with Gold Accent */}
            <button
              onClick={onQuoteClick}
              className="group inline-flex items-center justify-center gap-3 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-bold text-sm sm:text-base px-8 py-4 uppercase tracking-wider rounded-xl transition-all duration-300 border border-[#38BDF8]/50 shadow-lg shadow-[#01388B]/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#01388B]/50 active:scale-[0.98]"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 text-[#E09D4E] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onExploreServices}
              className="group inline-flex items-center justify-center gap-2 bg-[#0F1E36]/85 hover:bg-[#162947] text-white border border-[#203A63] hover:border-[#38BDF8]/60 font-medium text-base px-7 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Explore Our Services</span>
              <ChevronDown className="w-4 h-4 text-[#38BDF8] group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>

            {/* Direct Phone Call Quick Link on Mobile */}
            <a
              href={businessConfig.phoneLink}
              className="inline-flex sm:hidden items-center justify-center gap-2 text-sm text-[#38BDF8] font-semibold py-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {businessConfig.phoneDisplay}</span>
            </a>
          </motion.div>

          {/* Trust Indicators in Styled Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.55 }}
            className="pt-6 border-t border-[#203A63]/80 grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0F1E36]/60 border border-[#203A63]/60 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span className="font-medium text-xs sm:text-sm">Residential &amp; Commercial Moves</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0F1E36]/60 border border-[#203A63]/60 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span className="font-medium text-xs sm:text-sm">Moving &amp; Fumigation Services</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0F1E36]/60 border border-[#203A63]/60 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span className="font-medium text-xs sm:text-sm">Based in Nakuru, Kenya</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
