import React, { useState } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StudioSection } from './components/StudioSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ResumeSection } from './components/ResumeSection';
import { HorizontalPathSection } from './components/HorizontalPathSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { SceneControls } from './components/SceneControls';
import { SceneMode } from './types';

export default function App() {
  const [sceneMode, setSceneMode] = useState<SceneMode>('scroll');
  const [wireframe, setWireframe] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(1);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#fbfbfd] text-[#111111] selection:bg-[#FF5C00] selection:text-white overflow-x-hidden font-sans">
      {/* Subtle Concentric Architecture Telemetry Geometry on White Surface */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-25 z-0 overflow-hidden">
        <div className="w-[1100px] h-[1100px] border border-black/[0.04] rounded-full animate-spin-slow"></div>
        <div className="absolute w-[800px] h-[800px] border border-black/[0.05] rounded-full"></div>
        <div className="absolute w-[550px] h-[550px] border border-black/[0.06] rounded-full"></div>
        <div className="absolute w-[350px] h-[350px] border border-dashed border-black/[0.08] rounded-full opacity-60"></div>
      </div>

      {/* 3D WebGL Three.js Interactive Background Canvas (Right Ring, Area Light & Focus Blur Mask) */}
      <ThreeCanvas
        sceneMode={sceneMode}
        wireframe={wireframe}
        glowIntensity={glowIntensity}
      />

      {/* Main Website Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          onOpenContact={() => setIsContactOpen(true)}
          sceneMode={sceneMode}
          setSceneMode={setSceneMode}
        />

        {/* Main Content Sections: 6 Distinct Blocks */}
        <main className="flex-grow space-y-12 sm:space-y-16">
          {/* 1. Block: Start (Hero mit Name, Fokus & Telemetrie) */}
          <HeroSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 2. Block: Mein Studio (Philosophie & Schwerpunkte) */}
          <StudioSection />

          {/* 3. Block: Meine Arbeiten (Industrie- & Produktdesign statt Personen) */}
          <CaseStudiesSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 4. Block: Lebenslauf (Werdegang, Ausbildung, Toolstack & Awards) */}
          <ResumeSection onOpenContact={() => setIsContactOpen(true)} />

          {/* 5. Block: Horizontaler Pfad (Vorgehensweise von Recherche bis Serienreife) */}
          <HorizontalPathSection />

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

      {/* Floating 3D Scene Controls HUD */}
      <SceneControls
        sceneMode={sceneMode}
        setSceneMode={setSceneMode}
        wireframe={wireframe}
        setWireframe={setWireframe}
        glowIntensity={glowIntensity}
        setGlowIntensity={setGlowIntensity}
      />
    </div>
  );
}
