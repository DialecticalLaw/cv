import { Title } from '../Title/Title';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section>
      <Title>Проекты</Title>
      <ul>
        <li className={styles.item}>Project 1</li>
        <li className={styles.item}>Project 2</li>
      </ul>
    </section>
  );
}
