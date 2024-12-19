// import React from 'react'
// import HeaderPanel from "./HeaderPanel"
import Panel from "./panel"
import { Flash, Users, ShoppingBag, BarChart01 } from "../icons"
function Overview() {

    return (
        <div className='main py-6 px-8'>
            <div className='grid grid-cols-4 gap-3 pb-8'>
                <Panel icon={<Flash />} title="Total Sales" amount={12345} type="aset" />
                <Panel icon={<Users />} title="New Users" amount={1234} type="" />
                <Panel icon={<ShoppingBag />} title="Total Products" amount={567} type="" />
                <Panel icon={<BarChart01 />} title="Conversion Rate" amount={12.5} type="persent" />
            </div>
            <div className="chartOverview grid grid-cols-2 gap-4">
                <div className='bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid'>
                    chartOverview01
                </div>
                <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                    chartOverview02
                </div>
                <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border-[1px] border-solid ">
                    chartOverview03
                </div>
            </div>

        </div>
    )
}

export default Overview
