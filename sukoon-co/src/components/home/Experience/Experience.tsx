import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import styles from './Experience.module.scss';

const Experience: React.FC = () => (
  <section className={styles.section} id="experience">
    <RevealWrapper className={styles.imgWrap}>
      <img
        src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=900&q=80"
        alt="Luxury heritage hotel"
        className={styles.img}
        loading="lazy"
      />
    </RevealWrapper>
    <RevealWrapper className={styles.content} delay={2}>
      <p className="sec-label">The Sukoon Difference</p>
      <h2 className={`sec-title ${styles.title}`} style={{ color: 'var(--white)' }}>
        What peace of mind actually looks like.
      </h2>
      <div className={styles.featList}>
        <div className={styles.feat}>
          <div className={styles.featIco}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <div className={styles.featTitle}>Handpicked Properties Only</div>
            <p className={styles.featBody}>
              We have stayed in every property we recommend. No surprises, no compromises.
            </p>
          </div>
        </div>

        <div className={styles.feat}>
          <div className={styles.featIco}>
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <div className={styles.featTitle}>Your Time, Protected</div>
            <p className={styles.featBody}>
              Unhurried pacing, generous check-in windows, and private transfers.
            </p>
          </div>
        </div>

        <div className={styles.feat}>
          <div className={styles.featIco}>
            <svg viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <div className={styles.featTitle}>Local Guides, Not Scripts</div>
            <p className={styles.featBody}>
              Our guides are storytellers. They take you behind the velvet rope of India's living culture.
            </p>
          </div>
        </div>

        <div className={styles.feat}>
          <div className={styles.featIco}>
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 6 6l.85-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <div className={styles.featTitle}>24/7 Sukoon Concierge</div>
            <p className={styles.featBody}>One number, one person, always on.</p>
          </div>
        </div>
      </div>
    </RevealWrapper>
  </section>
);

export default Experience;
