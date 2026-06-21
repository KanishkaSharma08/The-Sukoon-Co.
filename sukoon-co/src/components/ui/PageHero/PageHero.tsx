import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import styles from './PageHero.module.scss';

interface PageHeroProps {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  imgSrc?: string; // Kept for interface compatibility but ignored
}

const PageHero: React.FC<PageHeroProps> = ({ index, label, title, subtitle }) => {
  return (
    <section className={styles.hero} id="page-hero">
      <div className={styles.inner}>
        <RevealWrapper as="p" className={styles.index}>
          {index}
        </RevealWrapper>
        {label && (
          <RevealWrapper as="p" className={styles.label} delay={1}>
            {label}
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

