import React, { useEffect } from 'react';
import PageHero from '@/components/ui/PageHero/PageHero';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import { featuredStory, stories } from '@/data/stories';
import PageMeta from '@/components/ui/PageMeta/PageMeta';
import styles from './StoriesPage.module.scss';

const StoriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.subpagePad}>
      <PageMeta
        title="Field Notes — The Sukoon Co"
        description="Honest dispatches from the road. Stories about travelling slow, travelling right, and coming back quieter. Read about India’s extraordinary places from people who live there."
        canonical="/stories"
      />
      {/* PAGE HERO */}
      <PageHero
        index="03 / Stories"
        label="From The Road"
        title={
          <>
            Dispatches from places
            <br />
            we've actually <em>been.</em>
          </>
        }
        subtitle="Field notes, route diaries, and honest accounts from the valleys, passes, and ghats we send travellers to."
      />

      {/* FEATURED */}
      <section className={styles.featured} id="featured">
        <RevealWrapper
          as="a"
          role="button"
          tabIndex={0}
          onClick={(e) => e.preventDefault()}
          className={styles.featuredLink}
        >
          <div className={styles.featuredImg}>
            <img src={featuredStory.imgSrc} alt="Zanskar frozen river" />
          </div>
          <div className={styles.featuredText}>
            <div className={styles.featuredMeta}>
              <span className={styles.featuredTag}>{featuredStory.tag}</span>
              <span className={styles.featuredDate}>{featuredStory.date}</span>
            </div>
            <h2 className={styles.featuredTitle}>{featuredStory.title}</h2>
            <p className={styles.featuredExcerpt}>{featuredStory.excerpt}</p>
            <span className={styles.featuredReadtime}>{featuredStory.readTime}</span>
          </div>
        </RevealWrapper>
      </section>

      {/* STORY GRID */}
      <section className={styles.gridSection} id="story-grid">
        <div className={styles.gridHeader}>
          <div>
            <p className="ph-label">More Stories</p>
            <h2
              className="sec-title"
              style={{
                fontSize: 'clamp(24px,2.8vw,34px)',
                fontWeight: 800,
                letterSpacing: '-.02em',
              }}
            >
              Recent dispatches.
            </h2>
          </div>
          <span className={styles.editionLine}>Issue No. 04 — Field Notes</span>
        </div>

        <div className={styles.storyGrid}>
          {stories.map((story, i) => (
            <RevealWrapper
              as="a"
              key={story.id}
              role="button"
              tabIndex={0}
              onClick={(e) => e.preventDefault()}
              className={styles.storyRow}
              delay={i > 0 ? (i as 1 | 2 | 3 | 4) : undefined}
            >
              <span className={styles.storyIndex}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className={styles.storyImg}>
                <img src={story.imgSrc} alt={story.title} />
              </div>
              <div className={styles.storyBody}>
                <div className={styles.storyMeta}>
                  <span className={styles.storyTag}>{story.tag}</span>
                  <span className={styles.storyDate}>{story.date}</span>
                </div>
                <h3 className={styles.storyTitle}>{story.title}</h3>
                <p className={styles.storyExcerpt}>{story.excerpt}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className={styles.newsletter} id="newsletter">
        <RevealWrapper as="h2" className={styles.nlTitle}>
          Get a story a month.
        </RevealWrapper>
        <RevealWrapper as="p" className={styles.nlSub} delay={1}>
          No itinerary pitches, no sales. Just one honest dispatch from wherever we are, sent
          when there's something worth saying.
        </RevealWrapper>
        <RevealWrapper delay={2}>
          <form
            className={styles.nlForm}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks — we will be in touch.');
            }}
          >
            <input
              type="email"
              className={styles.nlInput}
              placeholder="Your email address"
              required
            />
            <button type="submit" className={styles.nlBtn}>
              Subscribe
            </button>
          </form>
        </RevealWrapper>
      </section>
    </div>
  );
};

export default StoriesPage;
