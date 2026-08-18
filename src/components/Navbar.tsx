import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, MessageCircle, Instagram, Youtube } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Founder', href: '#about' },
    { label: 'Packages', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header-inner">
          <div className="brand-cluster">
            <a href="#" className="brand-logo-link group" aria-label="Frame & Shoot Interiors home">
              <img
                src="//assets/logo.jpg"
                alt="Frame & Shoot Interiors"
                className="brand-logo-mark"
                loading="eager"
              />
              <div className="brand-text-block">
                <span className="brand-text-main">FRAME &amp; SHOOT</span>
                <span className="brand-text-sub">INTERIORS</span>
                <span className="brand-text-signoff">BY NARESH</span>
              </div>
            </a>
          </div>

          <div className="header-right-group">
            {/* Location Badge (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 bg-[#16181E] border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-medium">Serving:</span>
              <span className="text-white font-semibold">Mumbai &amp; Hyderabad</span>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-6 shrink-0">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-[#13161A]/80 p-1.5 shadow-lg shadow-black/20">
                <a
                  href="https://www.instagram.com/frame_and_shoot_interiors?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Frame & Shoot Interiors on Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#16181E] text-[#D4AF37] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/40 hover:shadow-[0_0_18px_rgba(212,175,55,0.18)]"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com/@theinteriorandexteriortrends?si=S2QNv35GjCNL20U8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch Frame & Shoot Interiors on YouTube"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#16181E] text-[#FF3B30] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF3B30]/40 hover:shadow-[0_0_18px_rgba(255,59,48,0.18)]"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
              <button
                onClick={() => {
                  const whatsappMessage = encodeURIComponent('Hi Naresh, I want to book a free consultation for my interior project.');
                  window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
                }}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-lg shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden text-[11px] font-bold px-3 py-1.5 rounded-md bg-gold-gradient text-black"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0C0E]/98 backdrop-blur-xl border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 mt-2 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 bg-[#16181E] border border-white/10 rounded-lg p-2.5 text-xs text-gray-300 mb-4">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <div>
              <span className="text-gray-400">Serving Locations: </span>
              <strong className="text-white">Mumbai & Hyderabad</strong>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:bg-[#16181E] hover:text-[#D4AF37] transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const whatsappMessage = encodeURIComponent('Hi Naresh, I want to book a free consultation for my interior project.');
                window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-lg shadow-lg text-center"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

