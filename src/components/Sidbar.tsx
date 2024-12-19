// import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLineHorizontal, BarChart01, ShoppingBag, Users, Dollar, Cart, LineChart, Setting } from '../icons';

const Sidbar = () => {
    return (
        <div className="sidbar p-4 border-r-[1px] border-solid border-grayb col-span-2 h-full w-full">

            <button className="icon-menu hover:bg-bgHover hover:rounded-full">
                <MenuLineHorizontal />
            </button>

            <nav className="pt-8 flex flex-col">

                <Link to="/">
                <div className="overView flex p-4 mb-2 hover:bg-bgHover rounded-lg">
                    <BarChart01 />
                    <span className="pl-3 font-medium ">
                        Overview
                    </span>
                </div>
                </Link>
             

                <Link to="/Products">
                    <div className="products flex  p-4 hover:bg-bgHover rounded-lg">
                        <ShoppingBag />
                        <span className="pl-3 font-medium ">
                            Products
                        </span>
                    </div>
                </Link>
                <div className="users mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
                    <Users />
                    <span className="pl-3 font-medium ">
                        Users
                    </span>
                </div>
                <div className="sales mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
                    <Dollar />
                    <span className="pl-3 font-medium ">
                        Sales
                    </span>
                </div>
                <div className="orders mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
                    <Cart />
                    <span className="pl-3 font-medium ">
                        Orders
                    </span>
                </div>
                <div className="analytics mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
                    <LineChart />
                    <span className="pl-3 font-medium ">
                        Analytics
                    </span>
                </div>
                <div className="setting flex p-4 hover:bg-bgHover rounded-lg">
                    <Setting />
                    <span className="pl-3 font-medium ">
                        Setting
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Sidbar
