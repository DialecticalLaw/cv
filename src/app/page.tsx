import { Contacts } from '@/components/Contacts/Contacts';
import styles from './page.module.css';
import { Summary } from '@/components/Summary/Summary';
import { Education } from '@/components/Education/Education';
import { Languages } from '@/components/Languages/Languages';
import { Intro } from '@/components/Intro/Intro';

export default function Home() {
  return (
    <>
      <Intro />
      <div className={styles.wrapper}>
        <Contacts />
        <Summary />
        <Education />
        <Languages />
      </div>
    </>
  );
}
