import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingCTAs: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Phone Call Floating Button */}
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

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Naresh!%20I%20want%20to%20inquire%20about%20an%20interior%20content%20creation%20shoot%20for%20my%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-black shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-emerald-500" />
        <span className="absolute right-16 whitespace-nowrap bg-emerald-950 text-emerald-300 text-xs font-extrabold px-3 py-1.5 rounded-lg border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat on WhatsApp (Instant)
        </span>
      </a>

    </div>
  );
};
