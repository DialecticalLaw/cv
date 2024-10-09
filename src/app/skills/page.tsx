import { HardSkills } from '@/components/HardSkills/HardSkills';
import styles from './page.module.css';

export default function Skills() {
  return (
    <>
      <h1 className={styles.title}>Навыки</h1>
      <HardSkills />
    </>
  );
}
