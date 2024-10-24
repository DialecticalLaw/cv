'use client';

import { Theme, ThemeContext } from '@/helpers/ThemeContext';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('dialecticallaw-cv-theme');
    setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light');
  }, []);

  useEffect(() => {
    if (!theme) return;

    const colors = {
      light: `
      --invert: invert(0);
      --text-color: rgb(0, 0, 0);
      --bg-color: rgb(235, 235, 235);
      --bg-color-transparent: rgba(170, 170, 170, 0.2);
      --light-shadow: rgb(255, 255, 255);
      --dark-shadow: rgba(0, 0, 0, 0.25);
      --accent-color: rgb(0 153 247);
      --weak-color: rgba(60, 60, 60, 0.5);
      --dark-color-transparent: rgba(50, 50, 50, 0.85);`,
      dark: `
      --invert: invert(100%);
      --text-color: rgb(255, 255, 255);
      --bg-color: rgb(24 25 36);
      --bg-color-transparent: rgb(56 54 89 / 20%);
      --light-shadow: rgb(50 51 85);
      --dark-shadow: rgba(0, 0, 0, 0.25);
      --accent-color: rgb(0, 194, 255);
      --weak-color: rgb(64 64 120 / 50%);
      --dark-color-transparent: rgb(35 35 47 / 85%);`,
    };

    localStorage.setItem('dialecticallaw-cv-theme', theme);
    document.documentElement.setAttribute('style', colors[theme]);
  }, [theme]);

  if (!theme) return;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}
