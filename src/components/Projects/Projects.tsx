import styles from './Projects.module.css';

export function Projects() {
  return (
    <section>
      <ul>
        <li className={styles.item}>Project 1</li>
        <li className={styles.item}>Project 2</li>
      </ul>
    </section>
  );
}
