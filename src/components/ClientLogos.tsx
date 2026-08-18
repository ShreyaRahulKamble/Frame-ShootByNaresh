import React from 'react';
import { CLIENT_LOGOS } from '../data/content';
import { Building2, ShieldCheck, MapPin } from 'lucide-react';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B0C0E] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181E] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-syne font-bold text-white">
            Trusted by Growing Interior Brands in <span className="text-gold-gradient">Mumbai & Hyderabad</span>
          </h3>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="glass-panel-gold rounded-2xl p-6 border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-glow flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h4 className="text-base font-bold font-syne text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                {client.name}
              </h4>
              <p className="text-xs text-gray-400 mb-2">{client.tag}</p>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-800/40">
                <MapPin className="w-3 h-3" />
                <span>{client.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

