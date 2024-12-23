// import React from 'react'
import PanelAnalytics from "./PanelAnalytics"

function Analytics() {
    return (
        <div className='analyticsPage main py-6 px-8'>
            <div className='grid grid-cols-4 gap-3 pb-8'>
                <PanelAnalytics />
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

export default Analytics
