'use client';

import styles from './Contacts.module.css';
import gmailIcon from '@/assets/img/gmail.svg';
import discordIcon from '@/assets/img/discord.svg';
import telegramIcon from '@/assets/img/telegram.svg';
import githubIcon from '@/assets/img/github.svg';
import { Title } from '../Title/Title';
import { Contact } from './Contact/Contact';

export function Contacts() {
  // const [copiedText, setCopiedText] = useState<Contact>();

  // const copy = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>, type: Contact) => {
  //   if (!(e.target instanceof HTMLElement)) return;
  //   try {
  //     await navigator.clipboard.writeText(e.target.textContent as string);
  //     setCopiedText(type);
  //     setTimeout(() => setCopiedText(undefined), 2000);
  //   } catch (err) {
  //     console.error('Failed to copy: ', err);
  //   }
  // };

  return (
    <section className={styles.section}>
      <Title>Контакты</Title>

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
