'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import { projects } from '@/helpers/projects';

const VIDEO_HEIGHT_PERCENTAGE = 45;

export default function Projects() {
  const [src, setSrc] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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
          <div
            onPointerEnter={() => setSrc(project.link)}
            onPointerLeave={() => setSrc('')}
            className={styles.project}
            key={project.title}
          >
            <p className={styles.title}>{project.title}</p>
            <p className={styles.desc}>{project.desc}</p>
            <p className={styles.hint}>Подробнее &rarr;</p>
          </div>
        ))}
      </div>

      <video
        ref={videoRef}
        preload="none"
        poster={src ? '/loader.gif' : ''}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        className={`${styles.video} ${src ? '' : styles.hidden_video}`}
        src={src}
        controls={false}
        loop
        autoPlay
        muted
      >
        Ваш браузер не поддерживает видео
      </video>
    </section>
  );
}
