import styles from './Title.module.css';

export function Title({ children, classes }: { children: React.ReactNode; classes?: string[] }) {
  return (
    <div className={`${styles.wrapper} ${classes ? classes.join(' ') : ''}`}>
      <div className={styles.line} />
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.line} />
    </div>
  );
}
