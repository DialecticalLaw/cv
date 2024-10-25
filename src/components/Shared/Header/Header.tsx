'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import { NavLink } from './NavLink/NavLink';
import { Settings } from './Settings/Settings';

export function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${isNavOpen ? styles.active : ''}`}>
        <ul className={styles.nav_list}>
          <NavLink href="/">summary</NavLink>
          <NavLink href="/skills">skills</NavLink>
          <NavLink href="/projects">projects</NavLink>
        </ul>
      </nav>

      <button
        onClick={() => setNavOpen((prev) => !prev)}
        className={`${styles.open_btn} ${isNavOpen ? styles.active : ''} invert`}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>

      <Settings />
    </header>
  );
}
