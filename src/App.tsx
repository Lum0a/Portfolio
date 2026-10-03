import React, { Suspense, lazy, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StudioSection } from './components/StudioSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ResumeSection } from './components/ResumeSection';
import { HorizontalPathSection } from './components/HorizontalPathSection';
import { SkillsSection } from './components/SkillsSection';
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

        <main className="flex-grow space-y-12 sm:space-y-16">
          <HeroSection />

          <div className="relative z-10 w-full bg-[#fbfbfd] shadow-[0_32px_90px_rgba(0,0,0,0.24)]">
            <CaseStudiesSection onOpenContact={() => setIsContactOpen(true)} />
            <StudioSection />
            <HorizontalPathSection />
            <SkillsSection />
            <ResumeSection />
          </div>

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
