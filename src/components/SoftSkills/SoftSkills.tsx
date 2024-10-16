import Image from 'next/image';
import { Title } from '../Title/Title';
import styles from './SoftSkills.module.css';
import bulbIcon from '@/assets/img/bulb.svg';
import { softSkills } from '@/helpers/skills';

export function SoftSkills() {
  return (
    <section className={styles.section}>
      <Title>Soft Skills</Title>
      <div className={styles.wrapper}>
        <div className={styles.template} />
        <Image className={styles.bulb} src={bulbIcon} alt="bulb" />

        {softSkills.map((skill) => (
          <div key={skill.abbr} className={`${styles.skill} ${styles[skill.abbr]}`}>
            <Image
              width={70}
              height={70}
              className={styles.icon}
              src={`/soft_skills/${skill.abbr}.png`}
              alt={skill.abbr}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
