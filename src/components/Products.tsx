// import React from 'react'
import Panel from "./Panel"
import { PackageBox06, BarChart01, Search02, Trash, EditRectangle, LineChart, WarningError, Dollar } from "../icons"

const Products = () => {
  return (
    <div className='productPage main py-6 px-8'>
      <div className='grid grid-cols-4 gap-3 pb-8'>
        <Panel icon={<PackageBox06 className="text-indigo-600" width="1.5rem" height="1.5rem"/>}
         title="Total Products" amount={1234} type="" />
        <Panel icon={<LineChart className="text-green-600" width="1.5rem" height="1.5rem"/>} 
        title="Top Selling" amount={89} type="" />
        <Panel icon={<WarningError className="text-yellow-500" width="1.5rem" height="1.5rem"/>} title="Low Stock" amount={23} type="" />
        <Panel icon={<Dollar className="text-red-500" width="1.5rem" height="1.5rem"/>} title="Total Revenue" amount={543210} type="aset" />
      </div>
      <div className='productList mb-8 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid '>
        <div className="flex pb-7 justify-between items-center">
          <h2 className="text-xl text-gray-100 font-semibold">Product List</h2>
          <div className="search relative">
            <input
              className=" bg-gray-700 focus:outline-none focus:ring focus:border-blue-500 py-2 pr-4 pl-10 rounded-lg placeholder-gray-400 "
              placeholder="Search products..."
              type="text" />
            <div className="absolute top-[0.625rem] left-2">
              <Search02 />
            </div>
          </div>
        </div>
        <div className="tableProductList">
          <table className="border-collapse w-full ">
            <thead>
              <tr>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">
                Name
                </th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Category</th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Price</th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Stock</th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Sales</th>
                <th className="uppercase px-6 py-3 text-gray-400 text-xs tracking-wider text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm text-gray-300">Electronics</td>
                <td className="px-6 py-4 text-sm text-gray-300">$59.99</td>
                <td className="px-6 py-4 text-sm text-gray-300">143</td>
                <td className="px-6 py-4 text-sm text-gray-300">1200</td>
                <td className="px-6 py-4 text-sm">
                  <button className="pr-2">
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm text-gray-300">Electronics</td>
                <td className="px-6 py-4 text-sm text-gray-300">$59.99</td>
                <td className="px-6 py-4 text-sm text-gray-300">143</td>
                <td className="px-6 py-4 text-sm text-gray-300">1200</td>
                <td className="px-6 py-4 text-sm">
                <button className="pr-2">
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm text-gray-300">Electronics</td>
                <td className="px-6 py-4 text-sm text-gray-300">$59.99</td>
                <td className="px-6 py-4 text-sm text-gray-300">143</td>
                <td className="px-6 py-4 text-sm text-gray-300">1200</td>
                <td className="px-6 py-4 text-sm">
                <button className="pr-2">
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm text-gray-300">Electronics</td>
                <td className="px-6 py-4 text-sm text-gray-300">$59.99</td>
                <td className="px-6 py-4 text-sm text-gray-300">143</td>
                <td className="px-6 py-4 text-sm text-gray-300">1200</td>
                <td className="px-6 py-4 text-sm">
                <button className="pr-2">
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm text-gray-300">Electronics</td>
                <td className="px-6 py-4 text-sm text-gray-300">$59.99</td>
                <td className="px-6 py-4 text-sm text-gray-300">143</td>
                <td className="px-6 py-4 text-sm text-gray-300">1200</td>
                <td className="px-6 py-4 text-sm">
                <button className="pr-2">
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
            </tbody>


          </table>
        </div>
      </div>
      <div className="chartProducts grid grid-cols-2 gap-4">

        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          chartproducts
        </div>
        <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
          chartProducts
        </div>
      </div>

    </div>
  )
}

export default Products
