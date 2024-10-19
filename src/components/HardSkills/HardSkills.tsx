import Image from 'next/image';
import styles from './HardSkills.module.css';
import { Title } from '../Title/Title';
import { hardSkills } from '@/helpers/skills';
import { useTranslations } from 'next-intl';

export function HardSkills() {
  const t = useTranslations('SkillsPage');

  return (
    <section className={styles.section}>
      <Title linesStyles={[styles.lines]} textStyles={[styles.title]}>
        {t('hardSkills')}
      </Title>
      <div className={styles.grid}>
        {hardSkills.map((skill) => (
          <div className={`${styles.cell} ${styles[skill.abbr]}`} key={skill.abbr}>
            <Image
              className={styles.icon}
              src={`/hard_skills/${skill.abbr}.svg`}
              alt={skill.abbr}
              width={200}
              height={200}
            />
            <p className={styles.caption}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
