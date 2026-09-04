import React from 'react';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section
      id="studio-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-md backdrop-blur-2xl">
        {/* Glow backdrop accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              MEIN STUDIO
            </span>
          </div>

          {/* Core Studio Statement */}
          <h2
            id="studio-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display"
          >
            Ideen durch innovatives Design zum Leben erwecken, das Kreativität, Strategie und Technologie vereint.
          </h2>

          <p className="text-[#555555] text-base md:text-lg leading-relaxed max-w-2xl pt-2 font-light">
            Mit über einem Jahrzehnt Erfahrung in der Produktentwicklung transformiere ich komplexe digitale Herausforderungen in intuitive, ästhetische und skalierbare Erlebnisse.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-black/10">
            <div className="flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#111111]">Präzision</h3>
                <p className="text-xs text-[#666666] mt-1">Detailversessen in Typografie, Interaktion und Code</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#111111]">Systemisch</h3>
                <p className="text-xs text-[#666666] mt-1">Skalierbare Designsysteme für Enterprise-Produkte</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#111111]">Wirkung</h3>
                <p className="text-xs text-[#666666] mt-1">Nachweisbare Steigerung von Engagement & Conversion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
