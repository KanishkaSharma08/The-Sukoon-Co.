import React from 'react';
import { useModal } from '@/context/ModalContext';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import type { DestCard as DestCardType } from '@/types/destination';
import styles from './DestCard.module.scss';

interface Props {
  card: DestCardType;
}

const DestCard: React.FC<Props> = ({ card }) => {
  const { openModal } = useModal();

  const handleClick = () => {
    if (card.status === 'live' && card.itineraryId) {
      openModal(card.itineraryId);
    }
  };

  return (
    <RevealWrapper
      className={`${styles.card} ${card.status === 'soon' ? styles.locked : ''}`}
      onClick={handleClick}
      style={{ cursor: card.status === 'live' ? 'pointer' : 'default' }}
    >
      <img src={card.imgSrc} alt={card.name} loading="lazy" />
      <div className={styles.overlay}>
        <div className={styles.name}>{card.name}</div>
        <div className={styles.tagline}>{card.tagline}</div>
        {card.status === 'live' && card.priceString && (
          <div className={styles.price}>{card.priceString}</div>
        )}
        {card.status === 'live' && (
          <span className={styles.cta}>View Itinerary →</span>
        )}
      </div>
    </RevealWrapper>
  );
};

export default DestCard;
