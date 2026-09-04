import React from 'react';
import { X, ArrowUpRight, Check, Tag, BarChart3 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="bg-white border border-black/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/80 border border-black/10 flex items-center justify-center text-[#111111] hover:bg-black hover:text-white transition-colors cursor-pointer shadow-sm"
          id="close-project-modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-neutral-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider">
              {project.client}
            </span>
            {project.year && (
              <span className="text-xs font-mono text-[#666666] bg-white/90 px-3 py-1 rounded-full border border-black/10">
                {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 font-display">
              {project.title}
            </h2>
          </div>

          <p className="text-[#666666] text-base leading-relaxed font-light">
            {project.description}
          </p>

          {/* Meta Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-black/10">
            {project.metrics && (
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-black" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#888888]">Messbarer Erfolg</div>
                  <div className="text-sm font-semibold text-[#111111]">{project.metrics}</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Tag className="w-4 h-4 text-black" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#888888]">Kategorie</div>
                <div className="text-sm font-semibold text-[#111111]">{project.tags.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#111111] uppercase tracking-widest">
              Erbrachte Leistungen
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555555]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Ganzheitliche Produkt- & Formkonzeption</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Class-A 3D-CAD Flächenmodellierung</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>CMF-Spezifikation (Farbe, Material, Finish)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>DFM-Optimierung & Werkzeugabstimmung</span>
              </div>
            </div>
          </div>

          {/* CTA Footer inside Modal */}
          <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-8 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#222222] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Ähnliches Projekt anfragen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-[#777777] hover:text-black transition-colors cursor-pointer"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
