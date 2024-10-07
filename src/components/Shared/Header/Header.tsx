import styles from './Header.module.css';
import Image from 'next/image';
import settingsIcon from '@/assets/img/settings.svg';
import { NavLink } from './NavLink/NavLink';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <NavLink href="/">Обо мне</NavLink>
          <NavLink href="/skills">Навыки</NavLink>
          <NavLink href="/projects">Проекты</NavLink>
        </ul>
      </nav>

      <button className={styles.settings}>
        <Image className={styles.icon} src={settingsIcon} alt="settings" />
      </button>
    </header>
  );
}
