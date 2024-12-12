import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages';


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
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

