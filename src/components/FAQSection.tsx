import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#121418] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Everything you need to know about our site shoots, video deliverables & service locations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-panel-gold border-[#D4AF37]/50 shadow-xl'
                    : 'bg-[#181B22] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold font-syne text-white">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-lg transition-transform ${isOpen ? 'bg-[#D4AF37] text-black' : 'bg-white/5 text-gray-400'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B0C0E] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-syne">Have a specific question about your site?</h4>
            <p className="text-xs text-gray-400">Connect directly with Naresh Budamol on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/919004129974?text=Hi%20Naresh,%20I%20have%20a%20question%20regarding%20an%20interior%20shoot."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 rounded-xl flex items-center gap-2 hover:bg-emerald-900/60"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Naresh on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

