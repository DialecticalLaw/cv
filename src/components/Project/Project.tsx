'use client';

import { ProjectInfo } from '@/helpers/projects';
import styles from './Project.module.css';
import { usePathname, useRouter } from 'next/navigation';

export function Project({
  desc,
  link,
  title,
  setVideos,
  setActiveVideo,
  videos,
}: ProjectInfo & {
  setVideos: React.Dispatch<React.SetStateAction<string[]>>;
  setActiveVideo: React.Dispatch<React.SetStateAction<string>>;
  videos: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      onClick={() => router.replace(`${pathname}?project=${encodeURIComponent(title)}`)}
      onPointerEnter={() => {
        if (!link) return;
        if (!videos.includes(link)) setVideos((prev) => [...prev, link]);
        setActiveVideo(link);
      }}
      onPointerLeave={() => setActiveVideo('')}
      className={styles.project}
      key={title}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.hint}>Подробнее &rarr;</p>
    </div>
  );
}
