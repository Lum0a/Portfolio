import React from 'react';
import { Search, PencilRuler, Hammer } from 'lucide-react';

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
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FF5C00]">
              ÜBER MICH
            </span>
          </div>

          {/* Core Studio Statement */}
          <h2
            id="studio-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display"
          >
            Ich bin Bastian Franke, staatlich geprüfter Gestaltungstechnischer Assistent.
          </h2>

          <p className="text-[#555555] text-base md:text-lg leading-relaxed max-w-2xl pt-2 font-light">
            Besonders interessiert mich, wie aus einer Idee ein greifbares Produkt wird: durch Skizzen, Materialtests, Modelle und Prototypen. In meinen Projekten beschäftige ich mich mit Ergonomie, modularen Systemen und der Frage, wie Produkte im Alltag verständlicher und angenehmer funktionieren können.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-black/10">
            <div className="flex items-start gap-3">
              <Search className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#111111]">Beobachten</h3>
                <p className="text-xs text-[#666666] mt-1">Nutzung, Umfeld und bestehende Produkte verstehen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PencilRuler className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#111111]">Entwickeln</h3>
                <p className="text-xs text-[#666666] mt-1">Ideen skizzieren, Varianten vergleichen und hinterfragen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Hammer className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#111111]">Umsetzen</h3>
                <p className="text-xs text-[#666666] mt-1">Modelle und Prototypen bauen, testen und weiterentwickeln</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
