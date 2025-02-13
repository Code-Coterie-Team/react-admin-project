import Panel from "../../components/Panel";
import { Flash, Users, ShoppingBag, BarChart01 } from "../../icons";
import ChartSalesOverview from "./components/ChartSalesOverview";
import ChartCategoryDistribution from "./components/ChartCategoryDistributionOverview";
import ChartSalesByChannel from "./components/ChartSalesByChannelOverview";
import ChartFramework from "../../components/ChartFramework";

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
      nameChart: <ChartSalesOverview />,
    },
    {
      title: " Category Distribution",
      nameChart: <ChartCategoryDistribution />,
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
