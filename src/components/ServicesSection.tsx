import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Building2,
  Truck,
  Package,
  ShieldCheck,
  Warehouse,
  ArrowRight,
  MessageCircle,
  Check,
} from 'lucide-react';
import { servicesData } from '../config/business';
import { ServiceId } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'House':
        return <Home className="w-6 h-6 text-[#38BDF8]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#38BDF8]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#38BDF8]" />;
      case 'Package':
        return <Package className="w-6 h-6 text-[#38BDF8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#38BDF8]" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-[#38BDF8]" />;
      default:
        return <Truck className="w-6 h-6 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080E1A] relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-4">
            MOVING MADE <span className="text-[#38BDF8] inline-block font-serif italic">SIMPLE.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Practical moving, transportation, and fumigation solutions for homes, businesses, and
            individual customers.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const encodedWhatsApp = encodeURIComponent(service.whatsappPrefill);
            const serviceWhatsAppUrl = `https://wa.me/254728856225?text=${encodedWhatsApp}`;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between bg-[#0F1E36] border border-[#203A63] p-7 sm:p-8 service-card-hover rounded-2xl shadow-md hover:border-[#38BDF8] hover:shadow-xl hover:shadow-[#01388B]/25 transition-all duration-300"
              >
                <div>
                  {/* Service Top Bar: Icon & Category Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#162947] border border-[#203A63] group-hover:border-[#38BDF8] group-hover:bg-[#01388B] flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-[#38BDF8] tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#162947] border border-[#203A63]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Heading */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] group-hover:text-[#38BDF8] transition-colors uppercase tracking-wide mb-3 font-medium">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-[#162947]">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2 text-xs text-slate-200"
                      >
                        <Check className="w-3.5 h-3.5 text-[#38BDF8] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions: Quote Form Pre-selection & Instant WhatsApp */}
                <div className="pt-4 border-t border-[#162947] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] group-hover:text-[#E09D4E] transition-colors py-1 text-left group/btn"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </button>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-[#25D366] px-3 py-1.5 rounded-lg bg-[#162947]/60 hover:bg-[#162947] border border-[#203A63] hover:border-[#25D366]/60 transition-all active:scale-95"
                    title={`Enquire about ${service.title} via WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
