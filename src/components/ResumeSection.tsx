import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Wrench,
  ArrowUpRight,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import {
  RESUME_EXPERIENCES,
  RESUME_EDUCATION,
  RESUME_SKILL_GROUPS,
  RESUME_AWARDS
} from '../data';

interface ResumeSectionProps {
  onOpenContact: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="resume-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
                WERDEGANG & QUALIFIKATION
              </span>
            </div>
            <h2
              id="resume-heading"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display"
            >
              Lebenslauf.
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              Fundierte Industrieerfahrung von der ersten Skizze über Class-A CAD bis zur Werkzeugabstimmung und weltweiten Serienfertigung.
            </p>
          </div>

          {/* Quick Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#222222] transition-all shadow-sm cursor-pointer"
            >
              <span>Vollständige Vita anfordern</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 2-Column Grid: Timeline on Left, Education/Skills/Awards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="w-8 h-8 rounded-xl bg-black/[0.04] border border-black/10 flex items-center justify-center text-black">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] font-display">
                Berufserfahrung
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-px before:bg-black/10">
              {RESUME_EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-10 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 top-2.5 w-3 h-3 rounded-full bg-white border-2 border-black group-hover:scale-125 group-hover:bg-black transition-all duration-300 shadow-xs" />

                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-3 transition-all duration-300 shadow-xs">
                    {/* Role & Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-[#111111] font-display">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-[11px] font-mono text-[#555555]">
                        <Calendar className="w-3 h-3 text-black" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Company & Location */}
                    <div className="flex items-center gap-2 text-xs text-[#666666] font-medium">
                      <span className="text-black font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#888888]" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-[#555555] font-light leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 space-y-1.5">
                      {exp.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-[#444444]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education, Skills, Awards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Box */}
            <div className="glass-panel rounded-3xl p-7 space-y-5 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-black/[0.04] border border-black/10 flex items-center justify-center text-black">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] font-display">
                  Akademische Ausbildung
                </h3>
              </div>

              <div className="space-y-4">
                {RESUME_EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/[0.02] border border-black/5 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#777777]">
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#111111]">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-black">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-[#666666] font-light leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies & Tools */}
            <div className="glass-panel rounded-3xl p-7 space-y-5 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-black/[0.04] border border-black/10 flex items-center justify-center text-black">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] font-display">
                  Kernkompetenzen & Toolstack
                </h3>
              </div>

              <div className="space-y-4">
                {RESUME_SKILL_GROUPS.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#888888] block">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-white border border-black/10 text-xs font-medium text-[#222222] shadow-2xs hover:border-black/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Auszeichnungen */}
            <div className="glass-panel rounded-3xl p-7 space-y-5 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-black/[0.04] border border-black/10 flex items-center justify-center text-black">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] font-display">
                  Auszeichnungen & Awards
                </h3>
              </div>

              <div className="space-y-2.5">
                {RESUME_AWARDS.map((award, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-2xl bg-black/[0.02] border border-black/5 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#111111]">
                        {award.title}
                      </div>
                      <div className="text-[11px] text-[#666666]">
                        {award.project}
                      </div>
                      <div className="text-[10px] font-mono text-[#888888]">
                        {award.organization}
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-mono font-semibold shrink-0">
                      {award.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

