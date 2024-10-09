'use client';

import Image from 'next/image';
import styles from './Intro.module.css';
import locationIcon from '@/assets/img/location.svg';
import { useState } from 'react';

export function Intro() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <h1 className={`${styles.title} ${styles.text_name}`}>Денис Шмураткин</h1>
      <h2 className={styles.title}>&lt;Frontend Developer&gt;</h2>
      <div className={styles.intro}>
        <div onClick={() => setActive(true)} className={`${styles.image_wrapper} ${isActive ? styles.active : ''}`}>
          <p className={styles.text_location}>
            <Image className={styles.icon} src={locationIcon} alt="location" /> Локация: Россия, Сыктывкар
          </p>

          <div className={styles.glow} />
          <div className={styles.info_wrapper}>
            <p className={styles.info}>
              i<span className={styles.hint}>Улучшено ИИ</span>
            </p>
          </div>
          <div className={styles.image} />
          <div className={styles.glass} />
        </div>
      </div>
    </>
  );
}
