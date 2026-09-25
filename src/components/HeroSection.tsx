import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Move } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Top Main Heading Block & Side Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        <div className="lg:col-span-8 space-y-8">
          {/* Subtle Telemetry Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-black/10 text-[10px] uppercase tracking-[0.25em] text-[#666666] backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse shadow-[0_0_8px_rgba(255,92,0,0.6)]"></span>
            <span>Verfügbar für ausgewählte Mandate 2026</span>
          </div>

          {/* Hero Title */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] font-display"
          >
            Bastian Franke. <br />
            <span className="text-[#777777]">Produktdesigner.</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('work-section')}
              id="hero-btn-portfolio"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-widest hover:bg-[#FF5C00] transition-all duration-300 shadow-md cursor-pointer active:scale-95"
            >
              <span>Portfolio ansehen</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection('studio-section')}
              id="hero-btn-learnmore"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/80 border border-black/15 text-[#111111] font-medium text-xs uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer shadow-xs"
            >
              <Compass className="w-3.5 h-3.5 text-[#666666] group-hover:text-white transition-colors" />
              <span>Mehr erfahren</span>
            </button>
          </div>

          {/* 3D Interaction & Focus Hint */}
          <div className="inline-flex items-center gap-2.5 text-[11px] text-[#666666] bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 shadow-xs">
            <Move className="w-3.5 h-3.5 text-black animate-bounce" />
            <span>Hovern Sie über den 3D-Ring für Schärfefokus & Lichteffekte</span>
          </div>
        </div>

        {/* Precision Telemetry Column */}
        <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center space-y-6 pt-6">
          <div className="bg-white/85 border border-black/10 rounded-2xl p-5 w-64 space-y-4 shadow-sm backdrop-blur-md">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-[#888888] font-mono">3D Artefakt</div>
              <div className="text-xs font-mono text-[#111111] font-semibold">TORUS-RING-V26</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-[#888888] font-mono">Materialität</div>
              <div className="text-xs text-[#444444]">Titanium & Clearcoat Gloss</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-[#888888] font-mono">Optik-Fokus</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full animate-pulse shadow-[0_0_6px_rgba(255,92,0,0.8)]"></span>
                <span className="text-xs font-mono text-[#FF5C00] font-semibold">Dynamischer Fokuspunkt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row with Scroll Cue and Philosophy Statement */}
      <div className="pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-black/10">
        {/* Scroll Cue */}
        <div className="md:col-span-4 flex items-center gap-3">
          <button
            onClick={() => scrollToSection('studio-section')}
            className="group flex items-center gap-3 text-xs uppercase tracking-widest text-[#666666] hover:text-black transition-colors cursor-pointer"
            id="scroll-cue-btn"
          >
            <span className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:border-black group-hover:text-black transition-all duration-300 shadow-xs">
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </span>
            <span className="font-semibold tracking-wider text-[11px]">Entdecken</span>
          </button>
        </div>

        {/* Philosophy Statement */}
        <div className="md:col-span-8 flex justify-start md:justify-end">
          <p
            id="hero-philosophy-quote"
            className="text-sm sm:text-base text-[#555555] max-w-xl leading-relaxed text-left md:text-right font-light"
          >
            „Design ist kein Dekor, sondern die präzise Übersetzung komplexer Technologien in intuitive, inspirierende Erlebnisse.“
          </p>
        </div>
      </div>
    </section>
  );
};
