import React, { useState } from 'react';
import { Play, Sparkles, MessageCircle, MapPin, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [showReelModal, setShowReelModal] = useState(false);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-gold border border-[#D4AF37]/30 text-xs font-semibold text-gray-200">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] uppercase tracking-wider text-[11px] font-bold">
                Framing Spaces. Shooting Stories. Growing Brands.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-syne font-extrabold leading-[1.15] text-white tracking-tight">
              We Don't Just Shoot Interiors.{' '}
              <span className="block mt-1 text-gold-gradient">
                We Create Content That Brings You More Clients.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional content creation, cinematic 4K reels & architectural photography tailored for{' '}
              <strong className="text-white font-semibold">Interior Designers</strong>,{' '}
              <strong className="text-white font-semibold">Architects</strong>,{' '}
              <strong className="text-white font-semibold">Modular Kitchen Brands</strong>, and{' '}
              <strong className="text-white font-semibold">Furniture Showrooms</strong>.
            </p>

            {/* Locations Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-gray-300">
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
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-xl shadow-xl shadow-[#D4AF37]/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Naresh,%20I%20saw%20your%20website%20and%20want%20to%20book%20a%20free%20consultation%20for%20my%20interior%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 rounded-xl hover:bg-emerald-900/60 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/50"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 border-t border-white/10 max-w-lg">
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

          {/* Right Column: Hero Visual Reel Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E5C158]/40 via-[#D4AF37]/20 to-[#FF7A00]/30 blur-md opacity-70 animate-pulse-glow"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#121418] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Luxury Interior Content Creation by Naresh Budamol"
                  className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* Play Showreel Trigger Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setShowReelModal(true)}
                    className="group/btn relative flex items-center justify-center w-20 h-20 rounded-full bg-gold-gradient p-[2px] shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    aria-label="Play Interior Showreel"
                  >
                    <div className="w-full h-full bg-[#0B0C0E]/80 backdrop-blur-md rounded-full flex items-center justify-center group-hover/btn:bg-black/60 transition-colors">
                      <Play className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37] ml-1" />
                    </div>
                    <span className="absolute -bottom-8 whitespace-nowrap text-[11px] font-bold text-white bg-black/80 px-2.5 py-1 rounded-md border border-white/10">
                      Watch Showreel (1:20)
                    </span>
                  </button>
                </div>

                {/* Floating Bottom Info Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-gold border border-[#D4AF37]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] block">
                      Featured Project
                    </span>
                    <h3 className="text-sm font-bold text-white font-syne">
                      The Oberoi Sky Villa Walkthrough
                    </h3>
                    <p className="text-xs text-gray-300">Mumbai • Nav Design Solutions</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded">
                      +14 Inquiries
                    </span>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-black/80 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md">
                    4K Cinematic Reel
                  </span>
                </div>
              </div>

              {/* Floating Stat Badge Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel-gold p-3.5 rounded-xl border border-[#D4AF37]/40 shadow-2xl hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-lg bg-gold-gradient p-0.5 flex items-center justify-center">
                  <span className="text-black font-extrabold text-sm">4.8x</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">More Direct Enquiries</div>
                  <div className="text-[10px] text-gray-400">Via Instagram & WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Showreel Video Modal */}
      {showReelModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#121418] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#0B0C0E] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-bold text-white">
                  Frame & Shoot Interiors — Showreel 2026
                </span>
              </div>
              <button
                onClick={() => setShowReelModal(false)}
                className="text-gray-400 hover:text-white text-xs bg-white/10 px-3 py-1.5 rounded-lg cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
            <div className="relative aspect-video bg-black flex items-center justify-center p-8 text-center">
              <div className="space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-gold-gradient p-1 mx-auto flex items-center justify-center">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
                <h3 className="text-xl font-bold text-white font-syne">
                  Cinematic Interior Showreel Preview
                </h3>
                <p className="text-xs text-gray-300">
                  Capturing luxury homes, modular kitchens, and furniture showrooms in Mumbai & Hyderabad with 4K clarity, smooth gimbal motion, and high-converting storytelling.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setShowReelModal(false);
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 bg-gold-gradient text-black font-bold text-xs rounded-lg uppercase"
                  >
                    Book Site Shoot
                  </button>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Naresh,%20please%20send%20me%20your%20latest%20reel%20samples%20on%20WhatsApp.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-950 text-emerald-400 border border-emerald-700/50 font-bold text-xs rounded-lg flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Get Sample Reels on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
