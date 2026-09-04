import React from 'react';
import { ArrowUpRight, Sparkles, Mail } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="cta-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="glass-panel-dark rounded-3xl p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
        {/* Glow backdrop accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] uppercase tracking-[0.25em] text-[#cccccc] backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-white" />
            <span>PROJEKT STARTEN</span>
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-display"
          >
            Bereit, etwas Außergewöhnliches zu schaffen?
          </h2>

          <p className="text-[#aaaaaa] text-base sm:text-lg max-w-xl font-light leading-relaxed">
            Lassen Sie uns gemeinsam über Ihre nächste Produktvision sprechen. Schnelle Rückmeldung innerhalb von 24 Stunden.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              id="cta-primary-btn"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e6e6e6] transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
            >
              <span>Jetzt anfragen</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="mailto:contact@bastianfranke.design"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-medium text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#aaaaaa]" />
              <span>contact@bastianfranke.design</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
