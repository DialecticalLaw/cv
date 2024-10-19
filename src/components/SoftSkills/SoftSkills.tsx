import Image from 'next/image';
import { Title } from '../Title/Title';
import styles from './SoftSkills.module.css';
import bulbIcon from '@/assets/img/bulb.svg';
import { softSkills } from '@/helpers/skills';
import { useTranslations } from 'next-intl';

export function SoftSkills() {
  const t = useTranslations('SkillsPage');

  return (
    <section className={styles.section}>
      <Title>{t('softSkills')}</Title>
      <div className={styles.wrapper}>
        <div className={`${styles.template} invert`} />
        <Image className={styles.bulb} src={bulbIcon} alt="bulb" />

        {softSkills.map((skill) => (
          <div key={skill} className={`${styles.skill} ${styles[skill]}`}>
            <Image width={70} height={70} className={styles.icon} src={`/soft_skills/${skill}.png`} alt={skill} />
            <p>{t(skill)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
