import { projects } from '@/helpers/projects';
import styles from './Details.module.css';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import closeIcon from '@/assets/img/close.svg';

export function Details({ selectedProject }: { selectedProject: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const data = projects.find(({ title }) => title === selectedProject);
  if (!data) throw new Error('Project data not found');

  return (
    <div className={styles.wrapper}>
      <h3>{data.title}</h3>
      <button className={styles.close} onClick={() => router.push(pathname)}>
        <Image className={styles.icon} src={closeIcon} alt="close" />
      </button>
    </div>
  );
}
