import Image from 'next/image';
import styles from './Intro.module.css';
import laptopIcon from '@/assets/img/laptop.png';
import { Cloud } from './Cloud/Cloud';
import { useTranslations } from 'next-intl';
import { Waves } from './Waves/Waves';

export function Intro() {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.wrapper}>
      <Waves />
      <Image className={styles.laptop} src={laptopIcon} alt="laptop" />
      <h1 className={styles.name}>{t('name')}</h1>
      <h2 className={styles.role}>&lt;Frontend Developer /&gt;</h2>
      <Cloud />
    </section>
  );
}
