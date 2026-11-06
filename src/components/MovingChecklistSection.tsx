import React, { useState } from 'react';
import { ClipboardCheck, CheckSquare, Square, ArrowRight } from 'lucide-react';

interface ChecklistItem {
  id: number;
  timeframe: string;
  title: string;
  detail: string;
}

export const MovingChecklistSection: React.FC<{ onBookMoveClick: () => void }> = ({
  onBookMoveClick,
}) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({ 1: true });

  const checklist: ChecklistItem[] = [
    {
      id: 1,
      timeframe: '5–7 Days Before Move',
      title: 'Sort & Declutter Belongings',
      detail:
        'Walk through each room, wardrobe, and store. Separate items to keep from those to donate or dispose of, reducing unnecessary vehicle capacity and moving costs.',
    },
    {
      id: 2,
      timeframe: '3–4 Days Before Move',
      title: 'Pack Personal Essentials & Important Documents',
      detail:
        'Keep national IDs, title deeds, academic certificates, laptops, jewelry, daily medications, and phone chargers in a designated personal travel bag you carry personally.',
    },
    {
      id: 3,
      timeframe: '24 Hours Before Move',
      title: 'Defrost Fridge & Disconnect Washing Machine',
      detail:
        'Empty and defrost refrigerators and deep freezers completely to prevent water leakage during transit. Turn off gas cylinders and secure all hose connections.',
    },
    {
      id: 4,
      timeframe: 'Pre-Move Hygiene',
      title: 'Arrange Pre-Move Fumigation for the New House',
      detail:
        'If the destination premises was recently vacant, arrange fumigation 24 to 48 hours before move day so the property is clean, pest-free, and safe upon arrival.',
    },
    {
      id: 5,
      timeframe: 'Move Day Eve',
      title: 'Confirm Estate Gate Passes & Access Permissions',
      detail:
        'Notify caretakers and estate security at both origin and destination about moving truck access, parking space, and elevator usage hours to avoid delays.',
    },
    {
      id: 6,
      timeframe: 'Move Morning',
      title: 'Final Walk-Through with Salem Movers Team',
      detail:
        'Point out any exceptionally delicate glassware, mirrors, or high-value furniture so our crew applies additional protective padding and strategic strapping in the truck.',
    },
  ];

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section className="py-24 bg-[#0B1320] border-t border-[#162947] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Progress */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-[#0F1E36] border border-[#203A63] shadow-sm">
                <ClipboardCheck className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs md:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase font-sans">
                  MOVING DAY PREPARATION
                </span>
              </div>

              <h2 className="text-section-heading text-[#FFFFFF] font-serif uppercase tracking-tight mb-4">
                THE SMART MOVE <br />
                <span className="text-[#38BDF8] inline-block font-serif italic">CHECKLIST.</span>
              </h2>

              <p className="text-base text-slate-300 font-normal leading-relaxed mb-6">
                A seamless relocation starts with structured preparation. Use this practical 6-point checklist
                to keep your move organized, prevent last-minute rush, and safeguard your belongings.
              </p>

              {/* Progress Bar Widget */}
              <div className="bg-[#0F1E36] border border-[#203A63] p-5 rounded-2xl mb-8 shadow-md">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="text-white">Your Preparation Progress</span>
                  <span className="text-[#38BDF8]">
                    {completedCount} of {checklist.length} Completed
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#162947] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#01388B] to-[#38BDF8] rounded-full transition-all duration-300"
                    style={{ width: `${(completedCount / checklist.length) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Click on each step as you complete it to track your moving readiness.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookMoveClick}
                className="group inline-flex items-center justify-center gap-2 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-[#38BDF8]/40 transition-all shadow-lg shadow-[#01388B]/30 hover:shadow-xl hover:shadow-[#01388B]/40 active:scale-95"
              >
                <span>Book Your Move with Us</span>
                <ArrowRight className="w-4 h-4 text-[#E09D4E] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Checklist Cards */}
          <div className="lg:col-span-7 space-y-3">
            {checklist.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`cursor-pointer p-5 sm:p-6 rounded-xl border transition-all select-none duration-200 ${
                    isChecked
                      ? 'bg-[#0F1E36] border-[#38BDF8]/70 shadow-md'
                      : 'bg-[#0F1E36]/60 border-[#203A63] hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      aria-label={`Toggle ${item.title}`}
                      className="mt-0.5 shrink-0 text-[#38BDF8] focus-visible:outline-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#38BDF8]" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500 hover:text-slate-300" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h4
                          className={`text-sm sm:text-base font-semibold transition-colors ${
                            isChecked ? 'text-white' : 'text-slate-200'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#162947] border border-[#203A63] text-[#E09D4E]">
                          {item.timeframe}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
