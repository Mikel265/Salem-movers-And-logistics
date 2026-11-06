import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'footer' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 md:w-14 md:h-14',
    lg: 'w-16 h-16 md:w-20 md:h-20',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Company Logo Badge */}
      <div className="relative shrink-0 flex items-center justify-center transition-all duration-200 group-hover:scale-105">
        <img
          src="/logo.png"
          alt="Salem Movers And Logistics logo"
          className={`${sizeMap[size]} object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]`}
          loading="eager"
        />
      </div>

      {/* Brand Typography & Motto from Logo */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center shrink-0">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-[#FFFFFF] drop-shadow-sm">
              SALEM
            </span>
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-[#38BDF8]">
              MOVERS
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5 leading-none">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#E09D4E] font-bold">
              &amp; LOGISTICS
            </span>
            <span className="hidden xl:inline-block w-1 h-1 rounded-full bg-white/40" />
            <span className="hidden xl:inline-block text-[9px] uppercase tracking-widest text-slate-300 font-medium italic">
              Moving You With Care
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
