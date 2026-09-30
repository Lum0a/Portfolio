import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
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
          ? 'bg-[#fbfbfd]/90 backdrop-blur-xl border-b border-black/[0.08] py-3.5 shadow-sm'
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
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors font-display flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5C00] shadow-[0_0_8px_rgba(255,92,0,0.6)]"></span>
            <span>/logo</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.25em] text-white/70 font-medium pl-3 border-l border-white/20">
            Bastian Franke
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 rounded-full border border-white/15 bg-black/15 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white/85 backdrop-blur-xl">
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

        {/* Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Primary Contact CTA Button */}
          <button
            onClick={onOpenContact}
            id="navbar-contact-btn"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#FF5C00] hover:text-white transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
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

        </div>
      )}
    </header>
  );
};
