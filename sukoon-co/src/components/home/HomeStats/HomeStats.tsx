import React, { useEffect, useState } from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import styles from './HomeStats.module.scss';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = '', duration = 1400 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const frames = 40;
    const interval = duration / frames;
    let frame = 0;

    const rand = () => Math.floor(Math.random() * (target + 1));

    const timer = setInterval(() => {
      frame++;
      const progress = frame / frames;
      if (frame < frames - 6) {
        // Random scramble phase
        setValue(rand());
      } else {
        // Settle to final value with cubic easing out
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
      }

      if (frame >= frames) {
        clearInterval(timer);
        setValue(target);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{value}{suffix}</>;
};

const HomeStats: React.FC = () => {
  return (
    <section className={styles.section} id="home-stats">
      <div className={styles.stat}>
        <span className={styles.number}>
          <Counter target={14} />
        </span>
        <span className={styles.label}>Itineraries Live</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.stat}>
        <span className={styles.number}>
          <Counter target={2} />
        </span>
        <span className={styles.label}>Regions at Launch</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.stat}>
        <span className={styles.number}>
          <Counter target={100} suffix="%" />
        </span>
        <span className={styles.label}>Custom, Always</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.stat}>
        <span className={styles.number}>
          <Counter target={6} suffix="+ Phases" />
        </span>
        <span className={styles.label}>Regions Planned</span>
      </div>
    </section>
  );
};

export default HomeStats;
