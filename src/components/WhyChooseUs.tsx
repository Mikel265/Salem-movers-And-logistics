import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, PhoneCall } from 'lucide-react';
import { businessConfig } from '../config/business';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Clear communication",
      desc: "Direct answers and regular updates from our team before and during your move.",
    },
    {
      title: "Careful handling",
      desc: "Attentive packing, strapping, and loading to protect furniture and property. Moving you with care.",
    },
    {
      title: "Practical service coordination",
      desc: "Structured scheduling designed around your timeline and logistics needs.",
    },
    {
      title: "Convenient quotation requests",
      desc: "Fast quotation handoff via WhatsApp and phone call with honest terms.",
    },
  ];

  return (
    <section className="py-24 bg-[#080E1A] border-t border-[#162947] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography, Copy, and Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
                WHY SALEM MOVERS
              </span>
            </div>

            <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-6">
              LESS STRESS. <br />
              MORE CONTROL. <br />
              <span className="text-[#38BDF8] inline-block font-serif italic">A BETTER MOVE.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-4">
              Moving requires more than transportation. It involves planning, coordination,
              communication, and attention to the belongings or property being handled.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8">
              Salem Movers And Logistics helps customers organize house moves, office
              relocations, furniture transportation, packing, storage, and fumigation services
              through a straightforward enquiry and coordination process.
            </p>

            {/* Checklist in styled cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#162947]">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0F1E36] border border-[#203A63] hover:border-[#38BDF8] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {b.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High Quality Photography */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-[#203A63] p-2 bg-[#0F1E36] rounded-2xl shadow-2xl overflow-hidden hover:border-[#38BDF8] transition-colors duration-300">
              <img
                src="/images/why-choose.jpg"
                alt="Professional Salem moving team carefully wrapping and protecting furniture in Kenya"
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />

              {/* Verified Location Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#0F1E36] border border-[#38BDF8] p-4 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    Based in Nakuru
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Coordinating moves locally and across all counties in Kenya.
                </p>
              </div>

              {/* Call Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#01388B] text-white border border-[#38BDF8]/40 px-4 py-2 rounded-xl items-center gap-2 font-bold text-xs shadow-lg uppercase tracking-wide">
                <PhoneCall className="w-3.5 h-3.5 text-[#E09D4E]" />
                <span>{businessConfig.phoneDisplay}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
