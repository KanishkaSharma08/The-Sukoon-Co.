import React, { useState, useEffect } from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import styles from './Intro.module.scss';

const sukoonWords = [
  { word: 'سکون', lang: 'The Urdu word' },
  { word: 'सुकून', lang: 'The Hindi word' },
  { word: 'శాంతి', lang: 'The Telugu word' },
  { word: 'സുകൂൻ', lang: 'The Malayalam word' },
  { word: 'சுகூன்', lang: 'The Tamil word' },
  { word: 'ಸುಕೂನ್', lang: 'The Kannada word' },
  { word: 'सुकून', lang: 'The Marathi word' },
  { word: 'Sukoon', lang: 'The English word' },
];

const Intro: React.FC = () => {
  const [index, setIndex] = useState(-1); // -1 represents the initial HTML markup state
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prev) => {
          if (prev === -1) return 1; // Initial state transitions to index 1 (Hindi) on first tick
          return (prev + 1) % sukoonWords.length;
        });
        setOpacity(1);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const currentWord = index === -1 ? 'सुकून' : sukoonWords[index].word;
  const currentLang = index === -1 ? 'The Hindi word for stillness.' : sukoonWords[index].lang;

  return (
    <section className={styles.section} id="intro">
      <RevealWrapper>
        <p className={styles.introLabel}>Who We Are</p>
        <div style={{ marginBottom: '32px' }}>
          <span
            id="sukoon-word"
            className={styles.sukoonWord}
            style={{ opacity }}
          >
            {currentWord}
          </span>
          <span
            id="sukoon-lang"
            className={styles.sukoonLang}
            style={{ opacity }}
          >
            {currentLang}
          </span>
        </div>
        <h2 className={styles.introH}>
          India isn't a country.
          <br />
          It's <em>six worlds</em>
          <br />
          in one journey.
        </h2>
      </RevealWrapper>

      <RevealWrapper delay={2}>
        <p className={styles.introBody}>
          The Sukoon Co. is a bootstrapped, founder-led boutique travel company built on one belief: the best trip you will ever take is one designed entirely around you. Not a template. Not a group departure. Not the same 7-day package sold by a hundred operators.
          <br />
          <br />
          Every destination we offer is one we have personally been to — multiple times, across different seasons, with our own two feet on the ground.
        </p>

        <div className={styles.stats}>
          <div>
            <div className={styles.statN}>8</div>
            <div className={styles.statL}>Curated Itineraries</div>
          </div>
          <div>
            <div className={styles.statN}>3</div>
            <div className={styles.statL}>Regions at Launch</div>
          </div>
          <div>
            <div className={styles.statN}>100%</div>
            <div className={styles.statL}>Custom, Always</div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
};

export default Intro;
