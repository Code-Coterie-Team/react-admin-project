// import React from 'react'

import { Dollar, Cart, LineChart, Layout06 } from "../icons"
import Panel from "./Panel"

function Sales() {
    return (
        <div className='overviewPage main py-6 px-8 h-screen'>
        <div className='grid grid-cols-4 gap-3 pb-8'>
            <Panel icon={<Dollar />} title="Total Revenue" amount={1234567} type="aset" />
            <Panel icon={<Cart />} title="Avg. Order Value" amount={78.90} type="aset" />
            <Panel icon={<LineChart />} title="Conversion Rate" amount={3.45} type="persent" />
            <Panel icon={<Layout06 />} title="Sales Growth" amount={12.3} type="persent" />
        </div>
        <div className="chartOverview grid grid-cols-2 gap-4">
            <div className='bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid'>
                chartSales01
            </div>
            <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                chartSales02
            </div>
            <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                chartSales03
            </div>
        </div>

    </div>
    )
}

export default Sales
