import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;