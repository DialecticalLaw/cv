import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#contacts">
              Контакты
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#summary">
              Обо мне
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#skills">
              Навыки
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#education">
              Образование
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#languages">
              Языки
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#projects">
              Проекты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
