import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import styles from './Experience.module.scss';

const features = [
  'No fixed departures — only private, custom journeys',
  'Solo travellers, couples, families, and groups',
  'Expert local guides in every region',
  'Only vetted, character-rich accommodation',
  'Constant support — we are reachable, always',
  'Fully flexible — plans can change',
];

const Experience: React.FC = () => (
  <section className={styles.section} id="experience">
    <div className={styles.imgWrap}>
      <img
        src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000&q=80"
        alt="Luxury India travel experience"
        className={styles.img}
        loading="lazy"
      />
    </div>
    <div className={styles.content}>
      <RevealWrapper as="p" className="sec-label">
        The Experience
      </RevealWrapper>
      <RevealWrapper as="h2" delay={1} className={`sec-title ${styles.title}`}>
        Everything considered. Nothing left to chance.
      </RevealWrapper>
      <ul className={styles.list}>
        {features.map((f, i) => (
          <RevealWrapper as="li" key={i} delay={((i % 3) + 1) as 1 | 2 | 3} className={styles.item}>
            <span className={styles.bullet} />
            {f}
          </RevealWrapper>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
