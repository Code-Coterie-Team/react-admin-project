// import { useState } from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import Products from './components/Products';
import User from './components/User';
import Sales from './components/Sales';
import Orders from './components/Orders';
import Analytics from './components/Analytics';
import Settings from './components/Settings';

function App() {


  return (
    <>
      <Layout >
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<User />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
