import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="services-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              DIENSTLEISTUNGEN
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display"
            >
              Mein Ansatz zum Erfolg basiert auf drei Hauptstrategien.
            </h2>
            <p className="text-[#555555] text-base sm:text-lg max-w-2xl pt-2 font-light">
              Ich designe nicht nur Produkte, sondern schaffe Erlebnisse, die einen echten Unterschied machen.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={onOpenContact}
              id="services-cta-btn"
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-black text-white text-xs uppercase tracking-widest hover:bg-[#222222] transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
            >
              <span>Jetzt starten</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 3 Strategy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:border-black/30 transition-colors duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#111111] tracking-tight font-display">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="pt-8 mt-8 border-t border-black/10 space-y-2.5">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#444444] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
