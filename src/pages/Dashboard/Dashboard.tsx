import React from "react";
import { Card } from "../../components/ui/Card/Card";
import { LineChart } from "../../components/Charts/LineChart/LineChart";
import { getRandomInt } from "../../utils";

export const Dashboard = () => {
  // const num = getRandomInt(1, 10);
  return (
    <div className=" items-center gap-3 justify-center">
      <div className="card w-1/2 flex items-center mt-2">
        <LineChart />
      </div>
    </div>
  );
};
