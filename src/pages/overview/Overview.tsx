import Panel from "../../components/Panel";
import { Flash, Users, ShoppingBag, BarChart01 } from "../../icons";
import ChartSalesByChannel from "./components/ChartSalesByChannelOverview";
import ChartFramework from "../../components/ChartFramework";
import PieCharts from "../../components/PieCharts";
import LineCharts from "../../components/LineCharts";

function Overview() {
  const panelOverview = [
    {
      icon: (
        <Flash
          className="text-indigo-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Total Sales",
      amount: 12345,
      type: "asset",
    },
    {
      icon: (
        <Users
          className="text-purple-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "New Users",
      amount: 1234,
      type: "",
    },
    {
      icon: (
        <ShoppingBag
          className="text-pink-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Total Products",
      amount: 567,
      type: "",
    },
    {
      icon: (
        <BarChart01
          className="text-green-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Conversion Rate",
      amount: 12.5,
      type: "persent",
    },
  ];
  const chartOverview = [
    {
      title: "Sales Overview",
      nameChart: (
        <LineCharts
          dataLineChart={[
            { name: "Jul", value: 4200 },
            { name: "Aug", value: 3800 },
            { name: "Sep", value: 5100 },
            { name: "Oct", value: 4600 },
            { name: "Nov", value: 5400 },
            { name: "Dec", value: 7200 },
            { name: "Jan", value: 6100 },
            { name: "Feb", value: 5900 },
            { name: "Mar", value: 6800 },
            { name: "Apr", value: 6300 },
            { name: "May", value: 7100 },
            { name: "Jun", value: 7500 },
          ]}
          legendName={""}
        />
      ),
    },
    {
      title: " Category Distribution",
      nameChart: (
        <PieCharts
          dataPieChart={[
            { name: "Clothing", value: 3200 },
            { name: "Electronics", value: 4500 },
            { name: "Sports & Outdoors", value: 1900 },
            { name: "Books", value: 2100 },
            { name: "Home & Garden", value: 2800 },
          ]}
          colorPieChart={[
            "#8B5CF6",
            "#6366F1",
            "#F59E0B",
            "#10B981",
            "#EC4899",
          ]}
        />
      ),
    },
  ];
  return (
    <div className="overviewPage main py-6 px-8">
      <Panel panels={panelOverview} />

      <ChartFramework charts={chartOverview} />
      <div className="chartOverview grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:col-span-2 bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid ">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            Sales by Channel
          </h2>
          <ChartSalesByChannel />
        </div>
      </div>
    </div>
  );
}

export default Overview;
