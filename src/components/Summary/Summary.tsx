import { useTranslations } from 'next-intl';
import { Title } from '../Title/Title';
import styles from './Summary.module.css';
import locationIcon from '@/assets/img/location.svg';
import Image from 'next/image';

export function Summary() {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.section}>
      <Title>{t('summary')}</Title>
      <p className={styles.summary}>{t('summaryText')}</p>
      <p className={styles.location}>
        <Image className={`${styles.icon} invert`} src={locationIcon} alt="location" /> {t('location')}
      </p>
    </section>
  );
}
