'use client';
import { useChartTheme } from '../context/ChartThemeContext';
import { Button } from '@/components/ui/button';

const GlobalThemeToggle = () => {
  const { isDark, toggleTheme } = useChartTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to {isDark ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default GlobalThemeToggle;
