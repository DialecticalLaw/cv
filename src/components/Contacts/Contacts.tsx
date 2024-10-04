'use client';

import Image from 'next/image';
import styles from './Contacts.module.css';
import gmailIcon from '@/assets/img/gmail.svg';
import discordIcon from '@/assets/img/discord.svg';
import telegramIcon from '@/assets/img/telegram.svg';
import githubIcon from '@/assets/img/github.svg';
import copyIcon from '@/assets/img/copy.svg';
import { Title } from '../Title/Title';

export function Contacts() {
  const copy = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLElement)) return;
    try {
      await navigator.clipboard.writeText(e.target.textContent as string);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className={styles.section}>
      <Title>Контакты</Title>

      <ul className={styles.list}>
        <li onClick={(e) => copy(e)} className={styles.list_item}>
          <Image className={styles.icon} src={gmailIcon} alt="email" />
          d.shmuratkin@mail.ru
          <Image className={styles.copy} src={copyIcon} alt="copy" />
        </li>

        <div className={styles.divider} />

        <li onClick={(e) => copy(e)} className={styles.list_item}>
          <Image className={styles.icon} src={discordIcon} alt="discord" />
          proxyMC
          <Image className={styles.copy} src={copyIcon} alt="copy" />
        </li>

        <div className={styles.divider} />

        <li onClick={(e) => copy(e)} className={styles.list_item}>
          <Image className={styles.icon} src={telegramIcon} alt="telegram" />
          prxmc
          <Image className={styles.copy} src={copyIcon} alt="copy" />
        </li>

        <div className={styles.divider} />

        <li onClick={(e) => copy(e)} className={styles.list_item}>
          <Image className={styles.icon} src={githubIcon} alt="github" />
          DialecticalLaw
          <Image className={styles.copy} src={copyIcon} alt="copy" />
        </li>
      </ul>
    </section>
  );
}
