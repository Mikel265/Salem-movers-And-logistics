import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { QuoteSection } from '../components/QuoteSection';
import { ServiceId } from '../types';

interface QuotePageProps {
  selectedService: ServiceId;
  onServiceChange: (serviceId: ServiceId) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  selectedService,
  onServiceChange,
}) => {
  return (
    <div className="w-full">
      <PageHeader
        category="Accurate Cost Estimates"
        title="Request a Free Moving or Fumigation"
        accentWord="QUOTATION."
        subtitle="Fill in your move or fumigation details below to generate an instant WhatsApp inquiry or receive a direct quotation from our dispatch desk in Nakuru."
        showQuoteCta={false}
      />

      <QuoteSection
        selectedService={selectedService}
        onServiceChange={onServiceChange}
      />
    </div>
  );
};
