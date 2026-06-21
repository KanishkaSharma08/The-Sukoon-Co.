import React, { useEffect, useState } from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToIntro = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={`${styles.bgContainer} ${loaded ? styles.loaded : ''}`}>
        <video
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=2000&q=85"
        >
          {/* Sample high-quality loop video (mountains/landscape) */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-landscape-of-mountains-with-clouds-40811-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.overlay} />
      </div>
      <div className={styles.eyebrow}>Travel at Ease.</div>
      <h1 className={styles.headline}>
        Travel
        <br />
        with <em>peace.</em>
      </h1>
      <div className={styles.bottom}>
        <p className={styles.desc}>
          Fully customised journeys across India's most extraordinary landscapes. No fixed departures.
          No templates. Only yours.
        </p>
        <button className={styles.scrollIndicator} onClick={scrollToIntro} aria-label="Scroll down">
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
