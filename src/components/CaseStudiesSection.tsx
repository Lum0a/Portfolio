import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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
      className="relative w-full bg-black py-16 px-5 sm:px-8 md:py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/75">
              MEINE ARBEIT
            </span>
            <h2
              id="work-heading"
              className="text-4xl sm:text-5xl font-medium tracking-tight text-white font-display"
            >
              Fallstudien.
            </h2>
            <p className="max-w-xl text-base sm:text-lg text-white/75 font-light leading-relaxed">
              Ich setze innovative Konzepte in die Realität um, die einen spürbaren Mehrwert und Veränderung bewirken.
            </p>
          </div>

          <button
            type="button"
            onClick={() => document.getElementById('project-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="work-details-button inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#f5f4f0] px-6 py-4 text-sm font-medium text-black transition-colors hover:bg-[#e7e4dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>Details ansehen</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
              <ArrowRight className="h-3 w-3" />
            </span>
          </button>
        </div>

        <div id="project-grid" className="grid scroll-mt-24 grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              type="button"
              className="group flex flex-col text-left cursor-pointer"
              id={`project-card-${project.id}`}
              aria-label={`Details zu ${project.title} ansehen`}
            >
              {project.images?.length ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white/[0.04]">
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
              ) : null}
              <div className="pt-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-medium text-white tracking-tight group-hover:text-[#e9cf7a] transition-colors font-display">
                    {project.title}
                </h3>

                <p className="mt-2 text-sm text-white/70 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-white/80 group-hover:text-[#e9cf7a] transition-colors">
                  <span>Projektdetails</span>
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
