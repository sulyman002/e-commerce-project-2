import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/desktop_home/mobile/hamburger.svg";
import cart from "../assets/desktop_home/mobile/cart.svg";
cart;

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNav() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <>
      <nav className="mx-auto bg-black text-white flex items-center justify-between px-6 p-4">
        <div className="flex items-center gap-8">
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <img src={hamburger} alt="brand name" />
          </div>
          <Link to="/" className=" text-2xl font-bold ">
            audiophile
          </Link>
        </div>
        <div>
          <img src={cart} alt="cart" />
        </div>
      </nav>
      {/* mobile Nav Content */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 
          h-full bg-black/70 shadow-lg transform transition-transform duration-300 z-50 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default NavBar;
