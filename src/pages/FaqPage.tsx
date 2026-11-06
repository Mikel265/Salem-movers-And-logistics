import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FaqSection } from '../components/FaqSection';

export const FaqPage: React.FC = () => {
  return (
    <div className="w-full">
      <PageHeader
        category="Knowledge &amp; Support"
        title="Frequently Asked"
        accentWord="QUESTIONS."
        subtitle="Transparent answers regarding quotation pricing, vehicle logistics, packing materials, and fumigation safety protocols."
      />

      <FaqSection />
    </div>
  );
};
