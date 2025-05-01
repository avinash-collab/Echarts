'use client';
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useChartTheme } from "../context/ChartThemeContext";

const LineBarChartNoRef = () => {
    const { isDark } = useChartTheme();
  useEffect(() => {
    const chartDom = document.getElementById('line-bar-chart');
    if (!chartDom) return;

    const chart = echarts.init(chartDom, isDark ? 'dark' : 'light');

    const option = {
      title: {
        text: 'Basic Line and Bar Chart',
      },
      tooltip: {},
      legend: {
        data: ['Sales', 'Profit'],
      },
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 15],
        },
        {
          name: 'Profit',
          type: 'line',
          data: [2, 12, 25, 8, 6, 15, 10],
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
        <CardTitle>Line and Bar Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="line-bar-chart" style={{ width: '100%', height: '400px' }} />
      </CardContent>
    </Card>
  );
};

export default LineBarChartNoRef;
