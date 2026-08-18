import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import { PortfolioItem } from '../types';
import { Sparkles, MapPin, Film, Camera, Eye, X, Play, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onOpenBooking: () => void;
}

export const PortfolioSection: React.FC<PortfolioProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Luxury Homes',
    'Apartments',
    'Modular Kitchens',
    'Furniture Showrooms',
    'Commercial Projects',
    'Office Interiors'
  ];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#121418] border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Camera className="w-3.5 h-3.5" />
            <span>Curated Portfolio • Mumbai & Hyderabad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            Framing Exceptional Spaces <br />
            <span className="text-gold-gradient">Shot by Naresh Budamol</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Explore recent walkthroughs, architectural photos & viral Instagram reels created for interior studios & furniture showrooms.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-black shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#181B22] text-gray-300 border border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#181B22] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Top Location Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{item.location}</span>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#D4AF37] text-black text-[10px] font-extrabold uppercase tracking-wider">
                  {item.categoryLabel}
                </div>

                {/* Hover Play/View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold-gradient p-0.5 shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                    <div className="w-full h-full bg-black/80 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37] ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold">
                  <span>Client: {item.client}</span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="flex items-center gap-1">
                      <Film className="w-3 h-3 text-[#D4AF37]" />
                      {item.reelsCount} Reels
                    </span>
                    <span className="flex items-center gap-1">
                      <Camera className="w-3 h-3 text-[#D4AF37]" />
                      {item.photosCount} Photos
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold font-syne text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-2 text-[11px] font-bold text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Project Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Bottom Box */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-xs text-gray-400">
            Have a completed project in Mumbai or Hyderabad that needs high-converting content?
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:brightness-110 cursor-pointer"
          >
            Shoot My Project Now
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#121418] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 bg-[#0B0C0E] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  {selectedItem.categoryLabel} • {selectedItem.location}
                </span>
                <h3 className="text-lg font-bold text-white font-syne">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 rounded-md border border-white/10 text-xs font-bold text-[#D4AF37]">
                  4K Ultra HD Interior Shoot
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white font-syne">Project Overview</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px]">Client / Designer:</span>
                  <strong className="text-white">{selectedItem.client}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Location:</span>
                  <strong className="text-white">{selectedItem.location}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Reel Videos:</span>
                  <strong className="text-[#D4AF37]">{selectedItem.reelsCount} Edited Reels</strong>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Deliverables Produced:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.deliverables.map((del, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#1D2028] text-xs font-medium text-gray-200 border border-white/10">
                      ✔ {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0B0C0E] border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400 hidden sm:inline">
                Want a similar shoot for your project?
              </span>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider rounded-lg cursor-pointer"
              >
                Book Shoot Like This
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

