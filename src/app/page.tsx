import { Contacts } from '@/components/Contacts/Contacts';
import styles from './page.module.css';
import { Summary } from '@/components/Summary/Summary';
import { Skills } from '@/components/Skills/Skills';
import { Education } from '@/components/Education/Education';
import { Languages } from '@/components/Languages/Languages';
import { Projects } from '@/components/Projects/Projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contacts_summary}>
        <Contacts />
        <Summary />
      </div>

      <Skills />
      <Education />
      <Languages />
      <Projects />
    </main>
  );
}