import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.scss';

const Testimonials: React.FC = () => (
  <section className={styles.section} id="testimonials">
    <RevealWrapper>
      <p className="sec-label">Traveller Stories</p>
      <h2 className="sec-title">In their words.</h2>
    </RevealWrapper>
    <div className={styles.grid}>
      {testimonials.map((t, i) => (
        <RevealWrapper
          key={t.id}
          delay={((i % 3) + 1) as 1 | 2 | 3}
          className={`${styles.card} ${i === 0 ? 'd1' : i === 1 ? 'd2' : i === 2 ? 'd3' : ''}`}
        >
          <div className={styles.stars}>★★★★★</div>
          <p className={styles.quote}>{t.quote}</p>
          <div className={styles.byline}>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.trip}>{t.trip}</div>
          </div>
        </RevealWrapper>
      ))}
    </div>
  </section>
);

export default Testimonials;
