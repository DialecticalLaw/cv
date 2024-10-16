import Image from 'next/image';
import styles from './Settings.module.css';
import settingsIcon from '@/assets/img/settings.svg';
import { Menu } from './Menu/Menu';

export function Settings() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.settings}>
        <Image priority className={styles.icon} src={settingsIcon} alt="settings" />
      </button>

      <Menu />
    </div>
  );
}
