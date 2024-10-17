import { useState } from 'react';
import styles from './ThemeSwitch.module.css';

export function ThemeSwitch() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  return (
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
  );
}
