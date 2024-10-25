'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { NavLink } from './NavLink/NavLink';
import { Settings } from './Settings/Settings';

export function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isNavOpen) return;
      if (!navRef.current?.contains(e.target as HTMLElement | null)) setNavOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isNavOpen]);

  return (
    <header className={styles.header}>
      <nav ref={navRef} className={`${styles.nav} ${isNavOpen ? styles.active : ''}`}>
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
