import styles from './Languages.module.css';

export function Languages() {
  return (
    <section>
      <ul>
        <li className={styles.item}>Русский - родной</li>
        <li className={styles.item}>Английский - A2</li>
      </ul>
    </section>
  );
}
