import { useTranslations } from 'next-intl';
import { Title } from '../Title/Title';
import styles from './Summary.module.css';

export function Summary() {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.section}>
      <Title>{t('summary')}</Title>
      <p>{t('summaryText')}</p>
    </section>
  );
}
