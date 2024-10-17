'use client';

import Link from 'next/link';
import styles from './NavLink.module.css';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export function NavLink({ href, children }: { href: string; children: string }) {
  const pathname = usePathname();
  const t = useTranslations('Shared');

  return (
    <li className={`${styles.nav_item} ${pathname === href ? styles.active : ''}`}>
      <Link className={styles.nav_link} href={href}>
        {t(children)}
      </Link>
    </li>
  );
}
