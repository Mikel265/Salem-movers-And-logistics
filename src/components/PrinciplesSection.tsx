import React from 'react';
import { motion } from 'motion/react';
import { servicePrinciples } from '../config/business';
import { Shield, Sparkles, MessageSquare } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Shield className="w-5 h-5 text-[#38BDF8]" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-[#38BDF8]" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Shield className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section className="py-24 bg-[#080E1A] border-t border-[#162947] relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
              STANDARDS &amp; CARE
            </span>
          </div>
          <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-4">
            BUILT AROUND <span className="text-[#38BDF8] inline-block font-serif italic">YOUR MOVE.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Successful relocations and property services rely on proactive communication, careful
            handling, and coordinated arrangements. These core principles guide every service we
            undertake.
          </p>
        </div>

        {/* 3 Service Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePrinciples.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="group bg-[#0F1E36] border border-[#203A63] p-8 rounded-2xl flex flex-col justify-between hover:border-[#38BDF8] hover:shadow-xl hover:shadow-[#01388B]/20 transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#162947] border border-[#203A63] flex items-center justify-center group-hover:scale-105 group-hover:border-[#38BDF8] transition-all">
                    {getIcon(index)}
                  </div>
                  <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase font-semibold px-2.5 py-0.5 rounded-full bg-[#162947] border border-[#203A63]">
                    Principle {principle.number}
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#E09D4E] mb-1.5">
                  {principle.tagline}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wide mb-4 font-medium group-hover:text-[#38BDF8] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#162947] flex items-center justify-between text-xs text-slate-400">
                <span>Salem Quality Standard</span>
                <span className="text-[#38BDF8] font-medium">Moving You With Care</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
