'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Menu.module.css';

type Language = 'russian' | 'english';

export function Menu({ isOpen, setOpen }: { isOpen: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [language, setLanguage] = useState<Language>('russian');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isOpen) return;
      if (!menuRef.current?.contains(e.target as HTMLElement | null)) setOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, setOpen]);

  return (
    <div ref={menuRef} className={`${styles.wrapper} ${isOpen ? styles.visible : ''}`}>
      <select
        name="language"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value as Language);
        }}
      >
        <option value="russian">Русский</option>
        <option value="english">English</option>
      </select>

      <div className={styles.theme_wrapper}>
        <input
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
          className={styles.input}
          type="checkbox"
          name="theme"
        />
        <div className={styles.switch} />
      </div>
    </div>
  );
}
