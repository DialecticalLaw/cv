'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { projects } from '@/helpers/projects';
import { Project } from '@/components/Project/Project';

const VIDEO_HEIGHT_PERCENTAGE = 45;

export default function Projects() {
  const [videos, setVideos] = useState<string[]>([]);
  const [activeVideo, setActiveVideo] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const updateCoords = (e: PointerEvent) => {
      const halfVideoHeight = window.innerHeight * (VIDEO_HEIGHT_PERCENTAGE / 100);
      const x = e.clientX + 60;
      const y = e.clientY - halfVideoHeight / 2;
      setX(x);
      setY(y >= 0 ? y : 0);
    };
    document.addEventListener('pointermove', updateCoords);
    return () => document.removeEventListener('pointermove', updateCoords);
  }, []);

  return (
    <section>
      <h1>Проекты</h1>
      <div className={styles.wrapper}>
        {projects.map((project) => (
          <Project
            videos={videos}
            setVideos={setVideos}
            setActiveVideo={setActiveVideo}
            key={project.title}
            desc={project.desc}
            link={project.link}
            title={project.title}
          />
        ))}
      </div>

      <div className={styles.video_position_wrapper} style={{ transform: `translate(${x}px, ${y}px)` }}>
        <div className={styles.video_wrapper}>
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
      </div>
    </section>
  );
}
