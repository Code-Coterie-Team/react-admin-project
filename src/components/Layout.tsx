// import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import React from 'react'
import { useStore } from "../store";

const Layout = (props: { children: React.ReactNode }) => {

    const menuBar = useStore((state) => state.menuBar);

    return (
        <div className="grid grid-cols-12 bg-gray-900 text-gray-50 ">
            <Sidebar />
            <div className={`header  ${menuBar ? " col-span-11" : " col-span-10"}`}>
                <Header />
                {props.children}
            </div>

        


        </div>
    )
}

export default Layout
