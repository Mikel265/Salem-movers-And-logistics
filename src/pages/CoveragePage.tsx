import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CoverageSection } from '../components/CoverageSection';
import { PrinciplesSection } from '../components/PrinciplesSection';
import { useNavigate } from 'react-router-dom';

export const CoveragePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <PageHeader
        category="Kenya Operational Reach"
        title="Service Routes &amp; Nationwide"
        accentWord="COVERAGE."
        subtitle="Based in Nakuru, Kenya, providing prompt intra-county removals and structured long-distance relocations to Nairobi, Mombasa, Kisumu, Eldoret, and surrounding counties."
      />

      <CoverageSection onCheckAvailability={() => navigate('/quote')} />

      <PrinciplesSection />
    </div>
  );
};
