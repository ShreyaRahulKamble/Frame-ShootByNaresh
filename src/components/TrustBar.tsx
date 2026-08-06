import React from 'react';
import { CheckCircle2, Award, Video, MapPin, Film, Camera, Image, TrendingUp } from 'lucide-react';
import { TRUST_BAR_ITEMS } from '../data/content';

export const TrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-4 h-4 text-[#D4AF37]" />;
      case 'Video': return <Video className="w-4 h-4 text-[#D4AF37]" />;
      case 'MapPin': return <MapPin className="w-4 h-4 text-[#D4AF37]" />;
      case 'Film': return <Film className="w-4 h-4 text-[#D4AF37]" />;
      case 'Camera': return <Camera className="w-4 h-4 text-[#D4AF37]" />;
      case 'Image': return <Image className="w-4 h-4 text-[#D4AF37]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#D4AF37]" />;
      default: return <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="relative z-20 py-8 bg-[#121418] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
            Trusted Interior Content Creation Partner Across <span className="text-[#D4AF37]">Mumbai & Hyderabad</span>
          </p>
        </div>

        {/* Horizontal Marquee / Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
          {TRUST_BAR_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-[#191C22] border border-white/10 hover:border-[#D4AF37]/40 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all hover:scale-105 shadow-sm"
            >
              <div className="p-1 rounded-md bg-[#D4AF37]/10">
                {getIcon(item.icon)}
              </div>
              <span className="whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
