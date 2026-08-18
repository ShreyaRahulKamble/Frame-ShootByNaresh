import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { 
  PhoneCall, 
  Calendar, 
  Camera, 
  Video, 
  Download, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-black" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-black" />;
      case 'Camera': return <Camera className="w-5 h-5 text-black" />;
      case 'Video': return <Video className="w-5 h-5 text-black" />;
      case 'Download': return <Download className="w-5 h-5 text-black" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-black" />;
      default: return <CheckCircle className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#121418] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Rocket className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            6 Steps From Project Completion <br />
            <span className="text-gold-gradient">To Signed Client Contracts</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            A structured, hassle-free process designed specifically for busy architects & interior designers.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-8 right-8 top-10 h-px bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37] to-[#D4AF37]/60" />

          <div className="hidden lg:grid lg:grid-cols-6 gap-6 xl:gap-8 relative">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative group">
                <div className="absolute -right-3 top-10 h-px w-5 bg-gradient-to-r from-[#D4AF37] to-transparent hidden xl:block" />
                <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 relative group flex flex-col justify-between h-full min-h-[300px] hover:shadow-[0_0_0_1px_rgba(212,175,55,0.2)]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 group-hover:shadow-[#D4AF37]/35 group-hover:scale-105">
                        {getIcon(step.iconName)}
                      </div>
                      <span className="text-2xl font-syne font-extrabold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110 block">
                        {String(step.step).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-syne text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      Step {step.step}: {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-800/40">
                      {step.detail}
                    </span>
                    <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">
                      {step.step}/6
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden relative">
            <div className="absolute left-5 top-1 bottom-1 w-px bg-gradient-to-b from-[#D4AF37]/80 via-[#D4AF37]/70 to-[#D4AF37]/80" />
            <div className="space-y-5">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="relative pl-12">
                  <div className="absolute left-0 top-5 w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#121418] flex items-center justify-center shadow-lg shadow-[#D4AF37]/10">
                    <span className="text-xs font-syne font-bold text-[#D4AF37]">{String(step.step).padStart(2, '0')}</span>
                  </div>
                  <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 relative group min-h-[180px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                        {getIcon(step.iconName)}
                      </div>
                      <h3 className="text-base font-bold font-syne text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        Step {step.step}: {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-800/40">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 lg:hidden gap-5 relative">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative group">
                <div className="absolute -right-2.5 top-9 h-px w-5 bg-gradient-to-r from-[#D4AF37] to-transparent hidden sm:block" />
                <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 relative group flex flex-col justify-between h-full min-h-[280px]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 group-hover:scale-105">
                        {getIcon(step.iconName)}
                      </div>
                      <span className="text-2xl font-syne font-extrabold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110 block">
                        {String(step.step).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-syne text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      Step {step.step}: {step.title}
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-800/40">
                      {step.detail}
                    </span>
                    <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">
                      {step.step}/6
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:brightness-110 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book Step 1: Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

