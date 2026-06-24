import React from 'react';
import DestCard from '@/components/destinations/DestCard/DestCard';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import type { Region } from '@/types/destination';
import styles from './RegionSection.module.scss';

interface Props {
  region: Region;
}

const RegionSection: React.FC<Props> = ({ region }) => (
  <section className={`${styles.regionSection} ${region.id === 'dest-soon' ? 'border-bottom-none' : ''}`} id={region.id}>
    <RevealWrapper className={styles.regionHeader}>
      <div className={styles.regionHeaderLeft}>
        <span className={styles.regionNum}>{region.num}</span>
        <div>
          <p className="sec-label">{region.label}</p>
          <h2 className="sec-title">{region.title}</h2>
        </div>
      </div>
      <span className={`${styles.regionStatus} ${region.statusType === 'soon' ? styles.soon : ''}`}>
        {region.status}
      </span>
    </RevealWrapper>

    {region.cards.length > 0 && (
      <div className={styles.destGrid}>
        {region.cards.map((card) => (
          <DestCard key={card.id} card={card} />
        ))}
      </div>
    )}

    {region.soonChips.length > 0 && (
      <div className={styles.soonGrid}>
        {region.soonChips.map((chip, idx) => (
          <RevealWrapper
            key={chip.id}
            className={styles.soonCard}
            as="div"
            delay={idx % 4 > 0 ? (idx % 4 as 1 | 2 | 3) : undefined}
          >
            <div className={styles.soonCardImg}>
              <img src={chip.imgSrc} alt={chip.name} loading="lazy" />
            </div>
            <div className={styles.soonCardBody}>
              <span className={styles.soonPill}>Soon</span>
              <div className={styles.soonName}>{chip.name}</div>
              <div className={styles.soonRoutes}>{chip.tag}</div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    )}
  </section>
);

export default RegionSection;
