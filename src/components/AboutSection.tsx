import React from 'react';
import { TEAM_MEMBERS } from '../data';
import { Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              ÜBER MICH
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display"
          >
            Lernen Sie Bastian Franke kennen.
          </h2>
          <div className="space-y-2 pt-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#666666] block">
              PRODUKTDESIGNER
            </span>
            <p className="text-[#555555] text-base sm:text-lg max-w-2xl font-light">
              Ich bin Bastian Franke, ein Produktdesigner, der Innovation und messbaren Mehrwert in den Vordergrund stellt.
            </p>
          </div>
        </div>

        {/* Team / Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 shadow-xs"
              id={`team-member-${idx}`}
            >
              {/* Photo */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[10px] uppercase tracking-widest font-semibold text-[#111111] mb-2 shadow-xs">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span>{member.role}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Bio description */}
              <div className="p-6 sm:p-8 border-t border-black/10">
                <p className="text-[#666666] text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
