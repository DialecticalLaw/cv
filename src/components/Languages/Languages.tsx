import Image from 'next/image';
import { Title } from '../Title/Title';
import styles from './Languages.module.css';
import russiaIcon from '@/assets/img/flag-ru.svg';
import englandIcon from '@/assets/img/flag-gb.svg';

export function Languages() {
  return (
    <section>
      <Title>Языки</Title>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image className={styles.icon} src={russiaIcon} alt="russia" />
          <b>Русский</b> - родной
        </li>
        <li className={styles.item}>
          <Image className={styles.icon} src={englandIcon} alt="england" />
          <b>Английский</b> - A2
        </li>
      </ul>
    </section>
  );
}
