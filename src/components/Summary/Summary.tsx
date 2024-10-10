import { Title } from '../Title/Title';
import styles from './Summary.module.css';

export function Summary() {
  return (
    <section className={styles.section}>
      <Title>Обо мне</Title>
      <p>
        Фронтенд-разработчик, стремящийся найти баланс между функциональностью и эстетикой, создавая интуитивно понятные
        и вдохновляющие пользовательские интерфейсы.
      </p>
    </section>
  );
}
