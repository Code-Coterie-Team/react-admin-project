// import React from 'react'

import { Dollar, Cart, LineChart, Layout06 } from "../../icons";
import ChartDailySalesTrend from "./components/ChartDailySalesTrend";
import ChartSalesByCategory from "./components/ChartSalesByCategory";
import ChartSalesOverview from "./components/ChartSalesOverview";
import Panel from "../../components/Panel";

function Sales() {
  return (
    <div className="overviewPage main py-6 px-8">
      <div className="grid grid-cols-4 gap-3 pb-8">
        <Panel
          icon={
            <Dollar
              className="text-indigo-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Total Revenue"
          amount={1234567}
          type="aset"
        />
        <Panel
          icon={
            <Cart
              className="text-green-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Avg. Order Value"
          amount={78.9}
          type="aset"
        />
        <Panel
          icon={
            <LineChart
              className="text-yellow-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Conversion Rate"
          amount={3.45}
          type="persent"
        />
        <Panel
          icon={
            <Layout06
              className="text-red-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Sales Growth"
          amount={12.3}
          type="persent"
        />
      </div>
      <div className="chartOverview grid grid-cols-2 gap-4">
        <div className="lg:col-span-2 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid">
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
          <ChartSalesOverview />
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            Sales by Category
          </h2>
          <ChartSalesByCategory />
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
        <h2 className="text-lg font-medium pb-4 text-gray-100">
        Daily Sales Trend
          </h2>
          <ChartDailySalesTrend/>
        </div>
      </div>
    </div>
  );
}


export default Sales;
