'use client';

import Image from 'next/image';
import styles from './Contact.module.css';
import copyIcon from '@/assets/img/copy.svg';
import checkmarkIcon from '@/assets/img/checkmark.svg';
import { useState } from 'react';

export function Contact({ children, src, alt }: { children: string; src: string; alt: string }) {
  const [isCopied, setCopied] = useState(false);

  const copy = async () => {
    if (isCopied) return;
    setCopied(true);
    await navigator.clipboard.writeText(children);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li onClick={() => copy()} className={styles.list_item}>
      <Image className={styles.icon} src={src} alt={alt} />
      {children}
      <Image
        className={`${styles.copy} ${isCopied ? '' : 'invert'}`}
        src={isCopied ? checkmarkIcon : copyIcon}
        alt="copy"
      />
    </li>
  );
}
