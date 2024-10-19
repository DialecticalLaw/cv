import styles from './Title.module.css';

export function Title({
  children,
  linesStyles,
  textStyles,
}: {
  children: React.ReactNode;
  textStyles?: string[];
  linesStyles?: string[];
}) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.line} ${linesStyles ? linesStyles.join(' ') : ''}`} />
      <h2 className={`${styles.title} ${textStyles ? textStyles.join(' ') : ''}`}>{children}</h2>
      <div className={`${styles.line} ${linesStyles ? linesStyles.join(' ') : ''}`} />
    </div>
  );
}
