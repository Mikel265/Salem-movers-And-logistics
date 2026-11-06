import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/business';

interface PageHeaderProps {
  category: string;
  title: string;
  accentWord?: string;
  subtitle: string;
  showQuoteCta?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  accentWord,
  subtitle,
  showQuoteCta = true,
}) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080E1A] via-[#0F1E36]/90 to-[#080E1A] border-b border-[#203A63]/80 overflow-hidden">
      {/* Subtle radial ambient light */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#01388B]/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl">
          {/* Reference Style Category Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] text-xs font-semibold uppercase tracking-widest text-[#38BDF8] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span>{category}</span>
          </div>

          {/* Page Heading in Playfair Display with Italic Accent */}
          <h1 className="text-section-heading text-[#FFFFFF] font-serif mb-5 leading-tight">
            {title}{' '}
            {accentWord && (
              <span className="text-[#38BDF8] italic font-normal">
                {accentWord}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mb-8">
            {subtitle}
          </p>

          {/* Quick CTA Actions */}
          {showQuoteCta && (
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="btn-interactive inline-flex items-center gap-2 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-lg shadow-[#01388B]/30"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#E09D4E]" />
              </Link>

              <a
                href={businessConfig.phoneLink}
                className="btn-interactive inline-flex items-center gap-2 bg-[#0F1E36] hover:bg-[#162947] text-[#FFFFFF] hover:text-[#38BDF8] font-medium text-sm px-5 py-3.5 rounded-xl border border-[#203A63] hover:border-[#38BDF8]/50 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>Call {businessConfig.phoneDisplay}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
