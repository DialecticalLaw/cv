import { Contacts } from '@/components/Contacts/Contacts';
import styles from './page.module.css';
import { Summary } from '@/components/Summary/Summary';
import { Education } from '@/components/Education/Education';
import { Languages } from '@/components/Languages/Languages';
import { Intro } from '@/components/Intro/Intro';

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <div className={styles.contacts_summary}>
        <Contacts />
        <Summary />
      </div>

      <Education />
      <Languages />
    </main>
  );
}
