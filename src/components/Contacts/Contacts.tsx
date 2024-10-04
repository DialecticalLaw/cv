'use client';

import Image from 'next/image';
import styles from './Contacts.module.css';
import gmailIcon from '@/assets/img/gmail.svg';
import discordIcon from '@/assets/img/discord.svg';
import telegramIcon from '@/assets/img/telegram.svg';
import githubIcon from '@/assets/img/github.svg';
import copyIcon from '@/assets/img/copy.svg';
import checkmarkIcon from '@/assets/img/checkmark.svg';
import { Title } from '../Title/Title';
import { useState } from 'react';

type Contact = 'email' | 'discord' | 'telegram' | 'github';

export function Contacts() {
  const [copiedText, setCopiedText] = useState<Contact>();

  const copy = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>, type: Contact) => {
    if (!(e.target instanceof HTMLElement)) return;
    try {
      await navigator.clipboard.writeText(e.target.textContent as string);
      setCopiedText(type);
      setTimeout(() => setCopiedText(undefined), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className={styles.section}>
      <Title>Контакты</Title>

      <ul className={styles.list}>
        <li onClick={(e) => copy(e, 'email')} className={styles.list_item}>
          <Image className={styles.icon} src={gmailIcon} alt="email" />
          d.shmuratkin@mail.ru
          <Image className={styles.copy} src={copiedText === 'email' ? checkmarkIcon : copyIcon} alt="copy" />
        </li>

        <div className={styles.divider} />

        <li onClick={(e) => copy(e, 'discord')} className={styles.list_item}>
          <Image className={styles.icon} src={discordIcon} alt="discord" />
          proxyMC
          <Image className={styles.copy} src={copiedText === 'discord' ? checkmarkIcon : copyIcon} alt="copy" />
        </li>

        <div className={styles.divider} />

        <li onClick={(e) => copy(e, 'telegram')} className={styles.list_item}>
          <Image className={styles.icon} src={telegramIcon} alt="telegram" />
          prxmc
          <Image className={styles.copy} src={copiedText === 'telegram' ? checkmarkIcon : copyIcon} alt="copy" />
        </li>

        <div className={styles.divider} />

        <li onClick={(e) => copy(e, 'github')} className={styles.list_item}>
          <Image className={styles.icon} src={githubIcon} alt="github" />
          DialecticalLaw
          <Image className={styles.copy} src={copiedText === 'github' ? checkmarkIcon : copyIcon} alt="copy" />
        </li>
      </ul>
    </section>
  );
}
