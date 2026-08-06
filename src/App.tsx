import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutFounder } from './components/AboutFounder';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesPricing } from './components/ServicesPricing';
import { PortfolioSection } from './components/PortfolioSection';
import { ClientLogos } from './components/ClientLogos';
import { WhyContentMatters } from './components/WhyContentMatters';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (packageId?: string) => {
    setSelectedPackageId(packageId);
    setBookingOpen(true);
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

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Services & Pricing Packages (Small Site ₹3000 / Large Site ₹5000) */}
        <ServicesPricing onSelectPackage={(pkgId) => handleOpenBooking(pkgId)} />

        {/* 6. Portfolio Section */}
        <PortfolioSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Client Logos */}
        <ClientLogos />

        {/* 8. Why Content Matters */}
        <WhyContentMatters onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Process Timeline */}
        <ProcessTimeline onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12 & 13. Final CTA & Contact Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingCTAs />

      {/* Booking Consultation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultPackageId={selectedPackageId}
      />
    </div>
  );
}
