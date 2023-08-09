import React from "react";
import { Card } from "../../components/ui/Card/Card";
import { LineChart } from "../../components/Charts/LineChart/LineChart";
import { BarChart } from "../../components/Charts/BarChart/BarChart";
import { getRandomInt } from "../../utils";

export const Dashboard = () => {
  return (
    <div className=" flex flex-col items-center justify-evenly  h-full">
      <div className="card flex items-center justify-center w-1/2 h-1/3 ">
        <LineChart />
      </div>
      <div className="card flex items-center justify-center w-1/2 h-1/3">
        <BarChart />
      </div>
    </div>
  );
};
