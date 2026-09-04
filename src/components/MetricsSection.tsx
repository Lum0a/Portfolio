import React from 'react';
import { METRICS } from '../data';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

interface MetricsSectionProps {
  onOpenContact: () => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="metrics-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
                KENNZAHLEN
              </span>
            </div>
            <h2
              id="metrics-heading"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display"
            >
              Ich liefere messbare Ergebnisse für Ihr Projekt.
            </h2>
            <p className="text-[#555555] text-base sm:text-lg max-w-2xl font-light">
              Ich helfe Unternehmen, innovative Produktstrategien in einen nachhaltigen Marktvorteil zu verwandeln.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={onOpenContact}
              id="metrics-cta-btn"
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-black text-white text-xs uppercase tracking-widest hover:bg-[#222222] transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
            >
              <span>Jetzt starten</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden shadow-xs"
              id={`metric-card-${idx}`}
            >
              <div className="flex items-center justify-between z-10">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight group-hover:text-black transition-colors font-display">
                  {metric.value}
                </span>
                <TrendingUp className="w-5 h-5 text-[#888888] group-hover:text-black transition-colors" />
              </div>

              <div className="space-y-1 z-10 pt-4 border-t border-black/10">
                <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                  {metric.label}
                </h3>
                {metric.subtext && (
                  <p className="text-xs text-[#666666] font-light">{metric.subtext}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
