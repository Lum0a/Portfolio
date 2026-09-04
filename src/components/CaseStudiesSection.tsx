import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface CaseStudiesSectionProps {
  onOpenContact: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenContact }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              PORTFOLIO & PRODUKTDESIGN
            </span>
          </div>
          <h2
            id="work-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display"
          >
            Meine Arbeiten.
          </h2>
          <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed">
            Ausgewählte Hardware- und Industriedesign-Projekte: Von der ersten Formfindung über haptische Prototypen bis zur serienreifen Fertigung.
          </p>
        </div>

        {/* Projects Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xs"
              id={`project-card-${project.id}`}
            >
              {/* Image Preview Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60" />

                {/* Pill client badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[#111111] font-bold text-xs tracking-wider shadow-sm">
                    {project.client}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-wider">
                    {project.year}
                  </span>
                </div>

                {/* Hover Details Button */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white font-semibold text-xs shadow-lg uppercase tracking-wider">
                    <span>Details ansehen</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-7 sm:p-8 space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#888888] font-mono block">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight group-hover:text-black transition-colors font-display">
                    {project.title}
                  </h3>
                </div>

                <p className="text-[#666666] text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs text-[#777777]">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-black/[0.04] text-[#444444] text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-[#444444]">
                  <span className="inline-flex items-center gap-1 text-black font-semibold group-hover:underline">
                    Projektdetails <ArrowUpRight className="w-3 h-3" />
                  </span>
                  {project.metrics && (
                    <span className="text-black font-mono font-medium text-[11px] bg-black/[0.05] px-2.5 py-0.5 rounded-full">
                      {project.metrics}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
