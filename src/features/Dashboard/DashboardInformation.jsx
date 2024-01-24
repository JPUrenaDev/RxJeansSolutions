import React from "react";
import { SimpleLineChart } from "./SimpleLineChart";
import { SimpleAreaChart } from "./SimpleAreaChart";
import { PieCharts } from "./PieCharts";

export const DashboardInformation = () => {
  return (
    <>
      <div className=" w-[100%] h-[300px] flex  items-center">
        <SimpleLineChart />

        <SimpleAreaChart />
      </div>
      <PieCharts />
    </>
  );
};
