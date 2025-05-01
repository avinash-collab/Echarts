'use client';
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useChartTheme } from "../context/ChartThemeContext";

const DoughnutChart = () => {
    const { isDark } = useChartTheme();
  useEffect(() => {
    const chartDom = document.getElementById('doughnut-chart');
    if (!chartDom) return;

    const chart = echarts.init(chartDom, isDark ? 'dark' : 'light');

    const option = {
      title: {
        text: 'Doughnut Chart',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        bottom: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
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
        <CardTitle>Doughnut Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="doughnut-chart" style={{ width: '100%', height: '400px' }} />
      </CardContent>
    </Card>
  );
};

export default DoughnutChart;
