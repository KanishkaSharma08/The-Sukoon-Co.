import React, { useEffect } from 'react';
import PageHero from '@/components/ui/PageHero/PageHero';
import PageMeta from '@/components/ui/PageMeta/PageMeta';
import styles from './AboutPage.module.scss'; // Reuse About page styling

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.subpagePad}>
      <PageMeta
        title="Terms & Conditions — The Sukoon Co"
        description="Booking terms, cancellations, and liability guidelines for journeys designed by The Sukoon Co."
        canonical="/terms"
      />
      <PageHero
        index="Terms"
        label="Legals"
        title={
          <>
            Terms of
            <br />
            our <em>journeys.</em>
          </>
        }
        subtitle="Transparent agreements to ensure clarity, safety, and mutual respect before we build your private trip."
      />

      <section className={styles.section} style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '15px' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>1. Personal Customisation</h2>
          <p style={{ marginBottom: '32px' }}>
            All trips designed by The Sukoon Co. are fully custom, private itineraries. Once an itinerary is finalised, the booking is secured upon receiving the initial booking deposit as agreed in your specific proposal.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>2. Payments &amp; Booking</h2>
          <p style={{ marginBottom: '32px' }}>
            We work with boutique guesthouses, private transports, and local specialists. Due to the limited inventory in remote areas (like Ladakh or Spiti), we require a 50% deposit to initiate all reservations. The remaining balance must be paid 30 days prior to departure, unless specified otherwise.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>3. Cancellations &amp; Refunds</h2>
          <p style={{ marginBottom: '32px' }}>
            If you need to cancel your trip, please inform us in writing as early as possible. Cancellations are subject to vendor cancellation policies. While we do our absolute best to secure refunds from our boutique partners, booking deposits for high-season dates or remote areas are often non-refundable.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>4. Physical Fitness &amp; Risks</h2>
          <p style={{ marginBottom: '32px' }}>
            High-altitude travel (such as Ladakh, Zanskar, and Spiti) carries physiological risks. By booking, you confirm that you are medically fit for high-altitude zones. The Sukoon Co. is not liable for itinerary changes, delays, or cancellations caused by medical emergencies, weather anomalies, landslides, or political blockades.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
