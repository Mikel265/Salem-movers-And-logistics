import React from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../config/business';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#080E1A] border-t border-[#162947] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
              THE PROCESS
            </span>
          </div>
          <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-4">
            FROM PLAN <span className="text-[#38BDF8] inline-block font-serif italic">TO DELIVERY.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            A straightforward process to help you organize your move or service request.
          </p>
        </div>

        {/* 4 Steps Grid styled as Reference Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="group relative z-10 flex flex-col bg-[#0F1E36] border border-[#203A63] hover:border-[#38BDF8] p-7 rounded-2xl shadow-md hover:shadow-xl hover:shadow-[#01388B]/20 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Step indicator with oversized blue number matching reference */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-5xl lg:text-6xl font-bold text-[#38BDF8]/25 group-hover:text-[#38BDF8] transition-colors duration-300 select-none leading-none">
                  {step.number}
                </span>
                <div className="w-5 h-5 rounded-full bg-[#162947] border border-[#38BDF8] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                </div>
              </div>

              {/* Step Title in Reference Serif */}
              <h3 className="font-serif text-xl sm:text-2xl text-white uppercase tracking-wide mb-3 font-medium group-hover:text-[#38BDF8] transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
