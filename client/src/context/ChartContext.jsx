// context/ChartContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Create Context
const ChartContext = createContext();

// Context Provider Component
export const ChartProvider = ({ children }) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        title: {
          text: "Values",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => val,
        },
      },
    },
  });

  const [sectorData, setSectorData] = useState({
    series: [],
    options: {
      chart: {
        type: "pie",
        height: 350,
      },
      plotOptions: {
        pie: {
          expandOnClick: true,
        },
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      colors: [
        "#FF6F61",
        "#D4A5A5",
        "#9B9B7A",
        "#6D6E71",
        "#4A6A8C",
        "#BFA8D0",
        "#9C8B8B",
        "#8C8D6D",
      ],
    },
  });

  const [heatmapData, setHeatmapData] = useState({
    series: [],
    options: {
      chart: {
        type: "heatmap",
        height: 350,
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        categories: [],
      },
      colorScale: {
        ranges: [
          { from: 0, to: 10, color: "#00A100" },
          { from: 10, to: 20, color: "#FFB200" },
          { from: 20, to: 30, color: "#FF0000" },
        ],
      },
      dataLabels: {
        enabled: true,
      },
      tooltip: {
        y: {
          formatter: (val) => val,
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://blackdash.onrender.com/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Sort data based on 'intensity' and take the top 10
        const sortedData = data.sort((a, b) => b.intensity - a.intensity).slice(0, 10);

        const years = sortedData.map((item) => item.start_year);
        const intensities = sortedData.map((item) => item.intensity);
        const likelihoods = sortedData.map((item) => item.likelihood);
        const relevances = sortedData.map((item) => item.relevance);

        setChartData({
          series: [
            {
              name: "Intensity",
              data: intensities,
            },
            {
              name: "Likelihood",
              data: likelihoods,
            },
            {
              name: "Relevance",
              data: relevances,
            },
          ],
          options: {
            ...chartData.options,
            xaxis: {
              categories: years,
            },
          },
        });

        const company = sortedData.reduce((acc, item) => {
          acc[item.sector] = acc[item.sector] ? acc[item.sector] + 1 : 1;
          return acc;
        }, {});

        setSectorData({
          series: Object.values(company),
          options: {
            ...sectorData.options,
            labels: Object.keys(company),
          },
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ChartContext.Provider value={{ chartData, sectorData }}>
      {children}
    </ChartContext.Provider>
  );
};

// Custom hook to use the ChartContext
export const useChartContext = () => useContext(ChartContext);
