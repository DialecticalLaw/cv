import { Contacts } from '@/components/Contacts/Contacts';
import styles from './page.module.css';
import { Summary } from '@/components/Summary/Summary';
import { Skills } from '@/components/Skills/Skills';

export default function Home() {
  return (
    <main className={styles.main}>
      <Contacts />
      <Summary />
      <Skills />
    </main>
  );
}
