'use client';

import Link from 'next/link';
import styles from './NavLink.module.css';
import { usePathname } from 'next/navigation';

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <li className={`${styles.nav_item} ${pathname === href ? styles.active : ''}`}>
      <Link className={styles.nav_link} href={href}>
        {children}
      </Link>
    </li>
  );
}
