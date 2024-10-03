import { Title } from '../Title/Title';
import styles from './Education.module.css';

export function Education() {
  return (
    <section>
      <Title>Образование</Title>
      <ul>
        <li className={styles.item}>Syktyvkar Trade and Economic College</li>
        <li className={styles.item}>RS School Course &quot;JavaScript/Front-end&quot;</li>
      </ul>
    </section>
  );
}
