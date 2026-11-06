import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { HowItWorks } from '../components/HowItWorks';
import { MovingChecklistSection } from '../components/MovingChecklistSection';
import { useNavigate } from 'react-router-dom';
import { ServiceId } from '../types';

interface ServicesPageProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  const navigate = useNavigate();

  const handleSelectService = (id: ServiceId) => {
    onSelectService(id);
    navigate('/quote');
  };

  return (
    <div className="w-full">
      {/* Editorial Header */}
      <PageHeader
        category="Relocation Catalog"
        title="Comprehensive Moving &amp; Logistics"
        accentWord="SOLUTIONS."
        subtitle="Professional residential, commercial, and inter-county moving services managed by experienced handling teams based in Nakuru, serving clients across Kenya."
      />

      {/* 6 Core Relocation Services */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* The 01-04 Moving Process */}
      <HowItWorks />

      {/* Interactive Preparation Checklist */}
      <MovingChecklistSection onBookMoveClick={() => handleSelectService('residential-moving')} />
    </div>
  );
};
