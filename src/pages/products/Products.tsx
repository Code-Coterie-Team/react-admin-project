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
import ChartProductsSalesTrend from "./components/ChartProductsSalesTrend";
import ChartProductsCategoryDistribution from "./components/ChartProductsCategoryDistribution";
import { useGetAllProducts } from "../../api";
import { useEffect, useState } from "react";

const Products = () => {
  const { data, isLoading, isError } = useGetAllProducts();
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchProduct == "") {
      setFilteredData(data);
    } else {
      const results = data?.filter((item) =>
        item.name.toLowerCase().includes(searchProduct.toLowerCase())
      );
      setFilteredData(results);
    }
  }, [searchProduct]);

  if (isLoading) {
    return <div className="">Loading</div>;
  }

  if (isError) {
    return <div className="">Error</div>;
  }

  return (
    <div className="productPage main py-6 px-8">
      <div className="grid grid-cols-4 gap-3 pb-8">
        <Panel
          icon={
            <PackageBox06
              className="text-indigo-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Total Products"
          amount={1234}
          type=""
        />
        <Panel
          icon={
            <LineChart
              className="text-green-600"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Top Selling"
          amount={89}
          type=""
        />
        <Panel
          icon={
            <WarningError
              className="text-yellow-500"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title="Low Stock"
          amount={23}
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
          amount={543210}
          type="aset"
        />
      </div>
      <div className="productList mb-8 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
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
              <tr  className="tableBorderB">
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
              {filteredData?.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 text-sm">
                    

                  <div className="flex flex-row gap-4 items-center">
                      <div className="flex justify-center items-center h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full ">
                       <img className="rounded-full" src="src/img/products/img01.jpg" alt="" />
                      </div>
                      <span className="font-semibold text-sm">  {product.name}</span>
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
      <div className="chartProducts grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            Sales Trend
          </h2>
          <ChartProductsSalesTrend />
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            Category Distribution
          </h2>
          <ChartProductsCategoryDistribution />
        </div>
      </div>
    </div>
  );
};

export default Products;
