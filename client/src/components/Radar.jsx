// components/RadarChartComponent.jsx
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { useChartContext } from '../context/ChartContext';

const RadarChartComponent = () => {
  const { radarChartData } = useChartContext();

  return (
    <div>
      <h2>Radar Chart</h2>
      <ApexCharts
        type="radar"
        options={radarChartData.options}
        series={radarChartData.series}
        height={350}
      />
    </div>
  );
};

export default RadarChartComponent;
