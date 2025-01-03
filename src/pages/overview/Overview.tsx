import Panel from "../../components/Panel";
import { Flash, Users, ShoppingBag, BarChart01 } from "../../icons";
import ChartSalesOverview from "./components/ChartSalesOverview";
import ChartCategoryDistribution from "./components/ChartCategoryDistributionOverview";
import ChartSalesByChannel from "./components/ChartSalesByChannelOverview";

function Overview() {
  return (
    <div className="overviewPage main py-6 px-8">
      <div className="grid grid-cols-4 gap-3 pb-8">
        <Panel
          icon={
            <Flash
              className="text-indigo-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Total Sales"
          amount={12345}
          type="aset"
        />
        <Panel
          icon={
            <Users
              className="text-purple-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="New Users"
          amount={1234}
          type=""
        />
        <Panel
          icon={
            <ShoppingBag
              className="text-pink-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Total Products"
          amount={567}
          type=""
        />
        <Panel
          icon={
            <BarChart01
              className="text-green-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Conversion Rate"
          amount={12.5}
          type="persent"
        />
      </div>
      <div className="chartOverview grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            Sales Overview
          </h2>

          <ChartSalesOverview />
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            Category Distribution
          </h2>
          <ChartCategoryDistribution />
        </div>
        <div className="lg:col-span-2 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
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
