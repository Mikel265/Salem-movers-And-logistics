import React from 'react';
import { Hero } from '../components/Hero';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { BenefitsStrip } from '../components/BenefitsStrip';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { PrinciplesSection } from '../components/PrinciplesSection';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ServiceId } from '../types';

interface HomePageProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectService }) => {
  const navigate = useNavigate();

  const handleServiceSelect = (id: ServiceId) => {
    onSelectService(id);
    navigate('/quote');
  };

  return (
    <div className="w-full">
      {/* 1. Visually Powerful Hero */}
      <Hero
        onQuoteClick={() => navigate('/quote')}
        onExploreServices={() => navigate('/services')}
      />

      {/* 2. Continuous Service Highlights Marquee */}
      <MarqueeStrip />

      {/* 3. Official Brand Guarantees */}
      <BenefitsStrip />

      {/* 4. Core Services Showcase */}
      <ServicesSection onSelectService={handleServiceSelect} />

      {/* 5. Dedicated Fumigation Callout Banner (Eliminates Endless Scroll, Promotes Multi-Page Navigation) */}
      <section className="py-14 bg-gradient-to-r from-[#080E1A] via-[#0F1E36] to-[#080E1A] border-y border-[#203A63]/70">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0F1E36] to-[#162947] border border-[#203A63] p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080E1A] border border-[#203A63] text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#E09D4E]" />
                <span>Certified Fumigation &amp; Hygiene</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-semibold mb-3">
                Need Professional <span className="text-[#38BDF8] italic font-normal">Fumigation</span> or Pest Control?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We eliminate bedbugs, cockroaches, termites, and rodents using certified, odorless, and safe treatment standards for homes, apartments, and corporate facilities in Nakuru and beyond.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/fumigation"
                className="btn-interactive inline-flex items-center gap-2 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-md shadow-[#01388B]/30"
              >
                <span>View Fumigation Services</span>
                <ArrowRight className="w-4 h-4 text-[#E09D4E]" />
              </Link>
              <Link
                to="/quote"
                className="btn-interactive inline-flex items-center gap-2 bg-[#080E1A] hover:bg-[#162947] text-white font-medium text-sm px-5 py-3.5 rounded-xl border border-[#203A63] hover:border-[#38BDF8]/50"
              >
                <span>Book Treatment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us (Nakuru Base & Photography) */}
      <WhyChooseUs />

      {/* 7. Strategic Principles */}
      <PrinciplesSection />

      {/* 8. Bottom Fast-Action Call to Action Banner */}
      <section className="py-16 md:py-20 bg-[#080E1A] border-t border-[#203A63]/60">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] text-xs font-semibold uppercase tracking-widest text-[#E09D4E] mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Nakuru Head Office • Nationwide Reach</span>
            </div>
            <h2 className="text-section-heading font-serif text-white mb-5">
              Ready for a Seamless, Stress-Free <span className="text-[#38BDF8] italic font-normal">Relocation?</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
              Get an accurate, transparent moving or fumigation quotation tailored specifically to your route and inventory.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/quote"
                className="btn-interactive inline-flex items-center gap-2 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-semibold text-base px-8 py-4 rounded-xl border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-xl shadow-[#01388B]/40"
              >
                <span>Get Your Free Quotation</span>
                <ArrowRight className="w-5 h-5 text-[#E09D4E]" />
              </Link>
              <Link
                to="/coverage"
                className="btn-interactive inline-flex items-center gap-2 bg-[#0F1E36] hover:bg-[#162947] text-slate-200 hover:text-[#38BDF8] font-medium text-base px-7 py-4 rounded-xl border border-[#203A63] hover:border-[#38BDF8]/60"
              >
                <span>Explore Service Routes</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
