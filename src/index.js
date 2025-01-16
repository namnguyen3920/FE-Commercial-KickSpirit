import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {AdminDashboard} from './Admin';
import {
  Home,
  Login,
  ProductDetailPage,
  ProductOrderPage,
  ProfilePage
} from "./pages";
import ProductTable from './Admin/components/Content/ProductTable';
import UserTable from './Admin/components/Content/UserTable';
import PlaceOrder from './components/order-components/PlaceOrder';
import BrandProductPage from './pages/BrandProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="brands/:brandName" element={<BrandProductPage />} />
          </Route>          
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/product-order" element={<ProductOrderPage />} >
            <Route path="buying" element={<PlaceOrder />} />
          </Route>
        </Routes>
        <Routes>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<ProductTable />} />
              <Route path="product" element={<ProductTable />} />
              <Route path="user" element={<UserTable />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

