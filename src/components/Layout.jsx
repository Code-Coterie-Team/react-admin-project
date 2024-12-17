import React from 'react'
import Sidbar from './Sidbar'
import Header from './Header'

const Layout = () => {
    return (
        <div className="grid grid-cols-12 bg-gray-900 h-screen text-gray-50 ">
            <Sidbar />
            <Header />
        </div>
    )
}

export default Layout
