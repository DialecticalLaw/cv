import { projects } from '@/helpers/projects';
import styles from './Details.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import closeIcon from '@/assets/img/close.svg';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { ExternalIcon } from '@/components/Icons/ExternalIcon/ExternalIcon';
import { createPortal } from 'react-dom';

export const Details = memo(function Details({ selectedProject }: { selectedProject: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const blackoutRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('ProjectsPage');

  const closeDetails = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('details');
    router.replace(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  useEffect(() => {
    if (!blackoutRef.current) return;
    const blackoutElem = blackoutRef.current;
    blackoutElem.addEventListener('click', closeDetails);
    return () => blackoutElem.removeEventListener('click', closeDetails);
  }, [closeDetails]);

  const data = projects.find(({ title }) => title === selectedProject);
  if (!data) throw new Error('Project data not found');

  return (
    <>
      {createPortal(
        <>
          <div ref={blackoutRef} className={styles.blackout} />
          <div className={styles.wrapper}>
            <div className={styles.wrapper_background} />

            <button className={styles.close} onClick={closeDetails}>
              <Image className={`${styles.icon} invert`} src={closeIcon} alt="close" />
            </button>

            <div className={styles.image_preview} style={{ backgroundImage: `url('${data.imageLink}')` }} />
            <div className={`${styles.info_wrapper} scrollbar`}>
              <h3 className={styles.title}>{data.title}</h3>
              <p className={styles.text}>{t(`${data.title}.full`)}</p>
              <div className={styles.links_wrapper}>
                {data.serverLink && (
                  <a target="_blank" className={`${styles.link} ${styles.server_link}`} href={data.serverLink}>
                    {t('server')} <ExternalIcon />
                  </a>
                )}
                <a target="_blank" className={`${styles.link} ${styles.view_link}`} href={data.deployLink}>
                  {t('view')} <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  );
});
