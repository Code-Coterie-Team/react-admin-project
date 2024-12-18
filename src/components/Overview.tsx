// import React from 'react'

import HeaderPanel from "./HeaderPanel"

function Overview() {

    return (
        <div className='main py-6 px-8'>
            <HeaderPanel
                totalSalesTitle="Total Sales" totalSales="$12,345"
                newUsersTitle="new Users" newUsers="1,234"
                totalProductsTitle="total Products" totalProducts="  567"
                ConversionRateTitle="Conversion Rate" ConversionRate=" 12.5%"
            />
            <div className="chartOverview grid grid-cols-2 gap-4">
                <div className='bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid'>
                    ggggggggggggggggggggggg
                </div>
                <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                    gggggggggggggggggggggggg
                </div>
                <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                    gggggggggggggggggggggggg
                </div>
            </div>

        </div>
    )
}

export default Overview
