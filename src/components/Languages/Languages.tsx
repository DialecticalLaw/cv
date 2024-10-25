import Image from 'next/image';
import { Title } from '../Title/Title';
import styles from './Languages.module.css';
import russiaIcon from '@/assets/img/flag-ru.svg';
import englandIcon from '@/assets/img/flag-gb.svg';
import certificateIcon from '@/assets/img/certificate.svg';
import { useTranslations } from 'next-intl';

export function Languages() {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.section}>
      <Title>{t('languages')}</Title>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image className={styles.icon} src={russiaIcon} alt="russia" />
          <div className={styles.info_wrapper}>
            <b>{t('ruLang')}</b> - {t('ruLangLevel')}
          </div>
        </li>

        <li className={styles.item}>
          <Image className={styles.icon} src={englandIcon} alt="england" />
          <div className={styles.info_wrapper}>
            <b>{t('enLang')}</b> - B1{' '}
            <a target="_blank" href="https://cert.efset.org/ru/SgsuKd">
              <Image className={styles.small_icon} src={certificateIcon} alt="certificate" />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
