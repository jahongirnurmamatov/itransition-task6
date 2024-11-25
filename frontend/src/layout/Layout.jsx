import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <Navbar/>
      <Sidebar/>
      <Outlet />
    </div>
  );
};

export default Layout;
