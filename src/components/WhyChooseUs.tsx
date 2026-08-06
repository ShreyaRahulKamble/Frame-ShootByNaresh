import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/content';
import { 
  Briefcase, 
  Target, 
  Film, 
  Instagram, 
  Sliders, 
  Sparkles, 
  Building2, 
  TrendingUp, 
  Clock,
  ShieldCheck
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#D4AF37]" />;
      case 'Target': return <Target className="w-6 h-6 text-[#D4AF37]" />;
      case 'Film': return <Film className="w-6 h-6 text-[#D4AF37]" />;
      case 'Instagram': return <Instagram className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D4AF37]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#D4AF37]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#121418] border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Frame & Shoot Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            Why Top Interior Brands Choose Us <br />
            <span className="text-gold-gradient">In Mumbai & Hyderabad</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            We bridge the gap between architectural photography standards and high-converting social media reels.
          </p>
        </div>

        {/* Feature Cards Grid (3x3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 relative group border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-glow border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-syne text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span>Pillar #{index + 1}</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Verified Quality →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
