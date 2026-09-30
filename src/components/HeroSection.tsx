import React from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
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
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto z-10 select-none text-white"
    >
      <div className="mt-4">
        <div className="max-w-4xl space-y-8">
          {/* Subtle Telemetry Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/20 border border-white/20 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FFB347] animate-pulse shadow-[0_0_8px_rgba(255,179,71,0.6)]"></span>
            <span>Verfügbar für ausgewählte Mandate 2026</span>
          </div>

          {/* Hero Title */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display"
          >
            Bastian Franke. <br />
            <span className="text-white/65">Produktdesigner.</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('work-section')}
              id="hero-btn-portfolio"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#FF5C00] hover:text-white transition-all duration-300 shadow-md cursor-pointer active:scale-95"
            >
              <span>Portfolio ansehen</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection('studio-section')}
              id="hero-btn-learnmore"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 border border-white/25 text-white font-medium text-xs uppercase tracking-widest hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-xs backdrop-blur-md"
            >
              <Compass className="w-3.5 h-3.5 text-white/70 transition-colors" />
              <span>Mehr erfahren</span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Row with Scroll Cue and Philosophy Statement */}
      <div className="pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/20">
        {/* Scroll Cue */}
        <div className="md:col-span-4 flex items-center gap-3">
          <button
            onClick={() => scrollToSection('studio-section')}
            className="group flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer"
            id="scroll-cue-btn"
          >
            <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-all duration-300 shadow-xs">
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </span>
            <span className="font-semibold tracking-wider text-[11px]">Entdecken</span>
          </button>
        </div>

        {/* Philosophy Statement */}
        <div className="md:col-span-8 flex justify-start md:justify-end">
          <p
            id="hero-philosophy-quote"
            className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed text-left md:text-right font-light"
          >
            „Design ist kein Dekor, sondern die präzise Übersetzung komplexer Technologien in intuitive, inspirierende Erlebnisse.“
          </p>
        </div>
      </div>
    </section>
  );
};
