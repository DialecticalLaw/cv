import { memo, useEffect } from 'react';
import styles from './Sort.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import descIcon from '@/assets/img/sort-desc.svg';
import ascIcon from '@/assets/img/sort-asc.svg';
import { useTranslations } from 'next-intl';

export const Sort = memo(function Sort({
  setOrder,
  order,
}: {
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  order: 'asc' | 'desc';
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('ProjectsPage');

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('order', order);
    router.replace(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  }, [order, pathname, router, searchParams]);

  const orderElem = {
    desc: (
      <p className={styles.text}>
        {t('descending')} <Image className={`${styles.icon} invert`} src={descIcon} alt="desc" />
      </p>
    ),
    asc: (
      <p className={styles.text}>
        {t('ascending')} <Image className={`${styles.icon} invert`} src={ascIcon} alt="asc" />
      </p>
    ),
  };

  return (
    <div onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')} className={styles.wrapper}>
      {orderElem[order]}
    </div>
  );
});
