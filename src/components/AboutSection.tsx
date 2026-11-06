import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { businessConfig } from '../config/business';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#080E1A] border-t border-[#162947] relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
                ABOUT US
              </span>
            </div>

            <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-6">
              YOUR MOVING PARTNER <br />
              <span className="text-[#38BDF8] inline-block font-serif italic">IN KENYA.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-4">
              Salem Movers And Logistics is a Nakuru-based business offering moving, transportation,
              relocation, storage, and fumigation services to customers across Kenya.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8">
              Whether you are planning a residential move, coordinating an office relocation,
              transporting furniture, or arranging fumigation, contact our team to discuss your
              requirements.
            </p>

            {/* Quick Contact & Dispatch Info */}
            <div className="pt-6 border-t border-[#162947] flex flex-wrap gap-3 items-center">
              <a
                href={businessConfig.phoneLink}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1E36] border border-[#203A63] text-sm font-semibold text-[#38BDF8] hover:border-[#38BDF8] hover:text-[#1E6FD9] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessConfig.phoneDisplay}</span>
              </a>

              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1E36] border border-[#203A63] text-sm font-medium text-slate-200 hover:border-[#25D366] hover:text-[#25D366] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Available</span>
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1E36] border border-[#203A63] text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-[#E09D4E]" />
                <span>Nakuru, Kenya</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-[#0F1E36] border border-[#203A63] p-6 rounded-2xl flex flex-col justify-between hover:border-[#38BDF8] hover:shadow-xl hover:shadow-[#01388B]/20 transition-all duration-300 hover:-translate-y-1.5 shadow-sm">
              <Truck className="w-8 h-8 text-[#38BDF8] mb-4" />
              <div>
                <h4 className="font-serif text-2xl text-[#FFFFFF] uppercase tracking-wide mb-1 font-medium">
                  Relocations
                </h4>
                <p className="text-xs text-slate-300">
                  Residential homes, apartments, and corporate offices.
                </p>
              </div>
            </div>

            <div className="bg-[#0F1E36] border border-[#203A63] p-6 rounded-2xl flex flex-col justify-between hover:border-[#38BDF8] hover:shadow-xl hover:shadow-[#01388B]/20 transition-all duration-300 hover:-translate-y-1.5 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#38BDF8] mb-4" />
              <div>
                <h4 className="font-serif text-2xl text-[#FFFFFF] uppercase tracking-wide mb-1 font-medium">
                  Fumigation
                </h4>
                <p className="text-xs text-slate-300">
                  Pest control and hygiene services for properties.
                </p>
              </div>
            </div>

            <div className="bg-[#0F1E36] border border-[#203A63] p-6 rounded-2xl flex flex-col justify-between sm:col-span-2 hover:border-[#38BDF8] hover:shadow-xl hover:shadow-[#01388B]/20 transition-all duration-300 hover:-translate-y-1.5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E09D4E]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#E09D4E]">
                  Service Reach
                </span>
              </div>
              <h4 className="font-serif text-2xl text-[#FFFFFF] uppercase tracking-wide mb-1 font-medium">
                Nakuru to Anywhere in Kenya
              </h4>
              <p className="text-xs text-slate-300">
                Coordinated point-to-point moving and deliveries arranged to suit your timing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
