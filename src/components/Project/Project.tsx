'use client';

import { ProjectInfo } from '@/helpers/projects';
import styles from './Project.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { memo } from 'react';

export const Project = memo(function Project({
  projectInfo,
  setVideos,
  setActiveVideo,
  videos,
}: {
  projectInfo: ProjectInfo;
  setVideos: React.Dispatch<React.SetStateAction<string[]>>;
  setActiveVideo: React.Dispatch<React.SetStateAction<string>>;
  videos: string[];
}) {
  const { videoLink, title, shortDesc, date } = projectInfo;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      onClick={() => router.replace(`${pathname}?project=${encodeURIComponent(title)}`, { scroll: false })}
      onPointerEnter={() => {
        if (!videoLink) return;
        if (!videos.includes(videoLink)) setVideos((prev) => [...prev, videoLink]);
        setActiveVideo(videoLink);
      }}
      onPointerLeave={() => setActiveVideo('')}
      className={styles.project}
      key={title}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{shortDesc}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
});
