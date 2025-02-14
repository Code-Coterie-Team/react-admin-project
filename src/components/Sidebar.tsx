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
import { useStore } from "../store";

const Sidbar = () => {
  const { toggleMenuBar, menuBar } = useStore();

  const ItemMenuBar = [
    {
      title: "overview",
      to: "/",
      icon: (
        <BarChart01
          className="text-indigo-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
    },
    {
      title: "Products",
      to: "/products",
      icon: (
        <ShoppingBag
          className="text-purple-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
    },
    {
      title: "Users",
      to: "/user",
      icon: (
        <Users
          className="text-pink-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
    },
    {
      title: "Sales",
      to: "/sales",
      icon: (
        <Dollar
          className="text-green-600"
          width="1.5rem"
          height="1.5rem"
        />
      ),
    },
    {
      title: "Orders",
      to: "/orders",
      icon: (
        <Cart
          className="text-yellow-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
    },
    {
      title: "Analytics",
      to: "/analytics",
      icon: (
        <LineChart
          className="text-blue-500"
          width="1.5rem"
          height="1.5rem"
        />
      ),
    },
    {
      title: "Setting",
      to: "/settings",
      icon: (
        <Setting
          className="text-teal-400"
          width="1.5rem"
          height="1.5rem"
        />
      ),
    },
  ];

  return (
    <div
      className={`sidbar p-4 border-r-[1px] border-solid border-grayb transition-all duration-1000
     ${menuBar ? "w-[80px]" : "w-[256px]"}
     `}
    >
      <button
        onClick={() => {
          toggleMenuBar();
        }}
        className="icon-menu hover:bg-bgHover hover:rounded-full"
      >
        <MenuLineHorizontal />
      </button>

      <nav className="pt-8 flex flex-col">
        {ItemMenuBar.map((item, index) => (
          <Link
            key={index}
            to={item.to}
          >
            <div className="flex p-4 mb-2 hover:bg-bgHover rounded-lg">
              <div>{item.icon}</div>
              <span
                className={`${
                  menuBar ? "opacity-0 " : "opacity-100 "
                } pl-3 font-medium transition-opacity duration-1000`}
              >
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidbar;
