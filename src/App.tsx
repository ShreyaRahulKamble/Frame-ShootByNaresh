import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutFounder } from './components/AboutFounder';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesPricing } from './components/ServicesPricing';
import { ClientLogos } from './components/ClientLogos';
import { SocialMediaSection } from './components/SocialMediaSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';

export default function App() {
  const handleOpenBooking = () => {
    const whatsappMessage = encodeURIComponent('Hi Naresh, I want to book a free consultation for my interior project.');
    window.open(`https://wa.me/919004129974?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. About Founder (Naresh Budamol) */}
        <AboutFounder />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Services & Pricing Packages (Small Site ₹3000 / Large Site ₹5000) */}
        <ServicesPricing onSelectPackage={handleOpenBooking} />

        {/* 6. Client Logos */}
        <ClientLogos />

        {/* 7. Social Media */}
        <SocialMediaSection />

        {/* 8. Process Timeline */}
        <ProcessTimeline onOpenBooking={handleOpenBooking} />

        {/* 9. Final CTA & Contact Section */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingCTAs />
    </div>
  );
}
