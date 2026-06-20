import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import styles from './PageHero.module.scss';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  imgSrc?: string; // Kept for interface compatibility but ignored
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle }) => {
  // Extract index from eyebrow if in "XX / Name" format
  const match = eyebrow.match(/^(\d+\s*\/\s*[\w\s]+)\b(.*)$/i);
  let indexStr = eyebrow;
  let labelStr = '';

  if (match) {
    indexStr = match[1];
    labelStr = match[2].trim() || '';
  }

  // Fallback map if needed:
  if (eyebrow.includes('About')) {
    indexStr = '01 / About Us';
    labelStr = 'The Sukoon Co.';
  } else if (eyebrow.includes('Destinations')) {
    indexStr = '02 / Destinations';
    labelStr = 'Explore India';
  } else if (eyebrow.includes('Stories')) {
    indexStr = '03 / Stories';
    labelStr = 'From The Road';
  }

  return (
    <section className={styles.hero} id="page-hero">
      <div className={styles.inner}>
        <RevealWrapper as="p" className={styles.index}>
          {indexStr}
        </RevealWrapper>
        {labelStr && (
          <RevealWrapper as="p" className={styles.label} delay={1}>
            {labelStr}
          </RevealWrapper>
        )}
        <RevealWrapper as="h1" className={styles.title} delay={2}>
          {title}
        </RevealWrapper>
        {subtitle && (
          <RevealWrapper as="p" className={styles.sub} delay={3}>
            {subtitle}
          </RevealWrapper>
        )}
      </div>
    </section>
  );
};

export default PageHero;
