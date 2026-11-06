import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FumigationSection } from '../components/FumigationSection';
import { useNavigate } from 'react-router-dom';
import { ServiceId } from '../types';

interface FumigationPageProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const FumigationPage: React.FC<FumigationPageProps> = ({ onSelectService }) => {
  const navigate = useNavigate();

  const handleFumigationQuote = () => {
    onSelectService('fumigation-pest-control');
    navigate('/quote');
  };

  return (
    <div className="w-full">
      <PageHeader
        category="Hygiene &amp; Extermination"
        title="Professional Fumigation &amp; Pest"
        accentWord="CONTROL."
        subtitle="Certified extermination procedures for bedbugs, cockroaches, termites, and rodents. Safe, odorless chemicals and licensed technicians serving Nakuru and Kenyan households."
      />

      <FumigationSection onFumigationQuoteClick={handleFumigationQuote} />
    </div>
  );
};
