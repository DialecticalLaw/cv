import Image from 'next/image';
import styles from './Contacts.module.css';
import gmailIcon from '@/assets/img/gmail.svg';
import discordIcon from '@/assets/img/discord.svg';
import telegramIcon from '@/assets/img/telegram.svg';
import githubIcon from '@/assets/img/github.svg';

export function Contacts() {
  return (
    <section>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Image className={styles.icon} src={gmailIcon} alt="email" />
          d.shmuratkin@mail.ru
        </li>

        <div className={styles.divider} />

        <li className={styles.list_item}>
          <Image className={styles.icon} src={discordIcon} alt="discord" />
          proxyMC
        </li>

        <div className={styles.divider} />

        <li className={styles.list_item}>
          <Image className={styles.icon} src={telegramIcon} alt="telegram" />
          prxmc
        </li>

        <div className={styles.divider} />

        <li className={styles.list_item}>
          <Image className={styles.icon} src={githubIcon} alt="github" />
          DialecticalLaw
        </li>
      </ul>
    </section>
  );
}
