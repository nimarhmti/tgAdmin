import React from "react";
import { Bar } from "react-chartjs-2";
import { data, options } from "./BarChartUtils";
export const BarChart = () => {
  return <Bar data={data} options={options} />;
};
