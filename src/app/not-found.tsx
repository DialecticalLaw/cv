import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.not_found_wrapper}>
      <h1>Not Found | 404</h1>
      <Link className={styles.not_found_link} href="/">
        Return Home
      </Link>
    </div>
  );
}
