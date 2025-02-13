// import React from 'react'
import {
  ArrowDown,
  ArrowUp,
  Dollar,
  Eyse,
  LineChart,
  ShoppingBag,
  Users,
} from "../../icons";
import ChartChannelPerformance from "./components/ChartChannelPerformanceanAlytics";
import ChartProductPerformance from "./components/ChartProductPerformanceAlytics";
import ChartCustomerSegmentation from "./components/ChartCustomerSegmentationAlytics";
import ChartRevenueVsTarget from "./components/ChartRevenueVsTargetAlytics";
import ChartUserRetention from "./components/ChartUserRetentionAlytics";
import PanelAnalytics from "../../components/PanelAnalytics";
import ChartFramework from "../../components/ChartFramework";

function Analytics() {
  const itemPanel = [
    {
      icon: (
        <Dollar
          className="text-green-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      bgIcon: "green",
      title: "Revenue",
      amount: 123456,
      type: "asset",
      icomMountLastPeriod: (
        <ArrowUp
          className="text-green-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      lastPeriod: "vs last period",
      amountLastPeriod: 12.5,
      typeLastPeriod: "up",
    },
    {
      icon: (
        <Users
          className="text-green-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      bgIcon: "green",
      title: "Users",
      amount: 45678,
      type: "",
      icomMountLastPeriod: (
        <ArrowUp
          className="text-green-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      lastPeriod: "vs last period",
      amountLastPeriod: 8.3,
      typeLastPeriod: "up",
    },
    {
      icon: (
        <ShoppingBag
          className="text-red-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      bgIcon: "red",
      title: "Orders",
      amount: 9876,
      type: "asset",
      icomMountLastPeriod: (
        <ArrowDown
          className="text-red-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      lastPeriod: "vs last period",
      amountLastPeriod: 3.2,
      typeLastPeriod: "down",
    },
    {
      icon: (
        <Eyse
          className="text-green-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      bgIcon: "green",
      title: "Page Views",
      amount: 1234567,
      type: "asset",
      icomMountLastPeriod: (
        <ArrowUp
          className="text-green-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      lastPeriod: "vs last period",
      amountLastPeriod: 15.7,
      typeLastPeriod: "up",
    },
  ];
  const chartAnalytics = [
    { title: "Channel Performance", nameChart: <ChartChannelPerformance /> },
    { title: " Product Performance", nameChart: <ChartProductPerformance /> },
    { title: "User Retention", nameChart: <ChartUserRetention /> },
    {
      title: "Customer Segmentation",
      nameChart: <ChartCustomerSegmentation />,
    },
  ];
  const itemPoweredInsights = [
    {
      description:
        " Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
      iconName: (
        <LineChart
          className="text-green-500"
          width="1.75rem"
          height="1.75rem"
        />
      ),
    },
    {
      description:
        "Customer retention has improved by 8% following the launch of the new loyalty program.",
      iconName: (
        <Users
          className="text-blue-500"
          width="1.75rem"
          height="1.75rem"
        />
      ),
    },
    {
      description:
        "Customer retention has improved by 8% following the launch of the new loyalty program.",
      iconName: (
        <ShoppingBag
          className="text-purple-600"
          width="1.75rem"
          height="1.75rem"
        />
      ),
    },
    {
      description:
        "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
      iconName: (
        <Dollar
          className="text-yellow-500"
          width="1.75rem"
          height="1.75rem"
        />
      ),
    },
  ];
  return (
    <div className="analyticsPage main py-6 px-8">
      <div className="grid grid-cols-4 gap-3 pb-8">
        {itemPanel.map((item) => (
          <PanelAnalytics
            icon={item.icon}
            bgIcon={item.bgIcon}
            title={item.title}
            amount={item.amount}
            type={item.type}
            icomMountLastPeriod={item.icomMountLastPeriod}
            amountLastPeriod={item.amountLastPeriod}
            lastPeriod={item.lastPeriod}
            typeLastPeriod={item.typeLastPeriod}
          />
        ))}
      </div>
      <div className="revenueVsTarget  bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            Revenue vs Target
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
        <ChartRevenueVsTarget />
      </div>

      <ChartFramework charts={chartAnalytics} />
      <div className="aIPoweredInsights bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid mb-8">
        <h2 className="pb-4 text-xl font-semibold text-gray-100">
          AI-Powered Insights
        </h2>
        {itemPoweredInsights.map((item) => (
          <div className="flex items-center">
            <div className="p-2">{item.iconName}</div>

            <p className="text-gray-300 pl-3 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
