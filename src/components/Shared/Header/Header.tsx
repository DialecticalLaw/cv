import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import settingsIcon from '@/assets/img/settings.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} href="/">
              Обо мне
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} href="/skills">
              Навыки
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} href="/projects">
              Проекты
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.settings}>
        <Image className={styles.icon} src={settingsIcon} alt="settings" />
      </button>
    </header>
  );
}
