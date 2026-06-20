import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import ItineraryCard from '@/components/home/ItineraryCard/ItineraryCard';
import { itineraries } from '@/data/itineraries';
import styles from './Itineraries.module.scss';

const Itineraries: React.FC = () => (
  <section className={styles.section} id="itineraries">
    <RevealWrapper as="p" className="sec-label">
      Where We Go
    </RevealWrapper>
    <RevealWrapper as="h2" delay={1} className={`sec-title ${styles.title}`}>
      Our current journeys.
    </RevealWrapper>
    <RevealWrapper delay={2} className={styles.sub}>
      <p>
        Every itinerary is a starting point. We customise every detail — from the vehicle to the
        guide to the tea stop.
      </p>
    </RevealWrapper>

    <div className={styles.grid}>
      {itineraries.map((iti, i) => (
        <ItineraryCard key={iti.id} itinerary={iti} delay={i % 2 === 0 ? 1 : 2} />
      ))}
    </div>
  </section>
);

export default Itineraries;
