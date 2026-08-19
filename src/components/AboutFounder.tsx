import React from 'react';
import { FOUNDER_INFO } from '../data/content';
import { Award, CheckCircle2, Cpu, Wrench, Layers, Building, Quote } from 'lucide-react'; 

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0B0C0E] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Award className="w-3.5 h-3.5" />
            <span>Meet The Founder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            Driven by Technical Precision <br />
            <span className="text-gold-gradient">& Visual Excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Why Naresh Budamol approaches interior photography and video walkthroughs with an edge no standard camera operator possesses.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">
          
          {/* Left Column: Circular Founder Portrait */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center lg:items-center">
            <div className="relative flex justify-center items-center">
              
              {/* Subtle Outer Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#D4AF37]/10 to-transparent blur-3xl"></div>

              {/* Circular Portrait */}
              <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-[3px] border-[#D4AF37] shadow-[0_0_36px_rgba(212,175,55,0.28)] bg-[#0F1115]">
                <img
                  src="/assets/founder.jpg"
                  alt="Naresh Budamol — Founder of Frame & Shoot Interiors"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Founder Info Card Below Portrait */}
            <div className="mt-10 w-full max-w-sm text-center p-6 rounded-2xl glass-panel-gold border border-[#D4AF37]/30 bg-[#121418]/80 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
              <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                {FOUNDER_INFO.title}
              </p>
              <h3 className="text-lg font-syne font-bold text-white mt-2">
                {FOUNDER_INFO.name}
              </h3>
              <p className="text-xs text-gray-300 mt-2">
                8+ Years Furniture Industry & Felder Group Legacy
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-300">
                <Building className="w-4 h-4 text-[#D4AF37]" />
                <span>Mumbai & Hyderabad</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded text-[10px]">
                  Verified Founder
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6 text-gray-300">
            
            {/* Quote Banner */}
            <div className="p-5 rounded-2xl glass-panel-gold border border-[#D4AF37]/30 relative">
              <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-3 right-3" />
              <p className="text-sm sm:text-base font-medium italic text-gray-200 leading-relaxed">
                "An interior space isn't just wood, tile, and glass. It's the culmination of months of architectural planning, precision hardware engineering, and craftsmanship. My mission is to make that craftsmanship visible to high-paying clients."
              </p>
              <div className="mt-3 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                — Naresh Budamol, Founder
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300">
              {FOUNDER_INFO.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Technical Expertise Pill Highlights */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                Core Industry Pillars & Machinery Expertise:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#14161C] border border-white/10">
                  <Cpu className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Felder Group Machinery</h5>
                    <p className="text-[11px] text-gray-400">Deep familiarity with Austrian precision woodworking CNCs & edgebanders.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#14161C] border border-white/10">
                  <Wrench className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Modular Furniture Hardware</h5>
                    <p className="text-[11px] text-gray-400">Knowing Blum, Hettich & Hafele hardware alignment to film seamless motion.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#14161C] border border-white/10">
                  <Layers className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Raw Material Knowledge</h5>
                    <p className="text-[11px] text-gray-400">Mastery over lighting interactions with veneer, PU polish, acrylic, and quartz.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#14161C] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Conversion Storytelling</h5>
                    <p className="text-[11px] text-gray-400">Structuring reels specifically to attract high-ticket interior inquiries.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

