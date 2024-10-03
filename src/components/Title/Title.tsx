import styles from './Title.module.css';

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line} />
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.line} />
    </div>
  );
}
