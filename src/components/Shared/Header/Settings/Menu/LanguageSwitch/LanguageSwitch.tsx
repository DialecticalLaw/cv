import { useState } from 'react';
import styles from './LanguageSwitch.module.css';

type Language = 'russian' | 'english';

export function LanguageSwitch() {
  const [language, setLanguage] = useState<Language>('russian');

  return (
    <select
      className={styles.select}
      name="language"
      value={language}
      onChange={(e) => {
        setLanguage(e.target.value as Language);
      }}
    >
      <option className={styles.option} value="russian">
        &#127479;&#127482; Русский
      </option>
      <option className={styles.option} value="english">
        &#127468;&#127463; English
      </option>
    </select>
  );
}
