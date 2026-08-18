import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#0B0C0E] border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span>Verified Designer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            What Interior Professionals Say <br />
            <span className="text-gold-gradient">In Mumbai & Hyderabad</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Real feedback from principal architects, interior studio founders & showroom directors.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="glass-panel-gold rounded-3xl p-8 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Location Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-800/40">
                    <MapPin className="w-3 h-3" />
                    <span>{test.location}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              <div>
                {/* Project Badge */}
                <div className="mb-4 px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 text-[11px] text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{test.projectType}</span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/50"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold font-syne text-white group-hover:text-[#D4AF37] transition-colors">
                      {test.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {test.role}, <strong className="text-gray-300">{test.company}</strong>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

