import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const tickerItems = [
    'HOUSE & RESIDENTIAL MOVING',
    'OFFICE & COMMERCIAL RELOCATION',
    'FURNITURE TRANSPORTATION',
    'PACKING & UNPACKING',
    'FUMIGATION & PEST CONTROL',
    'STORAGE SERVICES',
    'MOVING YOU WITH CARE',
    'BASED IN NAKURU, KENYA',
  ];

  return (
    <div className="marquee-strip" aria-label="Salem Movers service highlights ticker">
      <div className="marquee-track">
        <div className="marquee-content">
          {tickerItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <span className="dot">•</span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span>{item}</span>
              <span className="dot">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
