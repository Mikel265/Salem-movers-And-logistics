import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone } from 'lucide-react';
import { businessConfig, defaultWhatsAppMessage } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: 'General Enquiry & Quote',
      message: defaultWhatsAppMessage,
    },
    {
      title: 'House & Residential Moving',
      message:
        'Hello Salem Movers And Logistics. I am interested in House & Residential Moving. Please assist me with a quotation.',
    },
    {
      title: 'Fumigation & Pest Control',
      message:
        'Hello Salem Movers And Logistics. I am interested in Fumigation & Pest Control services. Please assist me with a quotation.',
    },
  ];

  const handleLaunch = (msg: string) => {
    const url = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#0F1E36] border border-[#203A63] shadow-2xl p-4.5 rounded-2xl text-[#FFFFFF] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#162947] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Salem Movers Live WhatsApp
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-[#162947] transition-colors"
              aria-label="Close WhatsApp options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3">
            Choose an option to chat directly with our team on WhatsApp:
          </p>

          <div className="space-y-2 mb-3">
            {quickMessages.map((item) => (
              <button
                key={item.title}
                onClick={() => handleLaunch(item.message)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#162947] hover:bg-[#1a3359] border border-[#203A63] hover:border-[#38BDF8]/60 text-left transition-all duration-200 group active:scale-98"
              >
                <span className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#38BDF8] transition-colors">
                  {item.title}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>

          <div className="pt-2.5 border-t border-[#162947] flex items-center justify-between text-[11px] text-slate-300">
            <span>Or call us directly:</span>
            <a
              href={businessConfig.phoneLink}
              className="font-bold text-[#38BDF8] hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#E09D4E]" />
              <span>{businessConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button with Reference Micro-Interaction */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#080E1A] px-4 py-3.5 rounded-full shadow-2xl shadow-black/50 hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contact Salem Movers on WhatsApp"
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-6 h-6 fill-current text-[#080E1A] group-hover:rotate-6 transition-transform duration-300" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-[#080E1A]">
          Chat with Us
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E09D4E] border-2 border-[#080E1A]" />
      </button>
    </aside>
  );
};
