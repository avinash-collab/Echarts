'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ChartThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ChartThemeContext = createContext<ChartThemeContextType | undefined>(undefined);

export const ChartThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ChartThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ChartThemeContext.Provider>
  );
};

export const useChartTheme = (): ChartThemeContextType => {
  const context = useContext(ChartThemeContext);
  if (context === undefined) {
    throw new Error('useChartTheme must be used within a ChartThemeProvider');
  }
  return context;
};
