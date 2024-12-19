// import { useState } from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
// import Sidbar from './components/Sidbar';
import Products from './components/Products';

function App() {


  return (
    <>
      <Layout >
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
