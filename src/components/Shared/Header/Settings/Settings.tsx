'use client';

import Image from 'next/image';
import styles from './Settings.module.css';
import settingsIcon from '@/assets/img/settings.svg';
import { Menu } from './Menu/Menu';
import { useState } from 'react';

export function Settings() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.settings} ${isOpen ? styles.open : ''}`} onClick={() => setOpen((prev) => !prev)}>
        <Image priority className={`${styles.icon} invert`} src={settingsIcon} alt="settings" />
      </button>

      <Menu isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
}
