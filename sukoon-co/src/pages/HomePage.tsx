import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero/Hero';
import Intro from '@/components/home/Intro/Intro';
import Marquee from '@/components/ui/Marquee/Marquee';
import LogoMap from '@/components/home/LogoMap/LogoMap';
import Itineraries from '@/components/home/Itineraries/Itineraries';
import Experience from '@/components/home/Experience/Experience';
import Testimonials from '@/components/home/Testimonials/Testimonials';
import CtaSection from '@/components/home/CtaSection/CtaSection';
import ItineraryModal from '@/components/home/ItineraryModal/ItineraryModal';
import PageMeta from '@/components/ui/PageMeta/PageMeta';
import { useLocation } from 'react-router-dom';

const marqueeItems = [
  { label: 'Himalayan Expeditions' },
  { label: 'Rajasthan Forts' },
  { label: 'Tiger Safaris' },
  { label: 'South India Temples' },
  { label: 'Kerala Backwaters' },
  { label: 'Goa Coastlines' },
  { label: 'Bespoke Travel' },
];

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Let any rendering complete first
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <PageMeta
        title="The Sukoon Co — Luxury Customised Travel Across India"
        description="Boutique customised journeys across Rajasthan, Ladakh, Kashmir, Kerala & more. No fixed departures — only yours. Call +91 70323 94455."
        canonical="/"
      />
      <Hero />
      <Marquee items={marqueeItems} />
      <Intro />
      <LogoMap />
      <Itineraries />
      <Experience />
      <Testimonials />
      <CtaSection />
      <ItineraryModal />
    </>
  );
};

export default HomePage;
