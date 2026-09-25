import React, { useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Layers,
  ArrowRight,
  Clock,
  Compass
} from 'lucide-react';
import { DESIGN_PATH_STEPS } from '../data';

export const HorizontalPathSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth > 640 ? 440 : 310;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth > 640 ? 440 : 310;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveStepIndex(Math.min(Math.max(newIndex, 0), DESIGN_PATH_STEPS.length - 1));
    }
  };

  const scrollToStep = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth > 640 ? 440 : 310;
      scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveStepIndex(index);
    }
  };

  return (
    <section
      id="process-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-12">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FF5C00]">
                ARBEITSWEISE & METHODIK
              </span>
            </div>
            <h2
              id="path-heading"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display"
            >
              Der Designpfad.
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              Vom initialen Lastenheft über haptische Funktionsmodelle bis zur werkzeuggerechten Fertigungsübergabe: Mein strukturierter Ablauf für herausragende Produkte.
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#777777] bg-white/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-black/10 shadow-xs">
              <span className="font-semibold text-[#FF5C00]">Phase 0{activeStepIndex + 1}</span>
              <span>/</span>
              <span>0{DESIGN_PATH_STEPS.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full bg-white/90 border border-black/10 flex items-center justify-center text-[#111111] hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer shadow-xs disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Vorherige Phase"
                id="path-scroll-left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full bg-white/90 border border-black/10 flex items-center justify-center text-[#111111] hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer shadow-xs disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Nächste Phase"
                id="path-scroll-right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Progress Connector Track */}
        <div className="relative pt-6 pb-2 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-[#FF5C00] -translate-y-1/2 z-0 transition-all duration-500"
            style={{
              width: `${(activeStepIndex / (DESIGN_PATH_STEPS.length - 1)) * 100}%`
            }}
          />

          <div className="relative z-10 flex justify-between items-center">
            {DESIGN_PATH_STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => scrollToStep(idx)}
                className={`flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 ${
                  activeStepIndex === idx ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 border ${
                    activeStepIndex === idx
                      ? 'bg-[#FF5C00] text-white border-[#FF5C00] shadow-md ring-4 ring-[#FF5C00]/25'
                      : idx < activeStepIndex
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-[#444444] border-black/20 hover:border-black'
                  }`}
                >
                  {step.number}
                </div>
                <span className="text-[11px] font-medium tracking-tight text-[#333333] hidden lg:block max-w-[110px] text-center truncate">
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scrollable Path Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DESIGN_PATH_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className={`shrink-0 w-[300px] sm:w-[410px] snap-center glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-xs relative ${
                activeStepIndex === idx ? 'ring-1 ring-black/20' : ''
              }`}
              id={`path-step-${idx}`}
            >
              {/* Step Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-mono">
                      {step.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#777777] font-mono">
                      {step.subtitle}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-[11px] font-mono text-[#555555]">
                    <Clock className="w-3 h-3 text-black" />
                    {step.duration}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight font-display">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#555555] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-3 border-t border-black/10">
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#888888] block">
                  Meilensteine & Deliverables
                </span>
                <div className="space-y-2">
                  {step.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-[#333333]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Methods Footer */}
              <div className="pt-3 border-t border-black/10 flex flex-wrap items-center gap-1.5">
                {step.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-white border border-black/10 text-[11px] font-mono text-[#444444] shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Hint */}
        <div className="flex items-center justify-between text-xs text-[#777777] pt-2">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-black" />
            <span>Horizontale Navigation per Wischgeste, Mausrad oder Pfeiltasten</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-black">End-to-End Begleitung:</span>
            <span>Vom Konzept zur Nullserie</span>
          </div>
        </div>
      </div>
    </section>
  );
};

