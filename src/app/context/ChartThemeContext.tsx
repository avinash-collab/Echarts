'use client';
import { createContext, useContext, useState } from 'react';

const ChartThemeContext = createContext<any>(null);

export const ChartThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ChartThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ChartThemeContext.Provider>
  );
};

export const useChartTheme = () => useContext(ChartThemeContext);
