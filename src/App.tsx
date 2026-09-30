import React, { Suspense, lazy, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StudioSection } from './components/StudioSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ResumeSection } from './components/ResumeSection';
import { HorizontalPathSection } from './components/HorizontalPathSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
const SceneBackground = lazy(() => import('./components/SceneBackground').then(({ SceneBackground: component }) => ({
  default: component,
})));

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#9d9ea1] font-sans text-[#111111] selection:bg-[#FF5C00] selection:text-white">
      <Suspense fallback={<div aria-hidden="true" className="fixed inset-0 z-0 scene-gradient" />}>
        <SceneBackground />
      </Suspense>
      {/* Main Website Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        {/* Main Content Sections: 6 Distinct Blocks */}
        <main className="flex-grow space-y-12 sm:space-y-16">
          {/* 1. Block: Start */}
          <HeroSection />

          {/* 2. Block: Mein Studio (Philosophie & Schwerpunkte) */}
          <StudioSection />

          <div className="relative z-10 w-full bg-[#fbfbfd] shadow-[0_32px_90px_rgba(0,0,0,0.24)]">
            {/* 3. Block: Arbeiten, Lebenslauf und Designpfad */}
            <CaseStudiesSection onOpenContact={() => setIsContactOpen(true)} />
            <ResumeSection onOpenContact={() => setIsContactOpen(true)} />
            <HorizontalPathSection />
          </div>

          {/* 6. Block: Anfrageblock (Call to Action & Kontaktaufnahme) */}
          <CtaSection onOpenContact={() => setIsContactOpen(true)} />
        </main>

        {/* Footer */}
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </div>

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
