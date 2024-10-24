import { createContext } from 'react';

export type Theme = 'dark' | 'light' | null;

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}>({ theme: 'light' });
