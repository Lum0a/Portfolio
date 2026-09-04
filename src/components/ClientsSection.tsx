import React from 'react';
import { CLIENT_LOGOS } from '../data';

export const ClientsSection: React.FC = () => {
  return (
    <section
      id="clients-section"
      className="relative py-16 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-8">
        {/* Eyebrow & Heading */}
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
            KUNDEN
          </span>
          <h2
            id="clients-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] font-display"
          >
            Vertraut von Branchenführern.
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-4">
          {CLIENT_LOGOS.map((logo, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-center justify-center h-24 transition-all duration-300 group cursor-default shadow-xs"
              id={`client-logo-${idx}`}
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="max-h-7 max-w-[100px] opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
