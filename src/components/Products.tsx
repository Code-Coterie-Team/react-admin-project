// import React from 'react'
import Panel from "./Panel"
import { Flash, Users, ShoppingBag, BarChart01, Search02, Trash, EditRectangle } from "../icons"

const Products = () => {
  return (
    <div className='productPage main py-6 px-8'>
      <div className='grid grid-cols-4 gap-3 pb-8'>
        <Panel icon={<Flash />} title="Total Sales" amount={12} type="aset" />
        <Panel icon={<Users />} title="New Users" amount={14} type="" />
        <Panel icon={<ShoppingBag />} title="Total Products" amount={15} type="" />
        <Panel icon={<BarChart01 />} title="Conversion Rate" amount={15.5} type="persent" />
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
                <td className="px-6 py-4 text-sm">Electronics</td>
                <td className="px-6 py-4 text-sm">$59.99</td>
                <td className="px-6 py-4 text-sm">143</td>
                <td className="px-6 py-4 text-sm">1200</td>
                <td className="px-6 py-4 text-sm">
                  <button>
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm">Electronics</td>
                <td className="px-6 py-4 text-sm">$59.99</td>
                <td className="px-6 py-4 text-sm">143</td>
                <td className="px-6 py-4 text-sm">1200</td>
                <td className="px-6 py-4 text-sm">
                <button>
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm">Electronics</td>
                <td className="px-6 py-4 text-sm">$59.99</td>
                <td className="px-6 py-4 text-sm">143</td>
                <td className="px-6 py-4 text-sm">1200</td>
                <td className="px-6 py-4 text-sm">
                <button>
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm">Electronics</td>
                <td className="px-6 py-4 text-sm">$59.99</td>
                <td className="px-6 py-4 text-sm">143</td>
                <td className="px-6 py-4 text-sm">1200</td>
                <td className="px-6 py-4 text-sm">
                <button>
                    <EditRectangle/>
                  </button>
                  <button>
                    <Trash/>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Wireless Earbuds</td>
                <td className="px-6 py-4 text-sm">Electronics</td>
                <td className="px-6 py-4 text-sm">$59.99</td>
                <td className="px-6 py-4 text-sm">143</td>
                <td className="px-6 py-4 text-sm">1200</td>
                <td className="px-6 py-4 text-sm">
                <button>
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
