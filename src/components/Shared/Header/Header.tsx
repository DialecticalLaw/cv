import styles from './Header.module.css';
import { NavLink } from './NavLink/NavLink';
import { Settings } from './Settings/Settings';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <NavLink href="/">summary</NavLink>
          <NavLink href="/skills">skills</NavLink>
          <NavLink href="/projects">projects</NavLink>
        </ul>
      </nav>

      <Settings />
    </header>
  );
}
