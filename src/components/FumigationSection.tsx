import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Bug, Home, Building2, Clock, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

interface FumigationSectionProps {
  onFumigationQuoteClick: () => void;
}

export const FumigationSection: React.FC<FumigationSectionProps> = ({
  onFumigationQuoteClick,
}) => {
  const pestsTreated = [
    { name: 'Bedbugs & Fleas', desc: 'Targeted heat & chemical treatments for mattresses, bed frames, and upholstery.' },
    { name: 'Cockroaches & Ants', desc: 'Gel baits and residual barrier spraying for kitchens, cabinets, and pantries.' },
    { name: 'Termite Management', desc: 'Preventative and curative perimeter treatments protecting wooden fixtures.' },
    { name: 'Rodents & Mice', desc: 'Tamper-resistant bait stations and entry-point inspection for lasting control.' },
    { name: 'Flies & Mosquitoes', desc: 'Space spraying and larvicide treatments for compounds and perimeter gardens.' },
    { name: 'General Disinfection', desc: 'Sanitization and surface hygiene treatments for homes and commercial spaces.' },
  ];

  const useCases = [
    {
      icon: Home,
      title: 'Pre-Move House Fumigation',
      desc: 'Treat your new home or apartment before bringing in furniture. Ensures your family moves into a clean, pest-free environment.',
    },
    {
      icon: Building2,
      title: 'Commercial & Office Treatments',
      desc: 'Scheduled during evenings or weekends to prevent disruption to employees, clients, or retail operations.',
    },
    {
      icon: Clock,
      title: 'Periodic Property Maintenance',
      desc: 'Routine treatments for residential estates, rental units, guest houses, and storage units across Kenya.',
    },
  ];

  const fumigationWhatsAppUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Salem Movers And Logistics. I need an enquiry for Fumigation & Pest Control services. Please advise on pricing and scheduling.'
  )}`;

  return (
    <section id="fumigation" className="py-24 bg-[#0B1320] border-t border-[#162947] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#01388B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
              PROPERTY CARE &amp; HYGIENE
            </span>
          </div>

          <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-4">
            PROFESSIONAL FUMIGATION <br />
            <span className="text-[#38BDF8] inline-block font-serif italic">&amp; PEST CONTROL.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Protect your home, office, and stored property. Salem Movers And Logistics provides safe,
            systematic pest eradication services in Nakuru and across Kenya using professional-grade
            equipment and proven application protocols.
          </p>
        </div>

        {/* Visual Split Layout: Image on Left + Capabilities on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Authentic Fumigation Photography */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-[#203A63] bg-[#0F1E36] p-2 rounded-2xl shadow-2xl overflow-hidden hover:border-[#38BDF8] transition-colors duration-300">
              <img
                src="/images/fumigation.jpg"
                alt="Professional Salem pest control specialist in protective gear applying fumigation treatment"
                className="w-full h-[420px] object-cover object-top rounded-xl"
                loading="lazy"
              />

              {/* Verified Safety Badge Overlay */}
              <div className="absolute -bottom-5 -right-5 bg-[#080E1A] border border-[#38BDF8] p-4 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    Safety-First Protocol
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Targeted treatments with clear re-entry safety guidance for families and pets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Treatment Scenarios */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wide font-medium">
                When Should You Book Fumigation?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you are moving into a newly leased property, tackling an active pest infestation,
                or maintaining commercial hygiene standards, our team tailors the fumigation method
                specifically to your premises.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {useCases.map((uc) => {
                const Icon = uc.icon;
                return (
                  <div
                    key={uc.title}
                    className="bg-[#0F1E36] border border-[#203A63] p-5 rounded-2xl flex flex-col justify-between hover:border-[#38BDF8] hover:shadow-lg hover:shadow-[#01388B]/20 transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#162947] border border-[#203A63] flex items-center justify-center mb-3 text-[#38BDF8] group-hover:scale-105 group-hover:border-[#38BDF8] transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                        {uc.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {uc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onFumigationQuoteClick}
                className="group inline-flex items-center justify-center gap-2 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-[#38BDF8]/40 transition-all shadow-lg shadow-[#01388B]/30 hover:shadow-xl hover:shadow-[#01388B]/40 active:scale-95"
              >
                <span>Request Fumigation Quote</span>
                <ArrowRight className="w-4 h-4 text-[#E09D4E] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <a
                href={fumigationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0F1E36] hover:bg-[#162947] text-white border border-[#203A63] hover:border-[#25D366] text-xs font-semibold px-6 py-3.5 rounded-xl transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat with Pest Specialist</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Pests Treated Grid */}
        <div className="bg-[#0F1E36] border border-[#203A63] p-8 sm:p-10 rounded-2xl shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#162947] gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-1">
                <Bug className="w-4 h-4" />
                <span>Comprehensive Coverage</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wide font-medium">
                Pests We Treat Across Kenya
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Safe, modern methods tailored for homes, apartments, offices, and institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pestsTreated.map((pest) => (
              <div key={pest.name} className="flex items-start gap-3 p-3 rounded-xl bg-[#162947]/40 border border-[#203A63]/60 hover:border-[#38BDF8]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {pest.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Notice Box */}
          <div className="mt-8 pt-6 border-t border-[#162947] bg-[#162947]/60 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E09D4E] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-200 leading-relaxed">
                <strong className="text-white">Safety First:</strong> We provide full pre-treatment and post-treatment guidelines.
                Typical residential properties require a standard vacation period of 2 to 4 hours to ensure complete safety for occupants and pets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
