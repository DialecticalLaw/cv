import Image from 'next/image';
import { Title } from '../Title/Title';
import styles from './SoftSkills.module.css';
import communicationIcon from '@/assets/img/skills/communication.png';
import mentoringIcon from '@/assets/img/skills/mentoring.png';
import problemSolvingnIcon from '@/assets/img/skills/solving.png';
import ambiguityIcon from '@/assets/img/skills/ambiguity.png';
import introspectionIcon from '@/assets/img/skills/introspection.png';
import bulbIcon from '@/assets/img/bulb.svg';

export function SoftSkills() {
  return (
    <section className={styles.section}>
      <Title>Soft Skills</Title>
      <div className={styles.wrapper}>
        <div className={styles.template} />
        <Image className={styles.bulb} src={bulbIcon} alt="bulb" />

        <div className={`${styles.skill} ${styles.communication}`}>
          <Image className={styles.icon} src={communicationIcon} alt="communication" />
          <p>Коммуникация</p>
        </div>

        <div className={`${styles.skill} ${styles.mentoring}`}>
          <Image className={styles.icon} src={mentoringIcon} alt="mentoring" />
          <p>Наставничество</p>
        </div>

        <div className={`${styles.skill} ${styles.problem_solving}`}>
          <Image className={styles.icon} src={problemSolvingnIcon} alt="problem solving" />
          <p>Решение проблем</p>
        </div>

        <div className={`${styles.skill} ${styles.ambiguity}`}>
          <Image className={styles.icon} src={ambiguityIcon} alt="ambiguity" />
          <p>Работа в режиме неопределенности</p>
        </div>

        <div className={`${styles.skill} ${styles.introspection}`}>
          <Image className={styles.icon} src={introspectionIcon} alt="introspection" />
          <p>Самоанализ</p>
        </div>
      </div>
    </section>
  );
}
