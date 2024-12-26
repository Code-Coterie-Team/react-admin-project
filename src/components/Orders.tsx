import {
  Alarm,
  ShoppingBag,
  CheckMarkCircle,
  Dollar,
  Eyse,
  Search02,
} from "../icons";
import ChartDailyOrders from "./chartOrders/ChartDailyOrders";
import ChartOrderStatusDistribution from "./chartOrders/ChartOrderStatusDistribution";
import Panel from "./Panel";

function Orders() {
  return (
    <div className="productPage main py-6 px-8">
      <div className="grid grid-cols-4 gap-3 pb-8">
        <Panel
          icon={
            <ShoppingBag
              className="text-indigo-600"
              width="1.5rem"
              height="1.rem"
            />
          }
          title="Total Orders"
          amount={1234}
          type=""
        />
        <Panel
          icon={
            <Alarm
              className="text-yellow-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Pending Orders"
          amount={56}
          type=""
        />
        <Panel
          icon={
            <CheckMarkCircle
              className="text-green-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Completed Orders"
          amount={1178}
          type=""
        />
        <Panel
          icon={
            <Dollar
              className="text-red-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Total Revenue"
          amount={98765}
          type="aset"
        />
      </div>
      <div className="chartProducts mb-8 grid grid-cols-2 gap-4">
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
        <h2 className="text-lg font-medium pb-4 text-gray-100">
        Daily Orders
          </h2>
          <ChartDailyOrders/>
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
        <h2 className="text-lg font-medium pb-4 text-gray-100">
        Order Status Distribution
          </h2>
          <ChartOrderStatusDistribution/>
        </div>
      </div>
      <div className="productList  bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
        <div className="flex pb-7 justify-between items-center">
          <h2 className="text-xl text-gray-100 font-semibold">Order List</h2>
          <div className="search relative">
            <input
              className=" bg-gray-700 focus:outline-none focus:ring focus:border-blue-500 py-2 pr-4 pl-10 rounded-lg placeholder-gray-400 "
              placeholder="Search products..."
              type="text"
            />
            <div className="absolute top-[0.625rem] left-2">
              <Search02  className="text-gray-400"
                      width="1.25rem"
                      height="1.25rem"/>
            </div>
          </div>
        </div>
        <div className="tableProductList">
          <table className="border-collapse w-full ">
            <thead>
              <tr>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Order ID
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Customer
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Total
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Status
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Date
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 font-semibold text-xs rounded-full px-2">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse
                      className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-yellow-100 text-yellow-800 font-semibold text-xs rounded-full px-2">
                    Processing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse    className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 font-semibold text-xs rounded-full px-2">
                    Shipped
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse    className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-red-100 text-red-800 font-semibold text-xs rounded-full px-2">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse    className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 font-semibold text-xs rounded-full px-2">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse    className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 font-semibold text-xs rounded-full px-2">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse    className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 font-semibold text-xs rounded-full px-2">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse    className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">ORD001</td>
                <td className="px-6 py-4 text-sm font-medium">John Doe</td>
                <td className="px-6 py-4 text-sm font-medium"> $235.40</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 font-semibold text-xs rounded-full px-2">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  2023-07-01
                </td>
                <td className="px-6 py-4">
                  <button>
                    <Eyse    className="text-indigo-400"
                      width="1.25rem"
                      height="1.25rem"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
