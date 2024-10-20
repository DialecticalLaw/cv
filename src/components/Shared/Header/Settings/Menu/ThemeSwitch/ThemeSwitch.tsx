import { useContext } from 'react';
import styles from './ThemeSwitch.module.css';
import { ThemeContext } from '@/helpers/ThemeContext';

export function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.theme_wrapper}>
      <input
        onChange={() => {
          if (setTheme) setTheme('light');
        }}
        checked={theme === 'light'}
        className={`${styles.input} ${styles.light}`}
        type="radio"
        name="theme"
        value="light"
      />
      <div className={`${styles.sun} invert`} />

      <input
        onChange={() => {
          if (setTheme) setTheme('dark');
        }}
        checked={theme === 'dark'}
        className={`${styles.input} ${styles.dark}`}
        type="radio"
        name="theme"
        value="dark"
      />
      <div className={`${styles.moon} invert`} />
    </div>
  );
}
