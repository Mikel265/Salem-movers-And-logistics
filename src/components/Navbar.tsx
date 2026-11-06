import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { businessConfig } from '../config/business';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar background elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Fumigation', path: '/fumigation' },
    { label: 'Coverage', path: '/coverage' },
    { label: 'Checklist', path: '/checklist' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080E1A]/95 backdrop-blur-md border-b border-[#203A63] shadow-xl shadow-black/40'
          : 'bg-[#080E1A]/90 backdrop-blur-sm border-b border-[#162947]'
      }`}
    >
      {/* Maximum container width utilizes unused screen space (up to 1536px) */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-4 flex-nowrap">
          {/* 1. Official Logo with Bebas Neue Wordmark */}
          <Link
            to="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-xl p-1 -ml-1 transition-opacity hover:opacity-95"
            aria-label="Salem Movers And Logistics - Home"
          >
            <Logo size="md" />
          </Link>

          {/* 2. Desktop Multi-Page Navigation with Breathing Room & Active State */}
          <nav
            className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 flex-nowrap shrink-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-xs xl:text-sm font-medium tracking-wide whitespace-nowrap px-3 xl:px-3.5 py-2 rounded-xl transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'text-[#38BDF8] bg-[#0F1E36] border border-[#203A63] shadow-sm font-semibold'
                      : 'text-slate-200 hover:text-[#38BDF8] hover:bg-[#0F1E36]/60 border border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* 3. Right Action Controls: Direct Phone & Quote CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            {/* Quick Call Badge */}
            <a
              href={businessConfig.phoneLink}
              className="flex items-center gap-2.5 text-slate-200 hover:text-[#38BDF8] transition-colors duration-200 group shrink-0"
              title="Call Salem Movers"
            >
              <div className="w-9 h-9 rounded-full bg-[#0F1E36] border border-[#203A63] group-hover:border-[#38BDF8] group-hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              </div>
              <span className="font-semibold tracking-wide text-xs xl:text-sm whitespace-nowrap">
                {businessConfig.phoneDisplay}
              </span>
            </a>

            {/* Primary Get a Quote Action */}
            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-semibold text-xs xl:text-sm uppercase tracking-wider px-5 py-3 rounded-xl border border-[#38BDF8]/40 hover:border-[#38BDF8] active:scale-[0.98] transition-all duration-300 shadow-md shadow-[#01388B]/30 hover:-translate-y-0.5 shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#E09D4E] group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
            </Link>
          </div>

          {/* 4. Mobile & Tablet Controls (Phone + Hamburger) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={businessConfig.phoneLink}
              className="w-10 h-10 rounded-xl bg-[#0F1E36] border border-[#203A63] flex items-center justify-center text-[#38BDF8] active:scale-95 transition-transform shrink-0"
              aria-label={`Call ${businessConfig.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-[#0F1E36] border border-[#203A63] flex items-center justify-center text-[#F8FAFC] hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] active:scale-95 transition-transform shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Drawer Menu with Direct Page Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#080E1A] border-t border-[#203A63] p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 z-50">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between text-lg font-serif tracking-wide py-3 px-4 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'text-[#38BDF8] bg-[#0F1E36] border-[#38BDF8]/40 font-semibold'
                      : 'text-white hover:text-[#38BDF8] bg-transparent border-transparent hover:bg-[#0F1E36]/40'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 pb-8 border-t border-[#203A63] mt-6">
            {/* Quote Action */}
            <Link
              to="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#01388B] text-white font-bold text-sm py-3.5 uppercase tracking-wider rounded-xl hover:bg-[#1E6FD9] border border-[#38BDF8]/40 transition-all shadow-lg shadow-[#01388B]/40 active:scale-95"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 text-[#E09D4E]" />
            </Link>

            {/* WhatsApp Quick Action */}
            <a
              href={businessConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#0F1E36] border border-[#203A63] text-white hover:border-[#25D366] hover:text-[#25D366] font-medium text-sm py-3 rounded-xl transition-colors active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Direct Line */}
            <a
              href={businessConfig.phoneLink}
              className="w-full flex items-center justify-center gap-2 text-xs text-slate-300 text-center pt-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Direct line: {businessConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
