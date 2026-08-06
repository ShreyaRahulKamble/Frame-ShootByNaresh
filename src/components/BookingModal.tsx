import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MapPin, CheckCircle, Send, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultPackageId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    businessType: 'Interior Designer',
    packageChoice: 'large-site',
    preferredDate: '',
    projectNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultPackageId) {
      setFormData((prev) => ({ ...prev, packageChoice: defaultPackageId }));
    }
  }, [defaultPackageId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);

    // Build pre-filled WhatsApp message
    const msg = `Hi Naresh! I want to book a Free Consultation for my interior project.
    
*Details:*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *City:* ${formData.city}
• *Business:* ${formData.businessType}
• *Selected Package:* ${formData.packageChoice === 'small-site' ? 'Small Site (₹3000)' : formData.packageChoice === 'large-site' ? 'Large Site (₹5000)' : 'Custom Retainer'}
• *Preferred Shoot Date:* ${formData.preferredDate || 'Flexible'}
• *Notes:* ${formData.projectNotes || 'N/A'}`;

    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    // Open WhatsApp in new tab after 1 sec
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#121418] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#0B0C0E] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gold-gradient text-black">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-syne text-white">
                Book Free Consultation
              </h3>
              <p className="text-xs text-gray-400">
                Frame & Shoot Interiors • Mumbai & Hyderabad
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-syne font-bold text-white">
              Consultation Request Received!
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you <strong className="text-white">{formData.name}</strong>. Redirecting you to WhatsApp to instantly confirm shoot details with Naresh Budamol.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Now</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 bg-[#1F242D] text-gray-300 font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-gray-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ar. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">WhatsApp Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 90000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            {/* City & Business Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-gray-300 mb-1">Service City *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">Business Type *</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="Interior Designer">Interior Designer</option>
                  <option value="Architect">Architect / Architectural Firm</option>
                  <option value="Modular Kitchen Brand">Modular Kitchen Manufacturer</option>
                  <option value="Furniture Showroom">Furniture Showroom Owner</option>
                  <option value="Home Interior Business">Home Interior Business</option>
                </select>
              </div>
            </div>

            {/* Package Choice */}
            <div>
              <label className="block font-bold text-gray-300 mb-1">Select Service Package *</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, packageChoice: 'small-site' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formData.packageChoice === 'small-site'
                      ? 'bg-gold-glow border-[#D4AF37] text-white'
                      : 'bg-[#0B0C0E] border-white/10 text-gray-400'
                  }`}
                >
                  <span className="block font-bold">Small Site</span>
                  <span className="text-[#D4AF37] font-syne font-extrabold text-sm">₹3,000</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, packageChoice: 'large-site' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formData.packageChoice === 'large-site'
                      ? 'bg-gold-glow border-[#D4AF37] text-white'
                      : 'bg-[#0B0C0E] border-white/10 text-gray-400'
                  }`}
                >
                  <span className="block font-bold">Large Site</span>
                  <span className="text-[#D4AF37] font-syne font-extrabold text-sm">₹5,000</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, packageChoice: 'custom' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formData.packageChoice === 'custom'
                      ? 'bg-gold-glow border-[#D4AF37] text-white'
                      : 'bg-[#0B0C0E] border-white/10 text-gray-400'
                  }`}
                >
                  <span className="block font-bold">Monthly</span>
                  <span className="text-white font-syne font-bold text-xs">Retainer</span>
                </button>
              </div>
            </div>

            {/* Date & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-gray-300 mb-1">Preferred Shoot Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">Project Site Area / Notes</label>
                <input
                  type="text"
                  placeholder="e.g. 3BHK in Worli or Gachibowli"
                  value={formData.projectNotes}
                  onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:brightness-110 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Open WhatsApp Consultation</span>
              </button>
              <p className="text-[10px] text-gray-500 text-center mt-2">
                Zero spam guarantee. Naresh will respond directly within 15 minutes.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
