// import React from 'react'
import HeaderPanel from "./HeaderPanel"

const Products = () => {
  return (
    <div className='main py-6 px-8'>
      <HeaderPanel
        totalSalesTitle="Total Sales" totalSales="$12,345"
        newUsersTitle="new Users" newUsers="1,234"
        totalProductsTitle="total Products" totalProducts="  567"
        ConversionRateTitle="Conversion Rate" ConversionRate=" 12.5%"
      />
      <div className='productList mb-8 bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid '>
        <div className="flex justify-between">
          <p>Product List</p>
          <div className="search">
            <input className=" bg-gray-700 focus:outline-none py-2 px-4 rounded-md" type="text" />

          </div>
        </div>
        <div></div>
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
