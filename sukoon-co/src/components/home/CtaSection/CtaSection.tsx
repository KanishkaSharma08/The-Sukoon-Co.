import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CtaSection.module.scss';

const CtaSection: React.FC = () => (
  <section className={styles.section} id="cta">
    <div className={styles.bgText} aria-hidden="true">
      <span>SUKOON &nbsp; SUKOON &nbsp; SUKOON &nbsp; SUKOON &nbsp;</span>
      <span>SUKOON &nbsp; SUKOON &nbsp; SUKOON &nbsp; SUKOON &nbsp;</span>
    </div>
    <div className={styles.content}>
      <p className={styles.eyebrow}>Begin Here</p>
      <h2 className={styles.title}>
        Ready to find
        <br />
        your <em>sukoon</em>?
      </h2>
      <p className={styles.sub}>
        Tell us who you are, where you want to go, and what you want to feel. We'll take it from
        there.
      </p>
      <div className="btn-group">
        <a href="https://wa.me/91XXXXXXXXXX" className="btn-p">
          Start a Conversation
        </a>
        <Link to="/destinations" className="btn-s">
          Explore Destinations
        </Link>
      </div>
    </div>
  </section>
);

export default CtaSection;
