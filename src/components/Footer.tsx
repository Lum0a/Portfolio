import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative z-10 my-10 border-t border-white/15 py-16 px-6 md:px-12 max-w-7xl mx-auto text-white/70"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
        {/* Left Column: Brand & Bio */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-white font-display">
              /logo
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-medium pl-3 border-l border-white/20">
              Bastian Franke
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/65 max-w-sm leading-relaxed font-light">
            Gestaltungstechnischer Assistent mit Schwerpunkten in Design, Fotografie, Programmierung und Film.
          </p>
          <div className="pt-2 text-[11px] text-white/45 font-mono">
            © {new Date().getFullYear()} Bastian Franke. Alle Rechte vorbehalten.
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 text-xs font-medium uppercase tracking-widest">
          <div className="space-y-3">
            <span className="text-[10px] text-white/45 font-bold block mb-4">Navigation</span>
            <button
              onClick={() => scrollToSection('work-section')}
              className="block text-left text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Arbeiten
            </button>
            <button
              onClick={() => scrollToSection('studio-section')}
              className="block text-left text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('process-section')}
              className="block text-left text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Arbeitsweise
            </button>
            <button
              onClick={() => scrollToSection('skills-section')}
              className="block text-left text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Fähigkeiten
            </button>
            <button
              onClick={() => scrollToSection('resume-section')}
              className="block text-left text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Lebenslauf
            </button>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-white/45 font-bold block mb-4">Kontakt</span>
            <button
              onClick={onOpenContact}
              className="block text-left text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Projekt anfragen
            </button>
          </div>
        </div>

        {/* Right Column: Scroll Top Button */}
        <div className="md:col-span-3 flex md:justify-end items-center">
          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            className="group flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span>Nach oben</span>
            <span className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center group-hover:border-white transition-all duration-300 shadow-xs">
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
