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
      className="relative z-10 border-t border-black/10 py-16 px-6 md:px-12 max-w-7xl mx-auto text-[#666666]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
        {/* Left Column: Brand & Bio */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-[#111111] font-display">
              /logo
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-medium pl-3 border-l border-black/10">
              Bastian Franke
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] max-w-sm leading-relaxed font-light">
            Senior Produktdesigner für ganzheitliches Hardware- & Industriedesign, Class-A 3D-CAD und Serienüberführung.
          </p>
          <div className="pt-2 text-[11px] text-[#888888] font-mono">
            © {new Date().getFullYear()} Bastian Franke. Alle Rechte vorbehalten.
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 text-xs font-medium uppercase tracking-widest">
          <div className="space-y-3">
            <span className="text-[10px] text-[#888888] font-bold block mb-4">Navigation</span>
            <button
              onClick={() => scrollToSection('studio-section')}
              className="block text-left text-[#555555] hover:text-black transition-colors cursor-pointer"
            >
              Mein Studio
            </button>
            <button
              onClick={() => scrollToSection('work-section')}
              className="block text-left text-[#555555] hover:text-black transition-colors cursor-pointer"
            >
              Meine Arbeiten
            </button>
            <button
              onClick={() => scrollToSection('resume-section')}
              className="block text-left text-[#555555] hover:text-black transition-colors cursor-pointer"
            >
              Lebenslauf
            </button>
            <button
              onClick={() => scrollToSection('process-section')}
              className="block text-left text-[#555555] hover:text-black transition-colors cursor-pointer"
            >
              Arbeitsweise
            </button>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-[#888888] font-bold block mb-4">Connect</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#555555] hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#555555] hover:text-black transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#555555] hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Scroll Top Button */}
        <div className="md:col-span-3 flex md:justify-end items-center">
          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            className="group flex items-center gap-3 text-xs uppercase tracking-widest text-[#555555] hover:text-black transition-colors cursor-pointer"
          >
            <span>Nach oben</span>
            <span className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:border-black group-hover:text-black transition-all duration-300 shadow-xs">
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
