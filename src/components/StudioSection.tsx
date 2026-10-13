import React from 'react';
import { Search, PencilRuler, Hammer } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section
      id="studio-section"
      className="relative min-h-[135svh] flex items-center py-24 md:py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 text-white"
    >
      <div className="relative w-full max-w-5xl">
        <div className="relative z-10 max-w-4xl space-y-7">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c3a04a]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#c3a04a]">
              ÜBER MICH
            </span>
          </div>

          {/* Core Studio Statement */}
          <h2
            id="studio-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.08] font-display"
          >
            Ich bin Bastian Franke, staatlich geprüfter Gestaltungstechnischer Assistent.
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl pt-2 font-light">
            Besonders interessiert mich, wie aus einer Idee ein greifbares Produkt wird: durch Skizzen, Materialtests, Modelle und Prototypen. In meinen Projekten beschäftige ich mich mit Ergonomie, modularen Systemen und der Frage, wie Produkte im Alltag verständlicher und angenehmer funktionieren können.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
            <div className="flex items-start gap-3">
              <Search className="w-4 h-4 text-[#c3a04a] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white">Beobachten</h3>
                <p className="text-xs text-white/60 mt-1">Nutzung, Umfeld und bestehende Produkte verstehen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PencilRuler className="w-4 h-4 text-[#c3a04a] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white">Entwickeln</h3>
                <p className="text-xs text-white/60 mt-1">Ideen skizzieren, Varianten vergleichen und hinterfragen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Hammer className="w-4 h-4 text-[#c3a04a] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white">Umsetzen</h3>
                <p className="text-xs text-white/60 mt-1">Modelle und Prototypen bauen, testen und weiterentwickeln</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
