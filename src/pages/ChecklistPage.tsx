import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MovingChecklistSection } from '../components/MovingChecklistSection';
import { HowItWorks } from '../components/HowItWorks';
import { useNavigate } from 'react-router-dom';
import { ServiceId } from '../types';

interface ChecklistPageProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ChecklistPage: React.FC<ChecklistPageProps> = ({ onSelectService }) => {
  const navigate = useNavigate();

  const handleBookMove = () => {
    onSelectService('residential-moving');
    navigate('/quote');
  };

  return (
    <div className="w-full">
      <PageHeader
        category="Preparation &amp; Planning"
        title="Moving Day Preparation"
        accentWord="CHECKLIST."
        subtitle="Stay organized before, during, and after your move. Use this interactive timeline to tick off key tasks and ensure a smooth relocation."
      />

      <MovingChecklistSection onBookMoveClick={handleBookMove} />

      <HowItWorks />
    </div>
  );
};
