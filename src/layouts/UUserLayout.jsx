import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

const UserLayout = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* main content */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
