// import React from 'react'
import Sidebar from "./Sidebar";
import Header from "./Header";
import React from "react";

const Layout = (props: { children: React.ReactNode }) => {

  return (
    <div className="flex flex-row bg-gray-900 text-gray-50 overflow-hidden">
      <Sidebar />
      <div className={`header overflow-y-auto h-screen w-screen`}>
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
