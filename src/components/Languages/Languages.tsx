import { Title } from '../Title/Title';
import styles from './Languages.module.css';

export function Languages() {
  return (
    <section>
      <Title>Языки</Title>
      <ul>
        <li className={styles.item}>Русский - родной</li>
        <li className={styles.item}>Английский - A2</li>
      </ul>
    </section>
  );
}
