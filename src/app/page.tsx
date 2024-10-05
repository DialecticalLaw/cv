import { Contacts } from '@/components/Contacts/Contacts';
import styles from './page.module.css';
import { Summary } from '@/components/Summary/Summary';
import { Education } from '@/components/Education/Education';
import { Languages } from '@/components/Languages/Languages';
import locationIcon from '@/assets/img/location.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <p className={styles.text_name}>Денис Шмураткин</p>
        <div className={styles.image}>
          <div className={styles.glass} />
        </div>
        <p className={styles.text_location}>
          <Image className={styles.icon} src={locationIcon} alt="location" /> Локация: Россия, Сыктывкар
        </p>
      </div>

      <div className={styles.contacts_summary}>
        <Contacts />
        <Summary />
      </div>

      <Education />
      <Languages />
    </main>
  );
}
