import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrolled } from '@/hooks/useScrolled';
import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const scrolled = useScrolled(60);
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close menu on route or hash changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled || menuOpen ? styles.scrolled : ''}`} id="nav">
        <Link to="/" className={styles.logo}>
          The Sukoon Co.
        </Link>
        
        {/* Desktop Links */}
        <ul className={styles.links}>
          <li>
            <Link to="/destinations" className={isActive('/destinations') ? styles.current : ''}>
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? styles.current : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={isActive('/blogs') ? styles.current : ''}>
              Stories
            </Link>
          </li>
        </ul>
        
        <Link to="/#cta" className={styles.cta}>
          Plan Your Journey
        </Link>

        {/* Hamburger Menu Toggle Button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerInner}>
          <ul className={styles.drawerLinks}>
            <li>
              <Link to="/destinations" className={isActive('/destinations') ? styles.current : ''}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? styles.current : ''}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={isActive('/blogs') ? styles.current : ''}>
                Stories
              </Link>
            </li>
          </ul>
          <Link to="/#cta" className={styles.drawerCta}>
            Plan Your Journey
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
