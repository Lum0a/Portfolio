import React from 'react';
import { APPROACH_ITEMS } from '../data';
import { Zap, ShieldCheck, Telescope, UserCheck, Flame } from 'lucide-react';

const ICONS = [Zap, ShieldCheck, Telescope, UserCheck, Flame];

export const ApproachSection: React.FC = () => {
  return (
    <section
      id="approach-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              MEIN ANSATZ
            </span>
          </div>
          <h2
            id="approach-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display"
          >
            Wo Ihre Ambition auf Geschwindigkeit trifft.
          </h2>
          <p className="text-[#555555] text-base sm:text-lg font-light">
            Ich gestalte mehr mit einem Innovationsgedanken statt dem Streben nach einer perfekten Form.
          </p>
        </div>

        {/* Layout: Map Visual + 5 Interactive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Graphic Panel */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-sm">
            <div className="space-y-2 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#666666]">
                Globale Präsenz & Remote Work
              </span>
              <h3 className="text-xl font-bold text-[#111111] font-display">
                Zusammenarbeit über alle Zeitzonen hinweg
              </h3>
            </div>

            <div className="relative py-8 flex items-center justify-center my-4">
              <img
                src="./images/map.png"
                alt="Global Reach Map"
                className="w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Pulse Nodes on Map */}
              <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 bg-black rounded-full animate-ping opacity-75" />
              <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 bg-black rounded-full" />
              
              <div className="absolute top-1/4 right-1/3 w-2.5 h-2.5 bg-black rounded-full animate-ping opacity-75" />
              <div className="absolute top-1/4 right-1/3 w-2.5 h-2.5 bg-black rounded-full" />
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-[#666666] z-10 font-mono">
              <span>Berlin • Zürich • London • SF</span>
              <span>100% Remote-ready</span>
            </div>
          </div>

          {/* 5 Distinct Pillars Column */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
            {APPROACH_ITEMS.map((item, idx) => {
              const IconComp = ICONS[idx % ICONS.length];
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 group"
                  id={`approach-item-${idx}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-black/[0.04] border border-black/10 flex items-center justify-center shrink-0 group-hover:border-black/30 group-hover:bg-black group-hover:text-white transition-all duration-300 text-black">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#111111] tracking-tight font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
