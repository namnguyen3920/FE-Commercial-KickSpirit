import React from "react";
import { Outlet } from "react-router-dom";
import { SecondaryHeader } from "../components";
const ProductOrderPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky w-full top-0 z-50">
        <SecondaryHeader />
      </header>
      <main className="flex-grow p-4 pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default React.memo(ProductOrderPage);
