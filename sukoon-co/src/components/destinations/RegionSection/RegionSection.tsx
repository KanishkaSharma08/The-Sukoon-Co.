import React from 'react';
import DestCard from '@/components/destinations/DestCard/DestCard';
import type { Region } from '@/types/destination';
import styles from './RegionSection.module.scss';

interface Props {
  region: Region;
}

const RegionSection: React.FC<Props> = ({ region }) => (
  <section className={`${styles.regionSection} ${region.id === 'phase3' ? 'border-bottom-none' : ''}`} id={region.id}>
    <div className={`${styles.regionHeader} reveal`}>
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
    </div>

    {region.cards.length > 0 && (
      <div className={styles.destGrid}>
        {region.cards.map((card) => (
          <DestCard key={card.id} card={card} />
        ))}
      </div>
    )}

    {region.soonChips.length > 0 && (
      <div className={styles.soonStrip}>
        {region.soonChips.map((chip) => (
          <div key={chip.id} className={styles.soonChip}>
            <img src={chip.imgSrc} alt={chip.name} loading="lazy" />
            <div className={styles.soonChipOverlay}>
              <div className={styles.soonChipName}>{chip.name}</div>
              <div className={styles.soonChipTag}>{chip.tag}</div>
            </div>
            <span className={styles.soonChipLabel}>Soon</span>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default RegionSection;
