import styles from './Sort.module.css';

export function Sort() {
  const order: 'asc' | 'desc' = 'desc';

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{order === 'desc' ? 'Сначала новые' : 'Сначала старые'}</p>
    </div>
  );
}
