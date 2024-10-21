import React from 'react';
import styles from './Waves.module.css';

export function Waves() {
  return (
    <div className={styles.waves}>
      <div className={styles.wave} style={{ '--index': 1 } as React.CSSProperties}>
        <div className={styles.wave} style={{ '--index': 2 } as React.CSSProperties}>
          <div className={styles.wave} style={{ '--index': 3 } as React.CSSProperties}>
            <div className={styles.wave} style={{ '--index': 4 } as React.CSSProperties}>
              <div className={styles.wave} style={{ '--index': 5 } as React.CSSProperties}>
                <div className={styles.wave} style={{ '--index': 6 } as React.CSSProperties}>
                  <div className={styles.wave} style={{ '--index': 7 } as React.CSSProperties} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
