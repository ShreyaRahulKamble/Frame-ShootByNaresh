import React from 'react';
import { Camera, ArrowUp, Heart, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] border-t border-white/10 pt-16 pb-12 relative text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px]">
                <div className="w-full h-full bg-[#0B0C0E] rounded-[11px] flex items-center justify-center">
                  <Camera className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <span className="font-syne font-bold text-lg text-white">
                  FRAME <span className="text-[#D4AF37]">&</span> SHOOT
                </span>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase -mt-1">
                  Interiors by Naresh
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-gray-300">
              Luxury content creation & branding agency for Interior Designers, Architects, Modular Kitchen Brands, and Furniture Showrooms in <strong className="text-white">Mumbai & Hyderabad</strong>.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#14161D] border border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-gray-400 font-medium">
                {BUSINESS_INFO.instagram}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Founder</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Packages & Pricing</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio Gallery</a></li>
              <li><a href="#process" className="hover:text-[#D4AF37] transition-colors">6-Step Process</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">
              Service Offerings
            </h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">4K Site Walkthrough Videos</span></li>
              <li><span className="text-gray-300">Instagram Reel Shoot & Editing</span></li>
              <li><span className="text-gray-300">Architectural Photography</span></li>
              <li><span className="text-gray-300">Modular Kitchen Showreel</span></li>
              <li><span className="text-gray-300">Furniture Showroom Shoot</span></li>
              <li><span className="text-gray-300">Designer Storytelling Videos</span></li>
              <li><span className="text-gray-300">Monthly Brand Retainers</span></li>
            </ul>
          </div>

          {/* Locations & Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">
              Active Hubs
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Mumbai Region</strong>
                  <span className="text-[11px] text-gray-400">All locations across MMR</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Hyderabad Region</strong>
                  <span className="text-[11px] text-gray-400">Jubilee Hills, Gachibowli, HITEC City & More</span>
                </div>
              </div>
              <div className="pt-2 flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+91 9004129974</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Frame & Shoot Interiors by Naresh Budamol. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14161D] text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 border border-white/10 transition-colors cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
