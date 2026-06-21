import React from 'react';
import { useNavigate } from 'react-router-dom';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import type { DestCard as DestCardType } from '@/types/destination';
import styles from './DestCard.module.scss';

interface Props {
  card: DestCardType;
}

const DestCard: React.FC<Props> = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (card.status === 'live' && card.itineraryId) {
      navigate(`/#${card.itineraryId}`);
    }
  };

  const isFeatureOrWide = card.size === 'feature' || card.size === 'wide';

  return (
    <RevealWrapper
      className={`${styles.card} ${styles[`size-${card.size}`]} ${card.status === 'soon' ? styles.locked : ''}`}
      onClick={handleClick}
    >
      <img src={card.imgSrc} alt={card.name} loading="lazy" />
      {card.status === 'live' && (
        <div className={styles.livePill}>Live</div>
      )}
      <div className={`${styles.overlay} ${isFeatureOrWide ? styles.sizeFeatureOrWide : ''}`}>
        <div className={styles.name}>{card.name}</div>
        <div className={styles.tagline}>{card.tagline}</div>
        {card.status === 'live' && (
          <span className={styles.cta}>View Itinerary →</span>
        )}
      </div>
    </RevealWrapper>
  );
};

export default DestCard;
