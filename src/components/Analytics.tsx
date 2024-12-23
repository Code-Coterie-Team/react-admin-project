// import React from 'react'
import { Dollar, LineChart, ShoppingBag, Users } from "../icons";
import PanelAnalytics from "./PanelAnalytics";

function Analytics() {
  return (
    <div className="analyticsPage main py-6 px-8">
      <div className="grid grid-cols-4 gap-3 pb-8">
        <PanelAnalytics />
      </div>
      <div className="revenueVsTarget flex justify-between items-center bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid mb-6">
        <h2>Revenue vs Target</h2>
        <select className="bg-gray-700 text-white py-1 px-3 rounded-md font-semibold focus:outline-none "
          name=""
          id=""
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="chartAnalytics grid grid-cols-2 gap-4 mb-8">
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          chartAnalytics
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          chartAnalytics
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          chartAnalytics
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          chartAnalytics
        </div>
      </div>

      <div className="aIPoweredInsights bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid mb-8">
        <h2 className="pb-4 text-xl font-semibold text-gray-100">
          AI-Powered Insights
        </h2>
        <div className="flex items-center">
          <div className="p-2">
            <LineChart
              className="text-green-500"
              width="1.75rem"
              height="1.75rem"
            />
          </div>

          <p className="text-gray-300 pl-3 text-base">
            Revenue is up 15% compared to last month, driven primarily by a
            successful email campaign.
          </p>
        </div>
        <div className="flex items-center">
          <div className="p-2">
            <Users
              className="text-blue-500"
              width="1.75rem"
              height="1.75rem"
            />
          </div>

          <p className="text-gray-300 pl-3 text-base">
            Customer retention has improved by 8% following the launch of the
            new loyalty program.
          </p>
        </div>
        <div className="flex items-center">
          <div className="p-2">
            <ShoppingBag
              className="text-purple-600"
              width="1.75rem"
              height="1.75rem"
            />
          </div>

          <p className="text-gray-300 pl-3 text-base">
            Customer retention has improved by 8% following the launch of the
            new loyalty program.
          </p>
        </div>
        <div className="flex items-center">
          <div className="p-2">
            <Dollar
              className="text-yellow-500"
              width="1.75rem"
              height="1.75rem"
            />
          </div>

          <p className="text-gray-300 pl-3 text-base">
            Optimizing pricing strategy could potentially increase overall
            profit margins by 5-7%.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
