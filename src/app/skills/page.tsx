import { HardSkills } from '@/components/HardSkills/HardSkills';
import styles from './page.module.css';
import { SoftSkills } from '@/components/SoftSkills/SoftSkills';

export default function Skills() {
  return (
    <>
      <h1 className={styles.title}>Навыки</h1>
      <HardSkills />
      <SoftSkills />
    </>
  );
}
