import { memo, useEffect } from 'react';
import styles from './Sort.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { DescIcon } from '../Icons/DescIcon/DescIcon';
import { AscIcon } from '../Icons/AscIcon/AscIcon';

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
        {t('descending')} <DescIcon />
      </p>
    ),
    asc: (
      <p className={styles.text}>
        {t('ascending')} <AscIcon />
      </p>
    ),
  };

  return (
    <div onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')} className={styles.wrapper}>
      {orderElem[order]}
    </div>
  );
});
