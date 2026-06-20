import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrolled } from '@/hooks/useScrolled';
import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const scrolled = useScrolled(60);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="nav">
      <Link to="/" className={styles.logo}>
        The Sukoon Co
      </Link>
      <ul className={styles.links}>
        <li>
          <Link to="/destinations" className={isActive('/destinations') ? styles.current : ''}>
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/#itineraries" className={isActive('/#itineraries') ? styles.current : ''}>
            Itineraries
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about') ? styles.current : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/stories" className={isActive('/stories') ? styles.current : ''}>
            Stories
          </Link>
        </li>
      </ul>
      <Link to="/#cta" className={styles.cta}>
        Plan Your Journey
      </Link>
    </nav>
  );
};

export default Nav;
