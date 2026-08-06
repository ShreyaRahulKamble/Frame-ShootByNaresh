import React, { useState, useEffect } from 'react';
import { Camera, Phone, Menu, X, MapPin, MessageCircle } from 'lucide-react';
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
    { label: 'Why Us', href: '#why-us' },
    { label: 'Packages', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Video', href: '#why-content' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
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
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#996B0B] p-[1px] shadow-lg shadow-[#D4AF37]/10">
              <div className="w-full h-full bg-[#0B0C0E] rounded-[11px] flex items-center justify-center group-hover:bg-[#121418] transition-colors">
                <Camera className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-syne font-bold text-lg tracking-wider text-white">
                  FRAME <span className="text-[#D4AF37]">&</span> SHOOT
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase -mt-1">
                Interiors by Naresh
              </p>
            </div>
          </a>

          {/* Location Badge (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 bg-[#16181E] border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-medium">Serving:</span>
            <span className="text-white font-semibold">Mumbai & Hyderabad</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
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
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Naresh,%20I%20want%20to%20inquire%20about%20interior%20content%20creation%20for%20my%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg hover:bg-emerald-900/60 transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-lg shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              Book Free Consultation
            </button>
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
                onOpenBooking();
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-lg shadow-lg text-center"
            >
              Book Free Consultation
            </button>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Naresh,%20I%20want%20to%20book%20a%20free%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-xs font-bold text-center text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Now (+91 9004129974)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
