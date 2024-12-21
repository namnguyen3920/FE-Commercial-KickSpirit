import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages';
import {AdminDashboard} from './Admin';
import ProductTable from './Admin/components/Content/ProductTable';
import UserTable from './Admin/components/Content/UserTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Routes>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<ProductTable />} />
              <Route path="/admin/product" element={<ProductTable />} />
              <Route path="/admin/user" element={<UserTable />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

