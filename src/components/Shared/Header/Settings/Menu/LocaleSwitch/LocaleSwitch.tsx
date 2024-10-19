import styles from './LocaleSwitch.module.css';
import { useLocale, useTranslations } from 'next-intl';
import { setUserLocale } from '@/helpers/locale';
import { Locale } from '@/i18n/config';
import { useTransition } from 'react';

export function LocaleSwitch() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('Shared');

  return (
    <>
      <select
        className={styles.select}
        name="locale"
        value={locale}
        onChange={(e) => {
          startTransition(() => setUserLocale(e.target.value as Locale));
        }}
      >
        <option className={styles.option} value="ru">
          &#127479;&#127482; Русский
        </option>
        <option className={styles.option} value="en">
          &#127468;&#127463; English
        </option>
      </select>
      <p className={`${styles.hint} ${isPending ? styles.visible : ''}`}>{t('translating')}</p>
    </>
  );
}
