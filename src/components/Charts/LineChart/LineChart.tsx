import React from "react";
import { data, options } from "./LineChartUtils";
import { Line } from "react-chartjs-2";

export const LineChart = () => {
  return <Line data={data} options={options} />;
};
