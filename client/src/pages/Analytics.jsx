import React from "react";
import Chart from "react-apexcharts";
import { useChartContext } from "../context/ChartContext";

export default function Analytics() {
  const { chartData } = useChartContext();

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  );
}
