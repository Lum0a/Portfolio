import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Box } from 'lucide-react';
import { SceneMode } from '../types';

interface NavbarProps {
  onOpenContact: () => void;
  sceneMode: SceneMode;
  setSceneMode: (mode: SceneMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  sceneMode,
  setSceneMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbfbfd]/85 backdrop-blur-xl border-b border-black/[0.08] py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group cursor-pointer"
          id="navbar-logo"
        >
          <span className="text-xl font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors font-display">
            /logo
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium pl-3 border-l border-black/10">
            Bastian Franke
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-xs font-medium uppercase tracking-widest text-[#555555]">
          <button
            onClick={() => scrollToSection('studio-section')}
            className="hover:text-black transition-colors cursor-pointer"
            id="nav-link-studio"
          >
            Mein Studio
          </button>
          <button
            onClick={() => scrollToSection('work-section')}
            className="hover:text-black transition-colors cursor-pointer"
            id="nav-link-work"
          >
            Meine Arbeiten
          </button>
          <button
            onClick={() => scrollToSection('resume-section')}
            className="hover:text-black transition-colors cursor-pointer"
            id="nav-link-resume"
          >
            Lebenslauf
          </button>
          <button
            onClick={() => scrollToSection('process-section')}
            className="hover:text-black transition-colors cursor-pointer"
            id="nav-link-process"
          >
            Arbeitsweise
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-black transition-colors cursor-pointer"
            id="nav-link-contact"
          >
            Kontakt
          </button>
        </nav>

        {/* Right CTA and 3D Mode Toggle */}
        <div className="flex items-center gap-3">
          {/* 3D Mode Quick Pill */}
          <div className="hidden lg:flex items-center bg-white/80 border border-black/10 rounded-full p-1 text-xs shadow-xs backdrop-blur-md">
            <button
              onClick={() => setSceneMode('scroll')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 text-[11px] uppercase tracking-wider cursor-pointer ${
                sceneMode === 'scroll'
                  ? 'bg-black text-white font-semibold shadow-xs'
                  : 'text-[#666666] hover:text-black'
              }`}
              title="3D folgt dem Scrollen"
              id="mode-btn-scroll"
            >
              <Sparkles className="w-3 h-3" />
              Scroll 3D
            </button>
            <button
              onClick={() => setSceneMode('orbit')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 text-[11px] uppercase tracking-wider cursor-pointer ${
                sceneMode === 'orbit'
                  ? 'bg-black text-white font-semibold shadow-xs'
                  : 'text-[#666666] hover:text-black'
              }`}
              title="Freies 3D Drehen"
              id="mode-btn-orbit"
            >
              <Box className="w-3 h-3" />
              Frei 3D
            </button>
          </div>

          {/* Primary Contact CTA Button */}
          <button
            onClick={onOpenContact}
            id="navbar-contact-btn"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-widest hover:bg-[#222222] transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white border border-black/10 text-black hover:bg-black/5 transition-colors cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Navigation öffnen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden bg-[#fbfbfd]/98 border-b border-black/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 backdrop-blur-2xl shadow-xl"
        >
          <nav className="flex flex-col space-y-3 text-xs font-semibold uppercase tracking-widest text-[#555555]">
            <button
              onClick={() => scrollToSection('studio-section')}
              className="text-left py-2 hover:text-black"
            >
              Mein Studio
            </button>
            <button
              onClick={() => scrollToSection('work-section')}
              className="text-left py-2 hover:text-black"
            >
              Meine Arbeiten
            </button>
            <button
              onClick={() => scrollToSection('resume-section')}
              className="text-left py-2 hover:text-black"
            >
              Lebenslauf
            </button>
            <button
              onClick={() => scrollToSection('process-section')}
              className="text-left py-2 hover:text-black"
            >
              Arbeitsweise
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left py-2 hover:text-black"
            >
              Kontakt
            </button>
          </nav>

          <div className="pt-4 border-t border-black/10 flex items-center justify-between">
            <span className="text-[11px] text-[#777777] uppercase tracking-wider">3D Interaktion</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSceneMode('scroll')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  sceneMode === 'scroll'
                    ? 'bg-black text-white'
                    : 'bg-black/5 text-[#555555]'
                }`}
              >
                Scroll
              </button>
              <button
                onClick={() => setSceneMode('orbit')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  sceneMode === 'orbit'
                    ? 'bg-black text-white'
                    : 'bg-black/5 text-[#555555]'
                }`}
              >
                Frei 3D
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
