// import React from 'react'

import { Dollar, Cart, LineChart, Layout06 } from "../../icons";
import ChartDailySalesTrend from "./components/ChartDailySalesTrend";
import Panel from "../../components/Panel";
import ChartFramework from "../../components/ChartFramework";
import PieCharts from "../../components/PieCharts";
import AreaCharts from "../../components/AreaCharts";

function Sales() {
  const panelSales = [
    {
      icon: (
        <Dollar
          className="text-indigo-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Total Revenue",
      amount: 1234567,
      type: "asset",
    },
    {
      icon: (
        <Cart
          className="text-green-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Avg. Order Value",
      amount: 78.9,
      type: "asset",
    },
    {
      icon: (
        <LineChart
          className="text-yellow-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Conversion Rate",
      amount: 3.45,
      type: "persent",
    },
    {
      icon: (
        <Layout06
          className="text-red-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Sales Growth",
      amount: 12.3,
      type: "persent",
    },
  ];
  const chartSales = [
    {
      title: "Sales by Category",
      nameChart: (
        <PieCharts
          dataPieChart={[
            { name: "Electronics", value: 400 },
            { name: "Clothing", value: 300 },
            { name: "Home & Garden", value: 200 },
            { name: "Books", value: 100 },
            { name: "Others", value: 150 },
          ]}
          colorPieChart={[
            "#8884d8",
            "#82ca9d",
            "#ffc658",
            "#ff8042",
            "#0088FE",
          ]}
        />
      ),
    },
    {
      title: "Daily Sales Trend",
      nameChart: <ChartDailySalesTrend />,
    },
  ];
  return (
    <div className="overviewPage main py-6 px-8">
      <Panel panels={panelSales} />
      <div className="chartOverview grid grid-cols-1 gap-4">
        <div className="lg:col-span-2 bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium pb-4 text-gray-100">
              Sales Overview
            </h2>
            <select
              className="bg-gray-700 text-white py-1 px-3 rounded-md font-semibold focus:outline-none "
              name=""
              id=""
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          <AreaCharts
            dataListAreaCharts={[
              { name: "Jan", value: 4000, valuetow: 0 },
              { name: "Feb", value: 3000, valuetow: 0 },
              { name: "Mar", value: 5000, valuetow: 0 },

              { name: "Apr", value: 4500, valuetow: 0 },
              { name: "May", value: 6000, valuetow: 0 },
              { name: "Jun", value: 5500, valuetow: 0 },
              { name: "Jul", value: 7000, valuetow: 0 },
            ]}
            legendValue={"sales"}
            legendValuetow={""}
          />
        </div>
        <ChartFramework charts={chartSales} />
      </div>
    </div>
  );
}

export default Sales;
