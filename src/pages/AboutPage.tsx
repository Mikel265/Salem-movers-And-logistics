import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { PrinciplesSection } from '../components/PrinciplesSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      <PageHeader
        category="Company Profile"
        title="About Salem Movers &amp;"
        accentWord="LOGISTICS."
        subtitle="Your trusted Nakuru-based moving and pest control specialist. Providing careful handling, practical coordination, and honest pricing across Kenya."
      />

      <AboutSection />

      <WhyChooseUs />

      <PrinciplesSection />
    </div>
  );
};
