import React from 'react';
import { Sparkles } from 'lucide-react';

const benefitPoints = [
  {
    category: 'TECHNICAL KNOW-HOW',
    title: '8+ Years Industry Experience',
    description: 'Deep technical understanding of furniture, modular finishes, and premium interior standards.'
  },
  {
    category: 'CONVERSION FOCUSED',
    title: 'Business & Client Understanding',
    description: 'We frame the details that trigger inquiries and help premium clients see the project value clearly.'
  },
  {
    category: '4K CINEMA QUALITY',
    title: 'Premium Cinematic Content',
    description: 'Cinematic visuals crafted with 4K architecture capture, premium lighting, and polished post-production.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative bg-[#121418] border-t border-white/5">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Frame & Shoot Advantage</span>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white leading-[1.05]">
              Why Top Interior <br />
              Brands Choose Us <br />
              <span className="text-gold-gradient">In Mumbai & Hyderabad</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
              We bridge the gap between architectural photography standards and high-converting social media reels.
            </p>
          </div>

          <div className="space-y-6">
            {benefitPoints.map((item) => (
              <div
                key={item.category}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#16181E]/50 p-5 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#181B20]"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(212,175,55,0.28)]">
                  <span className="text-sm leading-none">✦</span>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-syne font-bold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
