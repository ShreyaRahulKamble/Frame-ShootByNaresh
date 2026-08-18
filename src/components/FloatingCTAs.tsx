import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingCTAs: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#16181E] border border-white/20 shadow-xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Call Naresh Budamol"
      >
        <Phone className="w-5 h-5 text-[#D4AF37]" />
        <span className="absolute right-14 whitespace-nowrap bg-black/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          Call: +91 9004129974
        </span>
      </a>
    </div>
  );
};

