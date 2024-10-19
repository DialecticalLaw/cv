import Image from 'next/image';
import { Title } from '../Title/Title';
import styles from './Education.module.css';
import educationIcon from '@/assets/img/education.svg';
import certificateIcon from '@/assets/img/certificate.svg';
import { useTranslations } from 'next-intl';

export function Education() {
  const t = useTranslations('HomePage');

  return (
    <section>
      <Title>{t('education')}</Title>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Image className={styles.icon} src={educationIcon} alt="education" />
          {t('college')}
        </li>

        <li className={styles.item}>
          <Image className={styles.icon} src={educationIcon} alt="education" />
          <a target="_blank" href="https://rs.school/">
            {t('courses')}
          </a>
          (pre-school | JS | react)
          <a className={styles.link} target="_blank" href="https://app.rs.school/certificate/qplzbdwl">
            <Image className={styles.certificate} src={certificateIcon} alt="certificate" />
          </a>
          <a className={styles.link} target="_blank" href="https://app.rs.school/certificate/ggaqp1pm">
            <Image className={styles.certificate} src={certificateIcon} alt="certificate" />
          </a>
          <a className={styles.link} target="_blank" href="https://app.rs.school/certificate/3t2s24ri">
            <Image className={styles.certificate} src={certificateIcon} alt="certificate" />
          </a>
        </li>
      </ul>
    </section>
  );
}
