import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { openEnquiry } = useModal();

  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.brand}>The Sukoon Co.</div>
        <p className={styles.tag}>
          Boutique customised travel across India. No fixed departures. Only yours.
        </p>
        <div className={styles.contactInfo}>
          <a href="https://www.thesukoonco.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            thesukoonco.in
          </a>
          <span className={styles.separator}>·</span>
          <a href="mailto:team@sukoonco.com" className={styles.contactLink}>
            team@sukoonco.com
          </a>
          <div className={styles.socialRow}>
            <a href="https://instagram.com/thesukoonco.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              @thesukoonco.in
            </a>
          </div>
        </div>
      </div>

      {/* Center logo matching header */}
      <div className={styles.center}>
        <Link to="/" className={styles.logo}>The Sukoon Co.</Link>
      </div>

      <div className={styles.links}>
        <Link to="/destinations">Destinations</Link>
        <Link to="/#itineraries">Itineraries</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
        <button className={styles.enquiryLink} onClick={() => openEnquiry()}>
          Plan a Journey
        </button>
        <a href="mailto:team@sukoonco.com">Contact</a>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© 2025 The Sukoon Co. · thesukoonco.in</span>
        <span className={styles.copy}>Come back quieter.</span>
      </div>
    </footer>
  );
};

export default Footer;
