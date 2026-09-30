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
      className="relative py-14 px-5 sm:px-8 md:py-20 md:px-12 max-w-7xl mx-auto"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FF5C00]">
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
            Fünf dokumentierte Studien- und Konzeptprojekte aus Produktdesign, Systemdesign und Prototyping.
          </p>
        </div>

        {/* Text-only project overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              type="button"
              className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-1.5 flex flex-col text-left shadow-xs"
              id={`project-card-${project.id}`}
              aria-label={`Details zu ${project.title} ansehen`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#888888] font-mono">
                    {project.category}
                  </span>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-black/[0.04] text-[#555555] text-[10px] uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#FF5C00] transition-colors font-display">
                  {project.title}
                </h3>

                <p className="text-[#666666] text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-[#444444]">
                  <span className="font-semibold">Projektdetails</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </button>
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
