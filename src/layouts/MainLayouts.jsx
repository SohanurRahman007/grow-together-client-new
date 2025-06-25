import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-7xl mx-auto">
        <div className="min-h-[calc(100vh-160px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
