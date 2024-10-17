'use client';

import { useEffect, useRef } from 'react';
import styles from './Menu.module.css';
import { LanguageSwitch } from './LanguageSwitch/LanguageSwitch';
import { ThemeSwitch } from './ThemeSwitch/ThemeSwitch';

export function Menu({ isOpen, setOpen }: { isOpen: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isOpen) return;
      if (!menuRef.current?.contains(e.target as HTMLElement | null)) setOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, setOpen]);

  return (
    <div ref={menuRef} className={`${styles.wrapper} ${isOpen ? styles.visible : ''}`}>
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
}
