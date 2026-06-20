import React from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import styles from './Approach.module.scss';

const steps = [
  { num: '01', title: 'Listen First', desc: 'A conversation about who you are, what you want to feel, and what you\'ve already seen.' },
  { num: '02', title: 'Build From Scratch', desc: 'No templates. A route, a pace, a sequence of experiences designed entirely for you.' },
  { num: '03', title: 'Curate the Details', desc: 'The right lodge. The best local guide. The meal with the right family. None of it is generic.' },
  { num: '04', title: 'Stay With You', desc: 'We\'re reachable throughout. If anything changes, we adapt. You never navigate alone.' },
];

const Approach: React.FC = () => (
  <section className={styles.section} id="approach">
    <div className={styles.left}>
      <RevealWrapper as="p" className="sec-label">
        How We Work
      </RevealWrapper>
      <RevealWrapper as="h2" delay={1} className={`sec-title ${styles.title}`}>
        A different kind of travel company.
      </RevealWrapper>
      <RevealWrapper delay={2}>
        <p className={styles.body}>
          We are a small, focused team. Every journey is personally designed and overseen. We keep
          our numbers small so the quality stays high.
        </p>
      </RevealWrapper>
    </div>
    <div className={styles.steps}>
      {steps.map((s, i) => (
        <RevealWrapper key={s.num} delay={((i % 2) + 1) as 1 | 2} className={styles.step}>
          <div className={styles.stepNum}>{s.num}</div>
          <div className={styles.stepTitle}>{s.title}</div>
          <p className={styles.stepDesc}>{s.desc}</p>
        </RevealWrapper>
      ))}
    </div>
  </section>
);

export default Approach;
