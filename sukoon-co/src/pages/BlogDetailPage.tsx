import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageMeta from '@/components/ui/PageMeta/PageMeta';
import { featuredStory, stories, getBlogContent } from '@/data/stories';
import { parseMarkdown } from '@/utils/markdown';
import styles from './BlogDetailPage.module.scss';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) return null;

  // Find metadata for this story
  const allStories = [featuredStory, ...stories];
  const storyMeta = allStories.find((s) => s.id === id);

  // If metadata is not found, redirect back to blogs page
  if (!storyMeta) {
    return (
      <div className={styles.container}>
        <div className={styles.errorContent}>
          <h2>Dispatch Not Found</h2>
          <p>The notes you are looking for do not exist or have been moved.</p>
          <Link to="/blogs" className={styles.backBtn}>
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const rawMarkdown = getBlogContent(id);
  const parsedHtml = rawMarkdown ? parseMarkdown(rawMarkdown) : '';

  return (
    <div className={styles.container}>
      <PageMeta
        title={`${storyMeta.title} — The Sukoon Co.`}
        description={storyMeta.excerpt}
        canonical={`/blogs/${id}`}
      />

      <div className={styles.header}>
        <button className={styles.backLink} onClick={() => navigate('/blogs')}>
          ← Back to Blogs
        </button>
        <div className={styles.meta}>
          <span className={styles.tag}>{storyMeta.tag}</span>
          <span className={styles.divider}>·</span>
          <span className={styles.date}>{storyMeta.date}</span>
          {storyMeta.readTime && (
            <>
              <span className={styles.divider}>·</span>
              <span className={styles.readTime}>{storyMeta.readTime}</span>
            </>
          )}
        </div>
        <h1 className={styles.title}>{storyMeta.title}</h1>
      </div>

      <div className={styles.heroImg}>
        <img src={storyMeta.imgSrc} alt={storyMeta.title} />
      </div>

      <article className={styles.article}>
        {parsedHtml ? (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: parsedHtml }}
          />
        ) : (
          <div className={styles.noContent}>
            <p>Writing this story down. Come back soon.</p>
          </div>
        )}
      </article>

      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <h3>Interested in this region?</h3>
          <p>We build fully customized, private journeys here. No templates, only yours.</p>
          <div className={styles.footerActions}>
            <Link to="/#cta" className={styles.footerBtnP}>
              Plan Your Journey
            </Link>
            <button className={styles.footerBtnS} onClick={() => navigate('/blogs')}>
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
