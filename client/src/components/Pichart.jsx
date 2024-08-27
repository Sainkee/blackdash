import React from "react";
import Chart from "react-apexcharts";
import { useChartContext } from "../context/ChartContext";

const PieChart = () => {
  const { sectorData } = useChartContext();

  return (
    <Chart
      options={sectorData.options}
      series={sectorData.series}
      type="donut"
      height={250}
      
    />
  );
};

export default PieChart;
