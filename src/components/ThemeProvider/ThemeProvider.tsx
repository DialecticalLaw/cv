'use client';

import { ThemeContext } from '@/helpers/ThemeContext';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const colors = {
      light: `
      --invert: invert(0);
      --text-color: rgb(0, 0, 0);
      --bg-color: rgb(235, 235, 235);
      --bg-color-transparent: rgba(170, 170, 170, 0.2);
      --light-shadow: rgb(255, 255, 255);
      --dark-shadow: rgba(0, 0, 0, 0.25);
      --accent-color: rgb(60, 60, 60);
      --weak-color: rgba(60, 60, 60, 0.5);
      --dark-color-transparent: rgba(50, 50, 50, 0.85);`,
      dark: `
      --invert: invert(100%);
      --text-color: rgb(255, 255, 255);
      --bg-color: rgb(35, 35, 35);
      --bg-color-transparent: rgba(60, 60, 60, 0.2);
      --light-shadow: rgb(60, 60, 60);
      --dark-shadow: rgba(0, 0, 0, 0.25);
      --accent-color: rgb(0, 194, 255);
      --weak-color: rgba(120, 120, 120, 0.5);
      --dark-color-transparent: rgba(70, 70, 70, 0.85);`,
    };
    document.documentElement.setAttribute('style', colors[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}
