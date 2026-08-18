import React from 'react';
import { ArrowRight, Instagram, Play, Sparkles } from 'lucide-react';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/frame_and_shoot_interiors?utm_source=qr',
  youtube: 'https://youtube.com/@theinteriorandexteriortrends?si=S2QNv35GjCNL20U8',
};

export const SocialMediaSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0B0C0E] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_45%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOLLOW THE WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white leading-tight">
            See More of <span className="text-gold-gradient">Our Work</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Follow our latest interior shoots, cinematic reels, architectural photography and behind-the-scenes work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Frame & Shoot Interiors on Instagram"
            className="group block rounded-[28px] border border-white/10 bg-[#121418]/80 p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-5 hover:border-[#D4AF37]/40 hover:shadow-[0_28px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#fdf2f8]/10 via-[#f9a8d4]/10 to-[#fdba74]/10 text-[#F9A8D4] shadow-[0_0_24px_rgba(249,168,212,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(249,168,212,0.28)]">
                  <Instagram className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] opacity-90">
                    Instagram
                  </div>
                  <div className="mt-2 text-sm text-gray-300">@frame_and_shoot_interiors</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl sm:text-[2rem] font-syne font-extrabold text-white leading-tight">
                Explore our latest interior shoots, reels & visual stories.
              </p>

              <div className="pt-4 border-t border-white/10">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1">
                  Visit Instagram <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </a>

          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Frame & Shoot Interiors on YouTube"
            className="group block rounded-[28px] border border-white/10 bg-[#121418]/80 p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-5 hover:border-[#FF3B30]/40 hover:shadow-[0_28px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FF3B30]/20 bg-gradient-to-br from-[#fee2e2]/10 via-[#fca5a5]/10 to-[#ef4444]/10 text-[#FF6B6B] shadow-[0_0_24px_rgba(255,59,48,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(255,59,48,0.28)]">
                  <Play className="h-8 w-8 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] opacity-90">
                    YouTube
                  </div>
                  <div className="mt-2 text-sm text-gray-300">The Interior & Exterior Trends</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl sm:text-[2rem] font-syne font-extrabold text-white leading-tight">
                Watch cinematic walkthroughs, interior showcases and video content.
              </p>

              <div className="pt-4 border-t border-white/10">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1">
                  Watch on YouTube <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
