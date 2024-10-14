'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { projects } from '@/helpers/projects';
import { Project } from '@/components/Project/Project';
import { useSearchParams } from 'next/navigation';
import { Details } from '@/components/Project/Details/Details';

const VIDEO_HEIGHT_PERCENTAGE = 45;
const RIGHT_SHIFT = 90;

export default function Projects() {
  const [videos, setVideos] = useState<string[]>([]);
  const [activeVideo, setActiveVideo] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const searchParams = useSearchParams();
  const selectedProject = decodeURIComponent(searchParams.get('project') || '');

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

  return (
    <section>
      <h1>Проекты</h1>
      <div className={styles.wrapper}>
        <div className={styles.projects_list}>
          {projects.map((project) => (
            <Project
              videos={videos}
              setVideos={setVideos}
              setActiveVideo={setActiveVideo}
              key={project.title}
              shortDesc={project.shortDesc}
              videoLink={project.videoLink}
              title={project.title}
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
              Ваш браузер не поддерживает видео
            </video>
          );
        })}
      </div>
    </section>
  );
}
