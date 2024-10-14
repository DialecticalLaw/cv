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
      <button className={styles.close} onClick={() => router.push(pathname)}>
        <Image className={styles.icon} src={closeIcon} alt="close" />
      </button>

      <div className={styles.background} style={{ backgroundImage: `url('${data.imageLink}')` }} />
      <div className={styles.info_wrapper}>
        <h3 className={styles.text}>{data.title}</h3>
        <p className={styles.text}>{data.fullDesc}</p>
        <div className={styles.links_wrapper}>
          {data.serverLink && (
            <a className={styles.link} href={data.serverLink}>
              Сервер
            </a>
          )}
          <a className={styles.link} href={data.deployLink}>
            Посмотреть
          </a>
        </div>
      </div>
    </div>
  );
}
