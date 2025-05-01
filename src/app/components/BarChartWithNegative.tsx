'use client';
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useChartTheme } from '../context/ChartThemeContext';

const NegativeBarChart = () => {
  const { isDark } = useChartTheme();

  useEffect(() => {
    const chartDom = document.getElementById('negative-bar-chart');
    if (!chartDom) return;

    const chart = echarts.init(chartDom, isDark ? 'dark' : 'light');

    const option = {
      title: {
        text: 'Bar Chart with Negative Values',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
        },
      },
      yAxis: {
        type: 'category',
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
      series: [
        {
          name: 'Profit/Loss',
          type: 'bar',
          label: {
            show: true,
            position: 'inside',
          },
          data: [200, -140, 120, -80, 100],
          itemStyle: {
            color: (params: { value: number }) =>
              params.value >= 0 ? '#4caf50' : '#f44336',
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
        <CardTitle>Bar Chart with Negative Axis</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="negative-bar-chart" style={{ width: '100%', height: '400px' }} />
      </CardContent>
    </Card>
  );
};

export default NegativeBarChart;
