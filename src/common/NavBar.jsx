import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import hamburger from "../assets/desktop_home/mobile/hamburger.svg";
import cart from "../assets/desktop_home/mobile/cart.svg";
import { IoMdClose } from "react-icons/io"; // Import the close icon from react-icons
import HeroSection from "../layouts/HeroSection";
import { useEffect } from "react";
import Cart from "./Cart";
import { getItem, setItem } from "../utils/useLocalStoragepersist";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [cartDisplay, setCartdisplay] = useState(false);
  const [cartData, setCartData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/earphones.json")
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
        console.log(data?.[0].id);
      });
  }, []);

  function handleCartClicked() {
    setCartdisplay(!cartDisplay);
    console.log("cart clicked");
  }

  const showHero = location.pathname === "/";

  function handleNav() {
    setIsNavOpen(!isNavOpen);
  }

const [count, setCount] = useState(() => {
    const item = getItem("count");
    return item ? item : {};
  });
   useEffect(() => {
      setItem("count", count);
    }, [count]);

   function handleIncrement(id) {
    setCount((prev) => ({
      ...prev,
      [id]: (Number(prev[id]) || 1) + 1,
    }));
  }
  function handleDecrement(id) {
    setCount((prev) => {
      const current = Number(prev[id]) || 1;
      if (current > 1) {
        return {
          ...prev,
          [id]: current - 1,
        };
      }
      return prev;
    });
  }
  return (
    <div className="bg-[#101010] text-white ">
      <div className="relative container mx-auto">
        <nav className=" border-b border-white/20 flex items-center justify-between px-6 p-4">
          <div className="flex items-center gap-8">
            <div onClick={handleNav} className="cursor-pointer md:hidden">
              <img src={hamburger} alt="brand name" />
            </div>
            <Link to="/" className=" text-2xl font-bold ">
              audiophile
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-700 md:items-center  ">
            <Link to="/" className=" hover:text-[#D87D4A] uppercase">
              Home
            </Link>
            <Link to="headphones" className=" hover:text-[#D87D4A] uppercase">
              Headphones
            </Link>
            <Link to="speakers" className=" hover:text-[#D87D4A] uppercase">
              Speaker
            </Link>
            <Link to="earphones" className=" hover:text-[#D87D4A] uppercase">
              Earphones
            </Link>
          </div>

          <div onClick={handleCartClicked} className="relative">
            <img src={cart} alt="cart" />
            <div className="absolute"></div>
          </div>
        </nav>
        {/* mobile Nav Content */}
        <div
          className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 
          h-full bg-black shadow-lg transform transition-transform duration-300 z-50 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div onClick={handleNav} className="flex flex-col p-4 mt-2">
            <button className="flex justify-end">
              <IoMdClose className="h-6 w-6 text-white font-bold" />
            </button>

            <nav>
              <ul className="flex flex-col space-y-6 text-sm font-700 md:items-center mt-10 px-6">
                <Link to="/" className=" hover:text-[#D87D4A] uppercase">
                  Home
                </Link>
                <Link
                  to="headphones"
                  className=" hover:text-[#D87D4A] uppercase"
                >
                  Headphones
                </Link>
                <Link to="speakers" className=" hover:text-[#D87D4A] uppercase">
                  Speaker
                </Link>
                <Link
                  to="earphones"
                  className=" hover:text-[#D87D4A] uppercase"
                >
                  Earphones
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Show Hero Section */}
      <div className="container mx-auto">{showHero && <HeroSection />}</div>

      {/* Cart container */}

      {cartDisplay && (
        <Cart
          cartData={cartData}
          navigate={navigate}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          count={count}
          handleCartClicked={handleCartClicked}
          
        />
      )}
      {/* <div  
        
        className={`${cartDisplay ? "hidden " : " hidden"} fixed top-0 left-0`}
      >
        <nav>
          <ul className="flex flex-col space-y-6 text-sm font-700 md:items-center mt-10 px-6">
            <Link to="/" className=" hover:text-[#D87D4A] uppercase">
              Home
            </Link>
            <Link to="headphones" className=" hover:text-[#D87D4A] uppercase">
              Headphones
            </Link>
            <Link to="speakers" className=" hover:text-[#D87D4A] uppercase">
              Speaker
            </Link>
            <Link to="earphones" className=" hover:text-[#D87D4A] uppercase">
              Earphones
            </Link>
          </ul>
        </nav>
      </div> */}
    </div>
  );
};

export default NavBar;
