'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { projects } from '@/helpers/projects';
import { Project } from '@/components/Project/Project';
import { useSearchParams } from 'next/navigation';
import { Details } from '@/components/Project/Details/Details';
import { Sort } from '@/components/Sort/Sort';
import { Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';

const VIDEO_HEIGHT_PERCENTAGE = 45;
const RIGHT_SHIFT = 90;

function getDefaultOrder(orderFromSP: string | null): 'asc' | 'desc' {
  if (orderFromSP === 'asc' || orderFromSP === 'desc') return orderFromSP;
  return 'desc';
}

export default function Projects() {
  const [videos, setVideos] = useState<string[]>([]);
  const [activeVideo, setActiveVideo] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const searchParams = useSearchParams();
  const selectedProject = decodeURIComponent(searchParams.get('details') || '');
  const [order, setOrder] = useState<'asc' | 'desc'>(getDefaultOrder(searchParams.get('order')));
  const t = useTranslations('ProjectsPage');

  useEffect(() => {
    const updateCoords = (e: PointerEvent) => {
      const videoHeight = window.innerHeight * (VIDEO_HEIGHT_PERCENTAGE / 100);
      const x = e.clientX + RIGHT_SHIFT;
      let y = e.clientY - videoHeight / 2;
      if (y < 0) y = 0;
      if (y + videoHeight > window.innerHeight) y = window.innerHeight - videoHeight;

      setX(x);
      setY(y);
    };
    document.addEventListener('pointermove', updateCoords);
    return () => document.removeEventListener('pointermove', updateCoords);
  }, []);

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.date).valueOf();
    const dateB = new Date(b.date).valueOf();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return (
    <section>
      <Title>{t('projects')}</Title>
      <div className={styles.wrapper}>
        <Sort order={order} setOrder={setOrder} />
        <div className={styles.projects_list}>
          {sortedProjects.map((project, index) => (
            <Project
              index={index}
              videos={videos}
              setVideos={setVideos}
              setActiveVideo={setActiveVideo}
              key={project.title}
              projectInfo={project}
            />
          ))}
        </div>
        {selectedProject && <Details selectedProject={selectedProject} />}
      </div>

      <div className={styles.video_wrapper} style={{ transform: `translate(${x}px, ${y}px)` }}>
        {videos.map((src) => {
          return (
            <video
              className={`${styles.video} ${activeVideo === src ? '' : styles.hidden_video}`}
              poster={'/loader.gif'}
              src={src}
              preload="none"
              key={src}
              controls={false}
              loop
              autoPlay
              muted
            >
              {t('notSupportVideo')}
            </video>
          );
        })}
      </div>
    </section>
  );
}
