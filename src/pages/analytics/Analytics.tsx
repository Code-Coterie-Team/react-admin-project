import {
  ArrowDown,
  ArrowUp,
  Dollar,
  Eyse,
  LineChart,
  ShoppingBag,
  Users,
} from "../../icons";
import ChartProductPerformance from "./components/ChartProductPerformanceAlytics";
import ChartCustomerSegmentation from "./components/ChartCustomerSegmentationAlytics";
import PanelAnalytics from "../../components/PanelAnalytics";
import ChartFramework from "../../components/ChartFramework";
import PieCharts from "../../components/PieCharts";
import LineCharts from "../../components/LineCharts";
import AreaCharts from "../../components/AreaCharts";

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
    {
      title: "Channel Performance",
      nameChart: (
        <PieCharts
          dataPieChart={[
            { name: "Organic Search", value: 4000 },
            { name: "Paid Search", value: 3000 },
            { name: "Direct", value: 2000 },
            { name: "Social Media", value: 2780 },
            { name: "Referral", value: 1890 },
            { name: "Email ", value: 2390 },
          ]}
          colorPieChart={[
            "#8884d8",
            "#82ca9d",
            "#ffc658",
            "#ff8042",
            "#0088FE",
            "#00C49F",
          ]}
        />
      ),
    },
    { title: " Product Performance", nameChart: <ChartProductPerformance /> },
    {
      title: "User Retention",
      nameChart: (
        <LineCharts
          dataLineChart={[
            { name: "Week 1", value: 100 },
            { name: "Week 2", value: 75 },
            { name: "Week 3", value: 60 },
            { name: "Week 4", value: 50 },
            { name: "Week 5", value: 45 },
            { name: "Week 6", value: 40 },
            { name: "Week 7", value: 37 },
            { name: "Week 8", value: 35 },
          ]}
          legendName={"retention"}
        />
      ),
    },
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
        {itemPanel.map((item, index) => (
          <PanelAnalytics
            key={index}
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
        <AreaCharts
          dataListAreaCharts={[
            { name: "Jan", value: 4000, valuetow: 3800 },
            { name: "Feb", value: 3000, valuetow: 3200 },
            { name: "Mar", value: 5000, valuetow: 4500 },
            { name: "Apr", value: 4500, valuetow: 4200 },
            { name: "May", value: 6000, valuetow: 5500 },
            { name: "Jun", value: 5500, valuetow: 5800 },
            { name: "Jul", value: 7000, valuetow: 6500 },
          ]}
          legendValue={"revenue"}
          legendValuetow={"target"}
        />
      </div>

      <ChartFramework charts={chartAnalytics} />
      <div className="aIPoweredInsights bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid mb-8">
        <h2 className="pb-4 text-xl font-semibold text-gray-100">
          AI-Powered Insights
        </h2>
        {itemPoweredInsights.map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <div className="p-2">{item.iconName}</div>

            <p className="text-gray-300 pl-3 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
