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
            href={`https://wa.me/917032394455?text=${encodeURIComponent("Hi, I'd like to enquire about a customised trip with The Sukoon Co.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-s"
            onClick={() => trackEvent('click_whatsapp_cta', 'lead_generation', 'home_footer_whatsapp')}
          >
            WhatsApp Us
          </a>
        </div>
        <p className={styles.contact}>
          Or call us:{' '}
          <a href="tel:+917032394455">+91 70323 94455</a>
          {' · '}
          <a href="tel:+919689833000">+91 96898 33000</a>
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
