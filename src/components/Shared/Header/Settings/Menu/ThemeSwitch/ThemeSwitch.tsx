import { useContext } from 'react';
import styles from './ThemeSwitch.module.css';
import { ThemeContext } from '@/helpers/ThemeContext';

export function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.theme_wrapper}>
      <input
        onChange={(e) => {
          if (setTheme) setTheme(e.target.checked ? 'dark' : 'light');
        }}
        checked={theme === 'dark'}
        className={styles.input}
        type="checkbox"
        name="theme"
      />
      <div className={styles.switch} />
    </div>
  );
}
