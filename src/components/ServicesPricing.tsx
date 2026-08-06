import React from 'react';
import { SERVICE_PACKAGES } from '../data/content';
import { Check, Sparkles, ArrowRight, ShieldCheck, Clock, MessageCircle } from 'lucide-react';

interface ServicesPricingProps {
  onSelectPackage: (packageId: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="services" className="py-24 relative bg-[#0B0C0E]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing • Mumbai & Hyderabad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            High-Impact Packages <br />
            <span className="text-gold-gradient">Designed for Real Business Growth</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            No hidden costs. Complete shoot, walkthrough video, 4K photos & ready-to-post edited reels included.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'glass-panel-gold border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/15'
                  : 'bg-[#121418] border border-white/10 hover:border-[#D4AF37]/40'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 right-8 bg-gold-gradient text-black text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {pkg.badge || 'MOST POPULAR'}
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-syne text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed min-h-[36px]">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-syne font-extrabold text-white">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-gray-400">/ per site shoot</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                      <span className="line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="text-emerald-400 font-bold">Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-[#D4AF37] font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Turnaround: {pkg.turnaround}</span>
                  </div>
                </div>

                {/* Best For Tag */}
                <div className="mb-6 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-300">
                  <span className="font-bold text-[#D4AF37]">Best Suitable For: </span>
                  {pkg.bestFor}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    What's Included In Package:
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gold-gradient text-black shadow-xl shadow-[#D4AF37]/20 hover:brightness-110 active:scale-98'
                      : 'bg-[#1D2028] text-white border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>Book {pkg.name} Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/919004129974?text=Hi%20Naresh,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20Package%20(₹${pkg.price}).%20Please%20share%20available%20shoot%20dates.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-xl hover:bg-emerald-900/60 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Retainer Box */}
        <div className="mt-12 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
              Need Multiple Shoots or Monthly Retainer?
            </span>
            <h3 className="text-xl font-bold font-syne text-white">
              Custom Content Retainer for Showrooms & Design Firms
            </h3>
            <p className="text-xs text-gray-300 max-w-xl">
              Have 3+ sites per month or running a furniture experience center in Mumbai or Hyderabad? Get dedicated monthly site shoots, Instagram management, and priority editing.
            </p>
          </div>
          <button
            onClick={() => onSelectPackage('custom')}
            className="px-6 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#D4AF37] transition-all shrink-0 cursor-pointer"
          >
            Request Retainer Quote
          </button>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>All RAW files + Color Graded 4K Reels delivered via Google Drive link within 48-72 Hours.</span>
        </div>

      </div>
    </section>
  );
};
