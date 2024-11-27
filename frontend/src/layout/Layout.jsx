import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout = () => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full flex flex-col">
      {/* Navbar */}

      <Navbar />
      {/* Main Content */}
      <div className="flex ">
        {/* Sidebar */}
        <div className="w-[300px] fixed top-[70px] left-0 bg-gray-500">
          <Sidebar />
        </div>

        {/* Outlet (main content) */}
        <div className="ml-[300px] fixed top-[70px]  p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
