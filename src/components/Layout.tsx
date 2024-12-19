// import React from 'react'
import Sidbar from './Sidbar'
import Header from './Header'
import React from 'react'

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-12 bg-gray-900 text-gray-50 ">
            <Sidbar />
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
