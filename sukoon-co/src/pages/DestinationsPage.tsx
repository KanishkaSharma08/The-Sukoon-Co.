import React, { useEffect } from 'react';
import PageHero from '@/components/ui/PageHero/PageHero';
import RegionSection from '@/components/destinations/RegionSection/RegionSection';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import { regions } from '@/data/destinations';
import PageMeta from '@/components/ui/PageMeta/PageMeta';
import { trackEvent } from '@/utils/analytics';
import styles from './DestinationsPage.module.scss';

const DestinationsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subpage-pad">
      <PageMeta
        title="Destinations — The Sukoon Co"
        description="Explore Rajasthan, Ladakh, Kashmir, Kerala, Goa, Spiti Valley and more. Every destination personally visited by our founders. Customised, private journeys — only yours."
        canonical="/destinations"
      />
      <PageHero
        index="02 / Destinations"
        label="Explore India"
        title={
          <>
            Where we <em>take you.</em>
          </>
        }
        subtitle="We launch with three regions, fully lived in. Many more are on the way — each added only once we've walked it ourselves."
      />
      {regions.map((region) => (
        <RegionSection key={region.id} region={region} />
      ))}

      {/* CTA */}
      <section className={styles.ctaSection} id="cta">
        <RevealWrapper as="p" className="sec-label">
          Don't See Your Destination?
        </RevealWrapper>
        <RevealWrapper as="h2" className={styles.ctaH} delay={1}>
          Tell us anyway.
        </RevealWrapper>
        <RevealWrapper as="p" className={styles.ctaSub} delay={2}>
          Our itineraries are starting points, not the full map. If there's somewhere specific you want to go, we'll tell you honestly if it's something we can build well.
        </RevealWrapper>
        <div className={styles.btnGroup}>
          <RevealWrapper delay={3}>
            <a
              href="https://wa.me/917032394455"
              className={styles.btnP}
              onClick={() => trackEvent('click_whatsapp_cta', 'lead_generation', 'destinations_page_cta')}
            >
              WhatsApp Us
            </a>
          </RevealWrapper>
          <RevealWrapper delay={3}>
            <a
              href="mailto:team@sukoonco.com"
              className={styles.btnS}
              onClick={() => trackEvent('click_email_cta', 'lead_generation', 'destinations_page_cta')}
            >
              Email Us
            </a>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
