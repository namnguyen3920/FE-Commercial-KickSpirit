import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/SideBar/SideBar";
import ProductsTables from "./components/Content/ProductTable";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default React.memo(AdminDashboard);
