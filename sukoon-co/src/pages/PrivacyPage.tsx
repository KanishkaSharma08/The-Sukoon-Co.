import React, { useEffect } from 'react';
import PageHero from '@/components/ui/PageHero/PageHero';
import PageMeta from '@/components/ui/PageMeta/PageMeta';
import styles from './AboutPage.module.scss'; // Reuse About page minimal sections styling

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.subpagePad}>
      <PageMeta
        title="Privacy Policy — The Sukoon Co"
        description="How we protect and manage your personal travel planning information at The Sukoon Co."
        canonical="/privacy"
      />
      <PageHero
        index="Privacy"
        label="Legals"
        title={
          <>
            Our Commitment
            <br />
            to your <em>privacy.</em>
          </>
        }
        subtitle="We treat your travel ideas, phone numbers, and inbox with the same care we treat our own. No spam, no selling. Ever."
      />

      <section className={styles.section} style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '15px' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '32px' }}>
            We only collect information that you voluntarily provide to us when submitting our Enquiry Form or chatting with us on WhatsApp. This includes your name, email address, phone number, group size, and details about your travel preferences.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>2. How We Use It</h2>
          <p style={{ marginBottom: '32px' }}>
            We use your information exclusively to craft your custom travel itineraries, manage bookings with boutique vendors, and communicate with you about your journey. We do not use your information for automated newsletters or marketing campaigns unless you explicitly subscribe.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>3. Data Sharing</h2>
          <p style={{ marginBottom: '32px' }}>
            We share relevant details (like names for room reservations or transport logistics) only with verified, high-quality ground operators and boutique hotels that are directly involved in executing your specific trip. We will never sell, trade, or distribute your email or phone number to third-party databases.
          </p>

          <h2 style={{ color: 'var(--white)', fontSize: '24px', marginBottom: '24px', letterSpacing: '-0.02em' }}>4. Your Rights</h2>
          <p style={{ marginBottom: '32px' }}>
            You can request details about the personal data we hold about you or request its absolute removal from our records at any time. Simply write to us at <a href="mailto:team@sukoonco.com" style={{ color: 'var(--gold)' }}>team@sukoonco.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
