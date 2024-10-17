import styles from './Contacts.module.css';
import gmailIcon from '@/assets/img/gmail.svg';
import discordIcon from '@/assets/img/discord.svg';
import telegramIcon from '@/assets/img/telegram.svg';
import githubIcon from '@/assets/img/github.svg';
import { Title } from '../Title/Title';
import { Contact } from './Contact/Contact';
import { useTranslations } from 'next-intl';

export function Contacts() {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.section}>
      <Title>{t('contacts')}</Title>

      <ul className={styles.list}>
        <Contact src={gmailIcon} alt="email">
          d.shmuratkin@mail.ru
        </Contact>
        <div className={styles.divider} />
        <Contact src={discordIcon} alt="discord">
          proxyMC
        </Contact>
        <div className={styles.divider} />
        <Contact src={telegramIcon} alt="telegram">
          prxmc
        </Contact>
        <div className={styles.divider} />
        <Contact src={githubIcon} alt="github">
          DialecticalLaw
        </Contact>
      </ul>
    </section>
  );
}
