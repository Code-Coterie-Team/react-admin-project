import React from 'react'
import Overview from './Overview'

const Header = () => {
    return (
        <div className="header col-span-10 w-full">
            <h1 className="font-bold border-b-[1px] border-solid border-grayb py-4 px-8 text-[1.5rem]">Overview</h1>
            <div className="body py-6 px-8">
                <Overview/>
            </div>
        </div>
    )
}

export default Header
