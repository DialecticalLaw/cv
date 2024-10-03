import Image from 'next/image';
import styles from './Skills.module.css';
import gitIcon from '@/assets/img/git.svg';
import htmlIcon from '@/assets/img/html.svg';
import cssIcon from '@/assets/img/css.svg';
import jsIcon from '@/assets/img/javascript.svg';
import tsIcon from '@/assets/img/typescript.svg';
import reactIcon from '@/assets/img/react.svg';
import nextIcon from '@/assets/img/nextjs.svg';
import { Title } from '../Title/Title';

export function Skills() {
  return (
    <section>
      <Title>Навыки</Title>

      <ul className={styles.skills_list}>
        <li className={styles.skill}>
          <Image className={styles.icon} src={gitIcon} alt="git" />
        </li>
        <li className={styles.skill}>
          <Image className={styles.icon} src={htmlIcon} alt="html" />
        </li>
        <li className={styles.skill}>
          <Image className={styles.icon} src={cssIcon} alt="css" />
        </li>
        <li className={styles.skill}>
          <Image className={styles.icon} src={jsIcon} alt="js" />
        </li>
        <li className={styles.skill}>
          <Image className={styles.icon} src={tsIcon} alt="ts" />
        </li>
        <li className={styles.skill}>
          <Image className={styles.icon} src={reactIcon} alt="react" />
        </li>
        <li className={styles.skill}>
          <Image className={styles.icon} src={nextIcon} alt="nextJS" />
        </li>
      </ul>
    </section>
  );
}
