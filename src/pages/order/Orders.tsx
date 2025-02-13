import {
  Alarm,
  ShoppingBag,
  CheckMarkCircle,
  Dollar,
  Eyse,
  Search02,
} from "../../icons";
import Panel from "../../components/Panel";
import ChartOrderStatusDistribution from "./components/ChartOrderStatusDistribution";
import ChartDailyOrders from "./components/ChartDailyOrders";
import ChartFramework from "../../components/ChartFramework";

function Orders() {
 const chartOrder = [
    {
      title: "Daily Orders",
      nameChart: (<ChartDailyOrders />),
    },
    {
      title: "Order Status Distribution",
      nameChart: (<ChartOrderStatusDistribution />),
    },
  ]; 

  const ArrayPanelOrders = [
    {
      icon: (
        <ShoppingBag
          className="text-indigo-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Total Orders",
      amount: 1234,
      type: "",
    },
    {
      icon: (
        <Alarm
          className="text-yellow-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Pending Orders",
      amount: 56,
      type: "",
    },
    {
      icon: (
        <CheckMarkCircle
          className="text-green-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Completed Orders",
      amount: 1178,
      type: "",
    },
    {
      icon: (
        <Dollar
          className="text-red-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Total Revenue",
      amount: 98765,
      type: "asset",
    },
  ];
  const dataTableOrder = [
    {
      orderId: "ORD001",
      customer: "John Doe",
      total: "$235.40",
      status: "Delivered",
      date: "2023-07-01",
    },
    {
      orderId: "ORD002",
      customer: "Jane Smith",
      total: "$150.00",
      status: "Processing",
      date: "2023-07-02",
    },
    {
      orderId: "ORD003",
      customer: "Alice Johnson",
      total: "$300.50",
      status: "Shipped",
      date: "2023-07-03",
    },
    {
      orderId: "ORD004",
      customer: "Bob Brown",
      total: "$120.00",
      status: "Pending",
      date: "2023-07-04",
    },
  ];
  return (
    <div className="productPage main py-6 px-8">
      <Panel panels={ArrayPanelOrders} />
      <ChartFramework charts={chartOrder} />
      <div className="productList  bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid ">
        <div className="flex pb-7 justify-between items-center">
          <h2 className="text-xl text-gray-100 font-semibold">Order List</h2>
          <div className="search relative">
            <input
              className=" bg-gray-700 focus:outline-none focus:ring focus:border-blue-500 py-2 pr-4 pl-10 rounded-lg placeholder-gray-400 "
              placeholder="Search products..."
              type="text"
            />
            <div className="absolute top-[0.625rem] left-2">
              <Search02
                className="text-gray-400"
                width="1.25rem"
                height="1.25rem"
              />
            </div>
          </div>
        </div>
        <div className="tableProductList">
          <table className="border-collapse w-full ">
            <thead>
              <tr className="tableBorderB">
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
              {dataTableOrder.map((order, index) => (
                <tr
                  key={index}
                  className="tableBorderB"
                >
                  <td className="px-6 py-4 text-sm font-medium">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`bg-${
                        order.status === "Delivered"
                          ? "green"
                          : order.status === "Processing"
                          ? "yellow"
                          : order.status === "Shipped"
                          ? "blue"
                          : "red"
                      }-100 text-${
                        order.status === "Delivered"
                          ? "green"
                          : order.status === "Processing"
                          ? "yellow"
                          : order.status === "Shipped"
                          ? "blue"
                          : "red"
                      }-800 font-semibold text-xs rounded-full px-2`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {order.date}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
