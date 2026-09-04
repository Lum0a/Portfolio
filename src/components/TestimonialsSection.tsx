import React from 'react';
import { TESTIMONIALS } from '../data';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials-section"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#666666]">
              REFERENZEN
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display"
          >
            Das sagen meine Kunden.
          </h2>
          <p className="text-[#555555] text-base sm:text-lg font-light">
            Langjährige Partnerschaften mit internationalen Marktführern und visionären Startups.
          </p>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 transition-all duration-300 group hover:-translate-y-1 shadow-xs"
              id={`testimonial-card-${idx}`}
            >
              {/* Quote Icon & Text */}
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-[#888888] group-hover:text-black transition-colors" />
                <p className="text-lg sm:text-xl font-medium text-[#111111] leading-relaxed font-display">
                  {item.quote}
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-black/10 bg-neutral-200 shrink-0">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111] tracking-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#666666]">
                    {item.role}, <span className="text-[#111111] font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
