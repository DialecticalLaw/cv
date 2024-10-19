'use client';

import Image from 'next/image';
import styles from './Intro.module.css';
import locationIcon from '@/assets/img/location.svg';
import { Cloud } from './Cloud/Cloud';
import { useTranslations } from 'next-intl';

export function Intro() {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.name}>{t('name')}</h1>
      <h2 className={styles.role}>&lt;Frontend Developer /&gt;</h2>
      <p className={styles.location}>
        <Image className={`${styles.icon} invert`} src={locationIcon} alt="location" /> {t('location')}
      </p>
      <Cloud />
    </section>
  );
}
