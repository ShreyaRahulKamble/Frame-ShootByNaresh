import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutFounder } from './components/AboutFounder';
import { ServicesPricing } from './components/ServicesPricing';
import { ClientLogos } from './components/ClientLogos';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  const handleOpenBooking = (packageName?: string) => {
    const message = packageName
      ? `Hi Naresh, I am interested in the ${packageName} package. Please share available shoot dates and details.`
      : 'Hi Naresh, I saw your website and want to book a free consultation for my interior project.';
    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. About Founder (Naresh Budamol) */}
        <AboutFounder />

        {/* 4. Services & Pricing Packages (Small Site ₹3000 / Large Site ₹5000) */}
        <ServicesPricing onSelectPackage={(pkgName) => handleOpenBooking(pkgName)} />

        {/* 5. Client Logos */}
        <ClientLogos />

        {/* 6. Process Timeline */}
        <ProcessTimeline onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 12 & 13. Final CTA & Contact Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingCTAs />

    </div>
  );
}
