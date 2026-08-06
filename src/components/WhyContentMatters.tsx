import React from 'react';
import { WHY_CONTENT_MATTERS } from '../data/content';
import { 
  ShieldCheck, 
  MessageCircle, 
  TrendingUp, 
  Crown, 
  Award, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WhyContentMattersProps {
  onOpenBooking: () => void;
}

export const WhyContentMatters: React.FC<WhyContentMattersProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-[#D4AF37]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D4AF37]" />;
      case 'Crown': return <Crown className="w-6 h-6 text-[#D4AF37]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-content" className="py-24 relative bg-[#0B0C0E] border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>The ROI Of Visual Storytelling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            Why High-Quality Video Content <br />
            <span className="text-gold-gradient">Drives Real Business Value</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Static smartphone photos get ignored. Cinematic reels build emotional desire and land high-budget clients.
          </p>
        </div>

        {/* Infographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CONTENT_MATTERS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-glow border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-syne font-extrabold text-[#D4AF37] block">
                      {item.stat}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-syne text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#D4AF37]">
                <span>Impact Metric</span>
                <span className="text-emerald-400">Verified Growth</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <span>Start Building Your Brand Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
