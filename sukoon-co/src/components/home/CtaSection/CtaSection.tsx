import React from 'react';
import { useModal } from '@/context/ModalContext';
import { trackEvent } from '@/utils/analytics';
import styles from './CtaSection.module.scss';

const CtaSection: React.FC = () => {
  const { openEnquiry } = useModal();

  return (
    <section className={styles.section} id="cta">
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          SUKOON &nbsp;&nbsp;&nbsp; SUKOON &nbsp;&nbsp;&nbsp; SUKOON &nbsp;&nbsp;&nbsp; SUKOON &nbsp;&nbsp;&nbsp; SUKOON &nbsp;&nbsp;&nbsp; SUKOON &nbsp;&nbsp;&nbsp; SUKOON &nbsp;&nbsp;&nbsp; SUKOON &nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <div className={styles.content}>
        <p className="sec-label">Begin Your Journey</p>
        <h2 className={styles.title}>
          Your India,
          <br />
          <em>your pace.</em>
        </h2>
        <p className={styles.sub}>
          Start with a message. Tell us where you want to go, when, and with whom. We build the rest — from scratch, around you.
        </p>
        <div className="btn-group">
          <button
            id="cta-enquire-btn"
            className="btn-p"
            onClick={() => {
              openEnquiry();
              trackEvent('click_cta_plan', 'engagement', 'home_footer_cta');
            }}
          >
            Plan Your Journey
          </button>
          <a
            href={`https://wa.me/919689833000?text=${encodeURIComponent("Hi, I'd like to enquire about a customised trip with The Sukoon Co.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-s"
            onClick={() => trackEvent('click_whatsapp_cta', 'lead_generation', 'home_footer_whatsapp')}
          >
            WhatsApp Us
          </a>
        </div>
        <div className={styles.contactBlock}>
          <span className={styles.contactLabel}>Or call us:</span>
          <div className={styles.contactLinks}>
            <a href="tel:+919689833000" className={styles.phoneLink}>
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.phoneIcon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 96898 33000</span>
              <span className={styles.phoneTag}>(Primary)</span>
            </a>
            <span className={styles.contactDivider}>·</span>
            <a href="tel:+917032394455" className={styles.phoneLink}>
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.phoneIcon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 70323 94455</span>
              <span className={styles.phoneTag}>(Secondary)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
