import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { openEnquiry } = useModal();

  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.brand}>The Sukoon Co</div>
        <p className={styles.tag}>
          Boutique customised travel across India. No fixed departures. Only yours.{'\n\n'}
          thesukoonco.in · hello@thesukoonco.in{'\n'}@thesukoonco
        </p>
      </div>

      {/* Center logo matching header */}
      <div className={styles.center}>
        <Link to="/" className={styles.logo}>The Sukoon Co</Link>
      </div>

      <div className={styles.links}>
        <Link to="/destinations">Destinations</Link>
        <Link to="/#itineraries">Itineraries</Link>
        <Link to="/about">About</Link>
        <Link to="/stories">Stories</Link>
        <button className={styles.enquiryLink} onClick={() => openEnquiry()}>
          Plan a Journey
        </button>
        <a href="mailto:hello@thesukoonco.in">Contact</a>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© 2025 The Sukoon Co. · thesukoonco.in</span>
        <span className={styles.copy}>Come back quieter.</span>
      </div>
    </footer>
  );
};

export default Footer;
