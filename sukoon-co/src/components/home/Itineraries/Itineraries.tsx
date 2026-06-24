import React from 'react';
import { Link } from 'react-router-dom';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import ItineraryCard from '@/components/home/ItineraryCard/ItineraryCard';
import { itineraries } from '@/data/itineraries';
import styles from './Itineraries.module.scss';

const Itineraries: React.FC = () => {
  const scrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter to show exactly the 6 specific itineraries in order
  const HOME_ITI_IDS = [
    'ladakh-essential',
    'complete-ladakh',
    'changthang',
    'zanskar-escape',
    'zanskar-deep',
    'himalayan-traverse',
  ];
  const homeItineraries = HOME_ITI_IDS.map(id => {
    const found = itineraries.find(iti => iti.id === id);
    if (found) {
      return {
        ...found,
        isWide: false, // Clean 2-column uniform grid matching sukoon-latest.html
      };
    }
    return null;
  }).filter(Boolean);

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
        {homeItineraries.map((iti, i) => (
          iti && <ItineraryCard key={iti.id} itinerary={iti} delay={(i % 2 === 0 ? 1 : 2) as any} />
        ))}
      </div>

      <RevealWrapper delay={2} className={styles.viewAllContainer}>
        <Link to="/destinations" className={styles.viewAllBtn}>
          View All Destinations →
        </Link>
      </RevealWrapper>
    </section>
  );
};

export default Itineraries;
