// import React from 'react'
import Panel from "../../components/Panel";
import {
  PackageBox06,
  Search02,
  Trash,
  EditRectangle,
  LineChart,
  WarningError,
  Dollar,
} from "../../icons";
import { useGetAllProducts } from "../../api";
import { useState } from "react";
import ChartFramework from "../../components/ChartFramework";
import PieCharts from "../../components/PieCharts";
import LineCharts from "../../components/LineCharts";

const Products = () => {
  const { data, isLoading, isError } = useGetAllProducts();
  const [searchProduct, setSearchProduct] = useState<string>("");

  if (isLoading) {
    return <div className="">Loading</div>;
  }

  if (isError) {
    return <div className="">Error</div>;
  }
  const ArrayPanelProducts = [
    {
      icon: (
        <PackageBox06
          className="text-indigo-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Total Products",
      amount: 1234,
      type: "",
    },
    {
      icon: (
        <LineChart
          className="text-green-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Top Selling",
      amount: 89,
      type: "",
    },
    {
      icon: (
        <WarningError
          className="text-yellow-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
      title: "Low Stock",
      amount: 23,
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
      amount: 543210,
      type: "asset",
    },
  ];
  const chartProducts = [
    {
      title: "Sales Trend",
      nameChart: (
        <LineCharts
          dataLineChart={[
            { name: "Jan", value: 4000 },
            { name: "Feb", value: 3000 },
            { name: "Mar", value: 5000 },
            { name: "Apr", value: 4500 },
            { name: "May", value: 6000 },
            { name: "Jun", value: 5500 },
          ]}
          legendName={"sale"}
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
    <div className="productPage main py-6 px-8">
      <Panel panels={ArrayPanelProducts} />

      <div className="productList mb-8 bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid ">
        <div className="flex pb-7 justify-between items-center">
          <h2 className="text-xl text-gray-100 font-semibold">Product List</h2>
          <div className="search relative">
            <input
              onChange={(e) => setSearchProduct(e.target.value)}
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
        <div className="tableProductList overflow-auto">
          <table className="border-collapse w-full ">
            <thead>
              <tr className="tableBorderB">
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Name
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Category
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Price
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Stock
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Sales
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                ?.filter((item) => {
                  if (searchProduct === "") {
                    return item;
                  } else {
                    return item.name
                      .toLowerCase()
                      .includes(searchProduct.toLowerCase());
                  }
                })
                .map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex flex-row gap-4 items-center">
                        <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                          <img
                            className="rounded-full"
                            src="src/img/products/img01.jpg"
                            alt=""
                          />
                        </div>
                        <span className="font-semibold text-sm">
                          {" "}
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {product.stocks}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {product.sales}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="pr-2 text-indigo-400 hover:text-indigo-300">
                        <EditRectangle />
                      </button>
                      <button className="hover:text-red-300 text-red-400">
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ChartFramework charts={chartProducts} />
    </div>
  );
};

export default Products;
