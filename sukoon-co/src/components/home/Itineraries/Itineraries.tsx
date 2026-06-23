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

  // Filter to show exactly the 5 specific itineraries in order
  const HOME_ITI_IDS = ['ladakh', 'zanskar', 'himachal', 'kashmir', 'tirupati'];
  const homeItineraries = HOME_ITI_IDS.map(id => {
    const found = itineraries.find(iti => iti.id === id);
    if (found) {
      return {
        ...found,
        isWide: id === 'ladakh', // Make Ladakh wide to span the top row beautifully
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
          Explore All Customised Journeys &amp; Regions →
        </Link>
      </RevealWrapper>
    </section>
  );
};

export default Itineraries;
