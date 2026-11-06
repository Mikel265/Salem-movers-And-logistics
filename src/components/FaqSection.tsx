import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

interface FAQItem {
  question: string;
  answer: string;
  category: 'moving' | 'fumigation' | 'general';
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'moving' | 'fumigation'>('all');

  const faqs: FAQItem[] = [
    {
      category: 'moving',
      question: 'How are moving quotations calculated?',
      answer:
        'Moving costs depend on four practical factors: the volume and size of items to be moved, the truck capacity required, the travel distance (within Nakuru or inter-county across Kenya), floor levels at pickup and destination (e.g. ground floor vs 4th floor without lift), and whether you need packing materials or unpacking assistance. We provide transparent upfront quotes with no hidden surprises.',
    },
    {
      category: 'moving',
      question: 'Can I get an estimate without a physical home visit?',
      answer:
        'Yes! The fastest and most convenient method is to share photos or a brief video walk-through of your house and bulky furniture via our WhatsApp line (+254 728 856225). Our coordination team reviews the footage and provides an accurate quotation within 15–30 minutes.',
    },
    {
      category: 'moving',
      question: 'Do you provide packing boxes and protective blankets?',
      answer:
        'Yes. If you choose our Packing & Unpacking service, we supply heavy-duty corrugated moving boxes, stretch wrapping film, bubble wrap for fragile glassware and electronics, and padded moving blankets to protect polished wood and fabric furniture during transit.',
    },
    {
      category: 'moving',
      question: 'How far in advance should I book my move?',
      answer:
        'We recommend booking 2 to 5 days in advance, particularly for peak month-end periods (from the 25th of the month to the 5th) and weekends when demand is highest. However, short-notice or next-day moves can also be accommodated depending on our fleet schedule.',
    },
    {
      category: 'fumigation',
      question: 'How long must we vacate our house during and after fumigation?',
      answer:
        'For standard residential pest control (such as bedbug eradication, cockroaches, or fleas), we advise occupants and domestic pets to vacate the premises for 2 to 4 hours while treatments take effect. Upon re-entering, open windows for 20 to 30 minutes to facilitate fresh air circulation.',
    },
    {
      category: 'fumigation',
      question: 'Is fumigation recommended before moving into a newly rented house?',
      answer:
        'Yes, pre-move fumigation is highly recommended. Treating the house or apartment while it is completely empty ensures pest-control solutions reach deep into crevices, baseboards, closets, and cupboards without contaminating furniture or foodstuffs, ensuring you start afresh in a hygienic home.',
    },
    {
      category: 'moving',
      question: 'Do you operate relocations outside Nakuru?',
      answer:
        'Yes. While our primary coordination base is Nakuru, we operate nationwide point-to-point services across Kenya. Common routes include Nakuru ⇄ Nairobi, Nakuru ⇄ Eldoret, Nakuru ⇄ Kisumu, Naivasha, Kericho, and Mombasa corridors.',
    },
    {
      category: 'general',
      question: 'Can office and commercial relocations be carried out on weekends?',
      answer:
        'Yes. We regularly coordinate commercial and office relocations on Friday evenings, Saturdays, and Sundays so that your workstations, servers, files, and equipment are installed and ready for normal business operations on Monday morning.',
    },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#080E1A] border-t border-[#162947] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-4">
            CLEAR ANSWERS. <br />
            <span className="text-[#38BDF8] inline-block font-serif italic">BEFORE YOU MOVE.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Have questions about quotations, packing materials, fumigation re-entry, or inter-county
            routes? Here are straightforward answers to our most common customer enquiries.
          </p>

          {/* Category Filter Pills (Reference Filter-Btn Pattern) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => { setSelectedCategory('all'); setOpenIndex(0); }}
              className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 active:scale-95 ${
                selectedCategory === 'all'
                  ? 'bg-[#01388B] text-white border-[#38BDF8] shadow-md shadow-[#01388B]/40'
                  : 'bg-[#0F1E36] text-slate-300 border-[#203A63] hover:border-[#38BDF8]/60'
              }`}
            >
              All Questions ({faqs.length})
            </button>
            <button
              onClick={() => { setSelectedCategory('moving'); setOpenIndex(0); }}
              className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 active:scale-95 ${
                selectedCategory === 'moving'
                  ? 'bg-[#01388B] text-white border-[#38BDF8] shadow-md shadow-[#01388B]/40'
                  : 'bg-[#0F1E36] text-slate-300 border-[#203A63] hover:border-[#38BDF8]/60'
              }`}
            >
              Moving &amp; Relocation
            </button>
            <button
              onClick={() => { setSelectedCategory('fumigation'); setOpenIndex(0); }}
              className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 active:scale-95 ${
                selectedCategory === 'fumigation'
                  ? 'bg-[#01388B] text-white border-[#38BDF8] shadow-md shadow-[#01388B]/40'
                  : 'bg-[#0F1E36] text-slate-300 border-[#203A63] hover:border-[#38BDF8]/60'
              }`}
            >
              Fumigation Care
            </button>
          </div>
        </div>

        {/* Accordion List in Reference Card Style */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#0F1E36] border border-[#203A63] hover:border-[#38BDF8]/60 rounded-2xl transition-all duration-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-white uppercase tracking-wide pr-4 font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#162947] border border-[#203A63] flex items-center justify-center shrink-0 text-[#38BDF8] transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-[#01388B] text-white border-[#38BDF8]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 font-normal leading-relaxed border-t border-[#162947]/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt Banner */}
        <div className="bg-[#162947]/60 border border-[#203A63] p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-md">
          <div>
            <h4 className="font-serif text-2xl text-white uppercase tracking-wide mb-1 font-medium">
              Have a Specific Question About Your Move?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our team in Nakuru for instant clarification and advice.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={businessConfig.phoneLink}
              className="inline-flex items-center gap-2 bg-[#0F1E36] hover:bg-[#1f3760] text-white border border-[#203A63] px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Call Team</span>
            </a>

            <a
              href={businessConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#01388B] hover:bg-[#1E6FD9] text-white border border-[#38BDF8]/40 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-[#01388B]/30 hover:shadow-lg hover:shadow-[#01388B]/40 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
