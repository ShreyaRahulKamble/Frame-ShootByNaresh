import React from 'react';
import { Sparkles, MapPin, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

const heroImages = [
  { src: '/assets/IMAGE%201.png', alt: 'Interior photography showcase 1' },
  { src: '/assets/IMAGE%202.png', alt: 'Interior photography showcase 2' },
  { src: '/assets/IMAGE%203.png', alt: 'Interior photography showcase 3' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#0B0C0E]">
      {/* Ambient Gold & Glow Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#FF7A00]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 w-full">
            {heroImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#121418] shadow-2xl shadow-[#D4AF37]/10"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[220px] sm:h-[280px] lg:h-[360px] xl:h-[420px] w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
                  loading="eager"
                />
              </div>
            ))}
          </div>

          <div className="w-full max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-10">
              <div className="w-full lg:max-w-[640px]">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-gold border border-[#D4AF37]/30 text-xs font-semibold text-gray-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                  <span className="text-[#D4AF37] uppercase tracking-wider text-[11px] font-bold">
                    Framing Spaces. Shooting Stories. Growing Brands.
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.1rem] font-syne font-extrabold leading-[0.96] tracking-[-0.04em] text-left">
                  <span className="block text-white">We Don't Just Shoot Interiors.</span>
                  <span className="mt-2 block text-gold-gradient">We Create Content That Brings You</span>
                  <span className="block text-gold-gradient">More Clients.</span>
                </h1>

                {/* Subheading */}
                <p className="mt-5 text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-[760px]">
                  Professional content creation, cinematic 4K reels & architectural photography tailored for{' '}
                  <strong className="text-white font-semibold">Interior Designers</strong>,{' '}
                  <strong className="text-white font-semibold">Architects</strong>,{' '}
                  <strong className="text-white font-semibold">Modular Kitchen Brands</strong>, and{' '}
                  <strong className="text-white font-semibold">Furniture Showrooms</strong>.
                </p>

                {/* Locations Pill */}
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-1 text-xs text-gray-300">
                  <div className="flex items-center gap-1.5 bg-[#16181E] border border-white/10 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Active Service Locations:</span>
                    <span className="text-white font-bold">Mumbai & Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>48-72 Hours Fast Delivery</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex items-center justify-start">
                  <button
                    onClick={() => {
                      const whatsappMessage = encodeURIComponent('Hi Naresh, I want to book a free consultation for my interior project.');
                      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-xl shadow-xl shadow-[#D4AF37]/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Micro Trust Proof */}
                <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-gray-400 border-t border-white/10 max-w-lg pt-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>8+ Yrs Industry Exp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Shoots Active Today</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">150+</span>
                    <span>Projects Shot</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-center lg:justify-end lg:w-[48%]">
                <div className="w-full max-w-[620px] overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#121418] shadow-2xl shadow-[#D4AF37]/10">
                  <img
                    src="/assets/camera-hero.jpg"
                    alt="Professional camera product image"
                    className="h-[380px] sm:h-[440px] lg:h-[500px] xl:h-[540px] w-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
