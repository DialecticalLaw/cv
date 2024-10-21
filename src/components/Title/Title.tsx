import styles from './Title.module.css';

export function Title({ children, textStyles }: { children: React.ReactNode; textStyles?: string[] }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line} />
      <h2 className={`${styles.title} ${textStyles ? textStyles.join(' ') : ''}`}>{children}</h2>
      <div className={styles.line} />
    </div>
  );
}
