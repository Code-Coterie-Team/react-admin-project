// import { useState } from 'react'
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/overview/Overview";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import Sales from "./pages/sales/Sales";
import Orders from "./pages/order/Orders";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/setting/Settings";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Overview />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/user"
            element={<User />}
          />
          <Route
            path="/sales"
            element={<Sales />}
          />
          <Route
            path="/orders"
            element={<Orders />}
          />
          <Route
            path="/analytics"
            element={<Analytics />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
