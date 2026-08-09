import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Mumbai',
    message: '',});

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    setSubmitted(true);

    const waMsg = `Hi Naresh! Contact Form Enquiry:
• Name: ${formState.name}
• Phone: ${formState.phone}
• Email: ${formState.email || 'N/A'}
• Location: ${formState.location}
• Message: ${formState.message}`;

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0C0E] border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Final CTA Banner Header */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-gold border-2 border-[#D4AF37]/40 mb-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transform Your Interior Business</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white">
              Ready to Turn Every Project <br />
              <span className="text-gold-gradient">Into Your Next Signed Client?</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300">
              Book a site shoot in Mumbai or Hyderabad today and start receiving pre-qualified client enquiries on Instagram & WhatsApp.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:brightness-110 cursor-pointer"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                Direct Contact
              </span>
              <h3 className="text-2xl font-syne font-bold text-white">
                Get In Touch With Naresh Budamol
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Have an upcoming interior handover, newly finished modular kitchen, or furniture showroom launch?
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#121418] border border-white/10 hover:border-[#D4AF37]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Phone Call</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#121418] border border-white/10 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">WhatsApp Direct</span>
                  <span className="text-sm font-bold text-emerald-400">
                    +91 9004129974 (Instant Reply)
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#121418] border border-white/10 hover:border-[#D4AF37]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Official Email</span>
                  <span className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate block">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>

              {/* Service Locations */}
              <div className="p-4 rounded-2xl bg-[#121418] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-glow flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Service Locations</span>
                  <span className="text-sm font-bold text-white">
                    Mumbai & Hyderabad
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#16181E] border border-white/5 text-xs text-gray-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Available Monday – Sunday: 9:00 AM – 8:00 PM IST</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#121418] border border-white/10 rounded-3xl p-6 sm:p-8 relative">
            <h3 className="text-xl font-syne font-bold text-white mb-2">
              Send Direct Inquiry
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Fill out your details below and Naresh will get back to you with available shoot slots.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-gray-300">
                  Opening WhatsApp for instant response...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ar. Sneha Verma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 90000 00000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="designer@studio.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-300 mb-1">Location *</label>
                    <select
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-300 mb-1">Project Details / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project type (1BHK/3BHK/Showroom), handover timeline, or specific shoot requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:brightness-110 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry & Connect on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
