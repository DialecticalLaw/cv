'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Cloud.module.css';
import cloudImage from '@/assets/img/cloud.png';
import Image from 'next/image';

const shiftCoefficient = 0.4;

export function Cloud() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateCoords = (e: PointerEvent) => {
      if (!imageRef.current) return;
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
      className={styles.cloud}
      src={cloudImage}
      alt="cloud"
    />
  );
}
