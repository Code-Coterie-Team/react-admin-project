// import React from 'react';
import { Link } from "react-router-dom";
import {
  MenuLineHorizontal,
  BarChart01,
  ShoppingBag,
  Users,
  Dollar,
  Cart,
  LineChart,
  Setting,
} from "../icons";

const Sidbar = () => {
  return (
    <div className="sidbar p-4 border-r-[1px] border-solid border-grayb col-span-2 h-full w-full">
      <button className="icon-menu hover:bg-bgHover hover:rounded-full">
        <MenuLineHorizontal />
      </button>

      <nav className="pt-8 flex flex-col">
        <Link to="/">
          <div className="overView flex p-4 mb-2 hover:bg-bgHover rounded-lg">
            <BarChart01
              className="text-indigo-600"
              width="1.5rem"
              height="1.5rem"
            />
            <span className="pl-3 font-medium ">Overview</span>
          </div>
        </Link>

        <Link to="/products">
          <div className="products flex  p-4 hover:bg-bgHover rounded-lg">
            <ShoppingBag
              className="text-purple-600"
              width="1.5rem"
              height="1.5rem"
            />
            <span className="pl-3 font-medium ">Products</span>
          </div>
        </Link>
        <Link to="/user">
          <div className="users mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
            <Users
              className="text-pink-500"
              width="1.5rem"
              height="1.5rem"
            />
            <span className="pl-3 font-medium ">Users</span>
          </div>
        </Link>
        <Link to="/sales">
          <div className="sales mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
            <Dollar
              className="text-green-600"
              width="1.5rem"
              height="1.5rem"
            />
            <span className="pl-3 font-medium ">Sales</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="orders mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
            <Cart className="text-yellow-500"
              width="1.5rem"
              height="1.5rem"/>
            <span className="pl-3 font-medium ">Orders</span>
          </div>
        </Link>
        <Link to="/analytics">
          <div className="analytics mb-2 flex  p-4 hover:bg-bgHover rounded-lg">
            <LineChart className="text-blue-500"
              width="1.5rem"
              height="1.5rem"/>
            <span className="pl-3 font-medium ">Analytics</span>
          </div>
        </Link>
        <Link to="/setting">
          <div className="setting flex p-4 hover:bg-bgHover rounded-lg">
            <Setting className="text-teal-400"
              width="1.5rem"
              height="1.5rem"/>
            <span className="pl-3 font-medium ">Setting</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidbar;
