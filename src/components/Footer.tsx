import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { businessConfig, servicesData } from '../config/business';
import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { ServiceId } from '../types';

interface FooterProps {
  onSelectService?: (serviceId: ServiceId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  return (
    <footer id="contact" className="bg-[#080E1A] border-t border-[#162947] text-slate-300">
      {/* Container utilizing wider screen space */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-xl">
                <Logo size="lg" />
              </Link>
              <p className="text-sm text-slate-300 max-w-md font-normal leading-relaxed mb-6">
                Moving, transportation, relocation, storage, and fumigation services for
                customers across Kenya. Moving You With Care.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] bg-[#0F1E36] border border-[#203A63] px-3.5 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E09D4E]" />
                <span>Based in Nakuru, Kenya · Serving Nationwide</span>
              </div>
            </div>

            {/* Telephone & WhatsApp Callout */}
            <div className="pt-8 mt-8 border-t border-[#162947] flex flex-wrap gap-4">
              <a
                href={businessConfig.phoneLink}
                className="btn-interactive inline-flex items-center gap-2 text-xs font-bold text-[#FFFFFF] hover:text-[#38BDF8] bg-[#0F1E36] border border-[#203A63] hover:border-[#38BDF8] px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{businessConfig.phoneDisplay}</span>
              </a>

              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive inline-flex items-center gap-2 text-xs font-bold text-[#FFFFFF] hover:text-[#25D366] bg-[#0F1E36] border border-[#203A63] hover:border-[#25D366] px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Services Column (Col 6-8) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-xl text-[#FFFFFF] uppercase tracking-wider mb-5 font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    onClick={() => onSelectService && onSelectService(service.id)}
                    className="text-sm text-slate-300 hover:text-[#38BDF8] transition-colors flex items-center gap-2 text-left group py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#203A63] group-hover:bg-[#38BDF8] transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Pages Column (Col 9-12) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl text-[#FFFFFF] uppercase tracking-wider mb-5 font-medium">
              Company &amp; Pages
            </h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-300 hover:text-[#38BDF8] transition-colors block py-0.5"
                >
                  About Salem Movers
                </Link>
              </li>
              <li>
                <Link
                  to="/fumigation"
                  className="text-sm text-slate-300 hover:text-[#38BDF8] transition-colors block py-0.5"
                >
                  Fumigation &amp; Pest Control
                </Link>
              </li>
              <li>
                <Link
                  to="/coverage"
                  className="text-sm text-slate-300 hover:text-[#38BDF8] transition-colors block py-0.5"
                >
                  Service Coverage &amp; Routes
                </Link>
              </li>
              <li>
                <Link
                  to="/checklist"
                  className="text-sm text-slate-300 hover:text-[#38BDF8] transition-colors block py-0.5"
                >
                  Moving Day Checklist
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-sm text-slate-300 hover:text-[#38BDF8] transition-colors block py-0.5"
                >
                  Customer FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-sm text-[#38BDF8] hover:underline inline-flex items-center gap-1 font-semibold pt-1"
                >
                  <span>Request a Free Quotation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>

            <div className="p-5 bg-[#0B1320] border border-[#162947] rounded-2xl shadow-sm">
              <div className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider mb-1">
                Direct Line &amp; Bookings
              </div>
              <a
                href={businessConfig.phoneLink}
                className="text-sm font-bold text-[#38BDF8] hover:underline block"
              >
                {businessConfig.phoneDisplay}
              </a>
              <div className="text-[11px] text-slate-400 mt-1">
                Mon – Sat: 7:00 AM – 6:00 PM · Emergency moves on request.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Info */}
        <div className="mt-16 pt-8 border-t border-[#162947] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>&copy; 2026 Salem Movers And Logistics. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Nakuru, Kenya</span>
            <span>·</span>
            <span>Nationwide Relocations</span>
            <span>·</span>
            <span>Fumigation Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
