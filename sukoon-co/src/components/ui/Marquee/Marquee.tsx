import React from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  items: Array<{ label: string }>;
  dark?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ items, dark = false }) => (
  <div className={`${styles.wrap} ${dark ? styles.dark : ''}`}>
    <div className={styles.track}>
      {[...items, ...items].map((item, i) => (
        <span className={styles.item} key={i}>
          {item.label} <span className={styles.sep}>·</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
