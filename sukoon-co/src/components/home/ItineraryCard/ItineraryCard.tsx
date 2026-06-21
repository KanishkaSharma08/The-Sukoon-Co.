import React from 'react';
import { useModal } from '@/context/ModalContext';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import type { Itinerary } from '@/types/itinerary';
import styles from './ItineraryCard.module.scss';

interface ItineraryCardProps {
  itinerary: Itinerary;
  delay?: 1 | 2 | 3 | 4;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ itinerary, delay }) => {
  const { openModal } = useModal();

  return (
    <RevealWrapper
      className={`${styles.card} ${itinerary.isWide ? styles.wide : ''}`}
      id={itinerary.id}
      onClick={() => openModal(itinerary.id)}
      delay={delay}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={itinerary.imgSrc}
        alt={itinerary.name}
        className={styles.img}
        loading="lazy"
      />
      <div className={styles.overlay}>
        <span className={styles.region}>{itinerary.region}</span>
        <div className={styles.name}>{itinerary.name}</div>
        <div className={styles.meta}>
          <span>{itinerary.cardDuration || itinerary.duration}</span>
          <span>{itinerary.cardRoute || itinerary.route}</span>
        </div>
        <button
          className={styles.btn}
          onClick={(e) => { e.stopPropagation(); openModal(itinerary.id); }}
        >
          View Itinerary →
        </button>
      </div>
    </RevealWrapper>
  );
};

export default ItineraryCard;
