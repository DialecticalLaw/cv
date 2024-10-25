'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Cloud.module.css';
import cloudLightImage from '@/assets/img/cloud.png';
import cloudDarkImage from '@/assets/img/cloudNight.png';
import Image from 'next/image';
import { ThemeContext } from '@/helpers/ThemeContext';

const shiftCoefficient = 0.4;

export function Cloud() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const updateCoords = (e: PointerEvent) => {
      if (!imageRef.current || e.pointerType === 'touch') return;
      const imageMetrics = imageRef.current.getBoundingClientRect();

      const cursorCoords = { x: e.clientX, y: e.clientY };
      const imageCoords = {
        x: imageMetrics.x + imageMetrics.width / 2,
        y: imageMetrics.y + imageMetrics.height / 2,
      };

      const differenceCoords = { x: cursorCoords.x - imageCoords.x, y: cursorCoords.y - imageCoords.y };
      const coords = {
        x: differenceCoords.x * (shiftCoefficient / 100),
        y: differenceCoords.y * (shiftCoefficient / 100),
      };
      setPos({ x: coords.x, y: coords.y });
    };

    document.addEventListener('pointermove', updateCoords);
    return () => document.removeEventListener('pointermove', updateCoords);
  }, []);

  return (
    <Image
      ref={imageRef}
      style={{
        transform: `translate(${pos.x}%, ${pos.y}%)`,
      }}
      className={`${styles.cloud} ${theme === 'dark' ? styles.small : ''}`}
      src={theme === 'dark' ? cloudDarkImage : cloudLightImage}
      alt="cloud"
    />
  );
}
