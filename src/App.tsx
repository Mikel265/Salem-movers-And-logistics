import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FumigationPage } from './pages/FumigationPage';
import { CoveragePage } from './pages/CoveragePage';
import { ChecklistPage } from './pages/ChecklistPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { QuotePage } from './pages/QuotePage';
import { ServiceId } from './types';

export function App() {
  const [selectedService, setSelectedService] = useState<ServiceId>('residential-moving');

  return (
    <>
      {/* Scroll restoration to top on page navigation */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#080E1A] text-[#F8FAFC] font-sans selection:bg-[#01388B] selection:text-white flex flex-col justify-between overflow-x-hidden">
        {/* Sticky Desktop & Mobile Navigation Bar */}
        <Navbar />

        {/* Multi-Page Routes: Eliminates Endless Scrolling */}
        <main id="main-content" className="flex-grow w-full">
          <Routes>
            <Route
              path="/"
              element={<HomePage onSelectService={(id) => setSelectedService(id)} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onSelectService={(id) => setSelectedService(id)} />}
            />
            <Route
              path="/fumigation"
              element={<FumigationPage onSelectService={(id) => setSelectedService(id)} />}
            />
            <Route path="/coverage" element={<CoveragePage />} />
            <Route
              path="/checklist"
              element={<ChecklistPage onSelectService={(id) => setSelectedService(id)} />}
            />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/quote"
              element={
                <QuotePage
                  selectedService={selectedService}
                  onServiceChange={(id) => setSelectedService(id)}
                />
              }
            />
            {/* Alias /contact directly to /quote */}
            <Route path="/contact" element={<Navigate to="/quote" replace />} />
            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer with Multi-Page Links */}
        <Footer onSelectService={(id) => setSelectedService(id)} />

        {/* Persistent WhatsApp Conversion Widget */}
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
