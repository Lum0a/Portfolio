import React from 'react';
import { PROCESS_STEPS } from '../data';
import { Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              MEIN PROZESS
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display"
          >
            Wie ich arbeite.
          </h2>
          <p className="text-[#555555] text-base sm:text-lg font-light">
            Strukturierte Abläufe, transparente Kommunikation und schnelle Iterationszyklen für außergewöhnliche Ergebnisse.
          </p>
        </div>

        {/* 4 Process Cards Horizontal / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 group hover:-translate-y-1 relative shadow-xs"
              id={`process-card-${idx}`}
            >
              {/* Step Number Top Banner */}
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#cccccc] font-mono group-hover:text-black transition-colors">
                  {step.number}
                </span>
                {step.duration && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-[11px] text-[#666666] font-mono">
                    <Clock className="w-3 h-3 text-black" />
                    {step.duration}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#111111] tracking-tight group-hover:text-black transition-colors font-display">
                  {step.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 border-t border-black/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-[10px] text-[#888888] uppercase tracking-widest font-mono">
                  Phase 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
