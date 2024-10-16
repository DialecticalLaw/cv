import Image from 'next/image';
import styles from './Intro.module.css';
import locationIcon from '@/assets/img/location.svg';
import { Cloud } from './Cloud/Cloud';

export function Intro() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.name}>Денис Шмураткин</h1>
      <h2 className={styles.role}>&lt;Frontend Developer /&gt;</h2>
      <p className={styles.location}>
        <Image className={styles.icon} src={locationIcon} alt="location" /> Локация: Россия, Сыктывкар
      </p>
      <Cloud />
    </section>
  );
}
