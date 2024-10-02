import { Contacts } from '@/components/Contacts/Contacts';
import styles from './page.module.css';
import { Summary } from '@/components/Summary/Summary';

export default function Home() {
  return (
    <main className={styles.main}>
      <Contacts />
      <Summary />
    </main>
  );
}
