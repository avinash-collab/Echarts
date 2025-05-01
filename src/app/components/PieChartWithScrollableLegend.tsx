'use client';
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useChartTheme } from "../context/ChartThemeContext";

const PieChartWithScrollableLegend = () => {
    const { isDark } = useChartTheme();
  useEffect(() => {
    const chartDom = document.getElementById('pie-scrollable-legend');
    if (!chartDom) return;

    const chart = echarts.init(chartDom, isDark ? 'dark' : 'light');

    const data = Array.from({ length: 20 }, (_, i) => ({
      name: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 100) + 1,
    }));

    const option = {
      title: {
        text: 'Pie Chart with Scrollable Legend',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 10,
        top: 20,
        bottom: 20,
      },
      series: [
        {
          name: 'Items',
          type: 'pie',
          radius: '55%',
          center: ['60%', '50%'],
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    chart.setOption(option);
    const resize = () => chart.resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      chart.dispose();
    };
  }, [isDark]);

  return (
    <Card className="m-4 shadow-xl">
      <CardHeader>
        <CardTitle>Pie Chart with Scrollable Legend</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="pie-scrollable-legend" style={{ width: '100%', height: '400px' }} />
      </CardContent>
    </Card>
  );
};

export default PieChartWithScrollableLegend;
