import React from 'react';
import { benefitsStripData } from '../config/business';
import { ArrowUpRight } from 'lucide-react';

export const BenefitsStrip: React.FC = () => {
  return (
    <section className="bg-[#01388B] text-white py-8 sm:py-10 border-y border-[#1E6FD9] relative z-20 shadow-lg shadow-black/30">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {benefitsStripData.map((item, index) => (
            <div
              key={item.title}
              className={`group flex flex-col justify-center transition-all duration-300 ${
                index > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif text-xl sm:text-2xl lg:text-2xl tracking-wide uppercase font-medium text-white drop-shadow-sm group-hover:text-[#38BDF8] transition-colors duration-200">
                  {item.title}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-blue-100 tracking-wide font-sans">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
