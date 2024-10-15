import { projects } from '@/helpers/projects';
import styles from './Details.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import closeIcon from '@/assets/img/close.svg';
import externalIcon from '@/assets/img/external.svg';
import { memo } from 'react';

export const Details = memo(function Details({ selectedProject }: { selectedProject: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const data = projects.find(({ title }) => title === selectedProject);
  if (!data) throw new Error('Project data not found');

  const closeDetails = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('details');
    router.replace(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.close} onClick={closeDetails}>
        <Image className={styles.icon} src={closeIcon} alt="close" />
      </button>

      <div className={styles.background} style={{ backgroundImage: `url('${data.imageLink}')` }} />
      <div className={`${styles.info_wrapper} scrollbar`}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.text}>{data.fullDesc}</p>
        <div className={styles.links_wrapper}>
          {data.serverLink && (
            <a target="_blank" className={`${styles.link} ${styles.server_link}`} href={data.serverLink}>
              Сервер <Image src={externalIcon} className={styles.small_icon} alt="external" />
            </a>
          )}
          <a target="_blank" className={`${styles.link} ${styles.view_link}`} href={data.deployLink}>
            Посмотреть <Image src={externalIcon} className={styles.small_icon} alt="external" />
          </a>
        </div>
      </div>
    </div>
  );
});
