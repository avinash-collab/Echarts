'use client';
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useChartTheme } from "../context/ChartThemeContext";






const TickAlignedBarChart = () => {
    const { isDark } = useChartTheme();
  useEffect(() => {
    const chartDom = document.getElementById('tick-alignment-bar');
    if (!chartDom) return;

    const chart = echarts.init(chartDom, isDark ? 'dark' : 'light');

    const option = {
      title: {
        text: 'Bar Chart with Axis Tick Alignment',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        axisTick: {
          alignWithLabel: true, 
        },
        axisLine: {
          onZero: true,
        },
        axisLabel: {
          interval: 0,
        },
      },
      yAxis: {
        type: 'value',
        name: 'Sales (in $)',
        axisLabel: {
          formatter: '{value}',
        },
      },
      series: [
        {
          name: 'Sales',
          type: 'bar',
          barWidth: '50%',
          data: [820, 932, 901, 934, 1290],
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
        <CardTitle>Axis-Aligned Tick Bar Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="tick-alignment-bar" style={{ width: '100%', height: '400px' }} />
      </CardContent>
    </Card>
  );
};

export default TickAlignedBarChart;
