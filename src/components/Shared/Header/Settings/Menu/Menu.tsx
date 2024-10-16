'use client';

import { useEffect, useState } from 'react';
import styles from './Menu.module.css';

type Language = 'russian' | 'english';

export function Menu() {
  const [language, setLanguage] = useState<Language>('russian');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className={styles.wrapper}>
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
