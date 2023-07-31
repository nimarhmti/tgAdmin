import React from "react";
import { Card } from "../../components/ui/Card/Card";
import { LineChart } from "../../components/Charts/LineChart/LineChart";
import { BarChart } from "../../components/Charts/BarChart/BarChart";
import { getRandomInt } from "../../utils";

export const Dashboard = () => {
  return (
    <div className=" flex flex-col items-center gap-3 ">
      <div className="card flex items-center justify-center w-full  mt-10 h-96 ">
        <LineChart />
      </div>
      <div className="card flex items-center justify-center w-full  mt-2 h-96">
        <BarChart />
      </div>
    </div>
  );
};
