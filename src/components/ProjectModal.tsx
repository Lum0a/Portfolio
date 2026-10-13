import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const sections = [
    { title: 'Ziel', content: project.sections.goal },
    { title: 'Kontext', content: project.sections.context },
    { title: 'Vorgehen', content: project.sections.approach },
    { title: 'Ergebnis', content: project.sections.result },
  ];
  const images = project.images ?? [];
  const activeImage = images[activeImageIndex] ?? images[0];
  const showPreviousImage = () => {
    setActiveImageIndex((index) => (index - 1 + images.length) % images.length);
  };
  const showNextImage = () => {
    setActiveImageIndex((index) => (index + 1) % images.length);
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        data-scrollable
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="bg-white border border-black/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/80 border border-black/10 flex items-center justify-center text-[#111111] hover:bg-black hover:text-white transition-colors cursor-pointer shadow-sm"
          id="close-project-modal"
          aria-label="Projektdetails schließen"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 pt-16 sm:p-10 sm:pt-16 space-y-8">
          <header className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black/[0.04] text-[#555555] text-[10px] uppercase tracking-wider">
                {project.status}
              </span>
            </div>
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-bold text-[#111111] font-display"
            >
              {project.title}
            </h2>
            <p className="text-[#666666] text-base leading-relaxed font-light">
              {project.description}
            </p>
          </header>

          {activeImage && (
            <section
              className="space-y-3"
              aria-label={`Bilder zu ${project.title}`}
              aria-roledescription="Diashow"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black/5">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-full w-full object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="Vorheriges Projektbild"
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/85 text-[#111111] shadow-sm backdrop-blur transition-colors hover:bg-white"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="Nächstes Projektbild"
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/85 text-[#111111] shadow-sm backdrop-blur transition-colors hover:bg-white"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <span
                      className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1 text-[10px] font-medium tracking-widest text-white"
                      aria-live="polite"
                    >
                      {String(activeImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                    </span>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Projektbild ${index + 1} anzeigen: ${image.alt}`}
                      aria-pressed={index === activeImageIndex}
                      className={`aspect-[4/3] overflow-hidden rounded-xl border-2 transition-colors ${index === activeImageIndex ? 'border-[#FF5C00]' : 'border-transparent hover:border-black/20'}`}
                    >
                      <img
                        src={image.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {sections.map((section) => (
              <section key={section.title} className="space-y-2">
                <h3 className="text-xs font-semibold text-[#111111] uppercase tracking-widest">
                  {section.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed font-light">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-8 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#222222] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Kontakt aufnehmen</span>
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
