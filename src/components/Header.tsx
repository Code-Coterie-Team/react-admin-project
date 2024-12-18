// import React from 'react'
// import Overview from './Overview'
import Products from './Products'

const Header = () => {
    return (
        <div className="header col-span-10 w-full">
            <h1 className="font-bold border-b-[1px] border-solid border-grayb py-4 px-8 text-[1.5rem]">Overview</h1>

            {/* <Overview /> */}
            <Products />
        </div>
    )
}

export default Header
