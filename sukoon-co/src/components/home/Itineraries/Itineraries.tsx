import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import ItineraryCard from '@/components/home/ItineraryCard/ItineraryCard';
import { itineraries } from '@/data/itineraries';
import styles from './Itineraries.module.scss';

const Itineraries: React.FC = () => {
  const scrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="itineraries">
      <RevealWrapper className={styles.itiHeader}>
        <div>
          <p className="sec-label" style={{ color: '#8A7355' }}>Signature Journeys</p>
          <h2 className="sec-title" style={{ color: 'var(--black)' }}>Itineraries that linger.</h2>
        </div>
        <a href="#cta" onClick={scrollToCta} className={styles.itiLink}>
          Build Your Own
        </a>
      </RevealWrapper>

      <div className={styles.grid}>
        {itineraries.map((iti, i) => (
          <ItineraryCard key={iti.id} itinerary={iti} delay={i % 2 === 0 ? 1 : 2} />
        ))}
      </div>
    </section>
  );
};

export default Itineraries;
