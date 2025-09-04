import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburger from "../assets/desktop_home/mobile/hamburger.svg";
import cart from "../assets/desktop_home/mobile/cart.svg";
import { IoMdClose } from "react-icons/io"; // Import the close icon from react-icons
import HeroSection from "../layouts/HeroSection";
import { useEffect } from "react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [cartDisplay, setCartdisplay] = useState(false);
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    fetch("/public/earphones.json")
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

  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
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

          <div onClick={handleCartClicked}>
            <img src={cart} alt="cart" />
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
        <div className="fixed bg-black/60 inset-0 z-10">
          <div className="flex justify-center md:justify-end md:items-start md:mt-20 md:mr-40 items-center h-full px-4">
            <div className="w-4/5 md:w-[377px] h-[488px] bg-white rounded-lg">
              <button
                onClick={handleCartClicked}
                className="flex justify-end w-full p-4 cursor-pointer"
              >
                <IoMdClose className="h-8 w-8 font-bold text-black" />
              </button>
              <div>
                <div className="flex justify-between items-center px-6">
                  <h2 className="text-[18px] font-bold text-black ">
                    Cart (3)
                  </h2>
                  <div className="underline text-black/70 text-[15px] cursor-pointer ">
                    Remove all
                  </div>
                </div>
              </div>

              <div className="flex text-black flex-col gap-4 mt-3 h-1/2 overflow-y-auto bg-gray-200 py-3 px-3 mx-6 rounded-md">
               
              {/* cart content */}
               <div className="flex items-center justify-between ">
                  <div className="flex gap-2">
                    <div className="h-[64px] w-[64px] bg-[#F1F1F1] rounded flex items-center justify-center ">
                      <img
                        src={cartData?.[0].image}
                        alt=""
                        className=" h-[40px] rounded "
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px] w-[76px] overflow-x-auto">
                      <h2 className="text-[15px] font-bold whitespace-nowrap ">
                        {cartData?.[0].title}
                      </h2>
                      <p className="text-sm font-bold text-black/50 ">
                        $ {cartData?.[0].price}
                      </p>
                    </div>
                  </div>
                  <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
                    <div onClick={handleDecrement} className="text-black/70">
                      -
                    </div>
                    <div className="">{count}</div>
                    <div onClick={handleIncrement} className="text-black/70">
                      +
                    </div>
                  </div>
                </div>

                 <div className="flex items-center justify-between ">
                  <div className="flex gap-2">
                    <div className="h-[64px] w-[64px] bg-[#F1F1F1] rounded flex items-center justify-center ">
                      <img
                        src={cartData?.[0].image}
                        alt=""
                        className=" h-[40px] rounded "
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px] w-[76px] overflow-x-auto">
                      <h2 className="text-[15px] font-bold whitespace-nowrap ">
                        {cartData?.[0].title}
                      </h2>
                      <p className="text-sm font-bold text-black/50 ">
                        $ {cartData?.[0].price}
                      </p>
                    </div>
                  </div>
                  <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
                    <div onClick={handleDecrement} className="text-black/70">
                      -
                    </div>
                    <div className="">{count}</div>
                    <div onClick={handleIncrement} className="text-black/70">
                      +
                    </div>
                  </div>
                </div>

                 <div className="flex items-center justify-between ">
                  <div className="flex gap-2">
                    <div className="h-[64px] w-[64px] bg-[#F1F1F1] rounded flex items-center justify-center ">
                      <img
                        src={cartData?.[0].image}
                        alt=""
                        className=" h-[40px] rounded "
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px] w-[76px] overflow-x-auto">
                      <h2 className="text-[15px] font-bold whitespace-nowrap ">
                        {cartData?.[0].title}
                      </h2>
                      <p className="text-sm font-bold text-black/50 ">
                        $ {cartData?.[0].price}
                      </p>
                    </div>
                  </div>
                  <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
                    <div onClick={handleDecrement} className="text-black/70">
                      -
                    </div>
                    <div className="">{count}</div>
                    <div onClick={handleIncrement} className="text-black/70">
                      +
                    </div>
                  </div>
                </div>

                 <div className="flex items-center justify-between ">
                  <div className="flex gap-2">
                    <div className="h-[64px] w-[64px] bg-[#F1F1F1] rounded flex items-center justify-center ">
                      <img
                        src={cartData?.[0].image}
                        alt=""
                        className=" h-[40px] rounded "
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px] w-[76px] overflow-x-auto">
                      <h2 className="text-[15px] font-bold whitespace-nowrap ">
                        {cartData?.[0].title}
                      </h2>
                      <p className="text-sm font-bold text-black/50 ">
                        $ {cartData?.[0].price}
                      </p>
                    </div>
                  </div>
                  <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
                    <div onClick={handleDecrement} className="text-black/70">
                      -
                    </div>
                    <div className="">{count}</div>
                    <div onClick={handleIncrement} className="text-black/70">
                      +
                    </div>
                  </div>
                </div>

                {/* cart content end here */} 
                {/* work on it later */}

              </div>
              <div className="py-4 px-6 flex justify-between items-center">
                <h2 className="text-[15px] font-bold text-black/50 ">Total</h2>
                <h2 className="text-[20px] font-bold text-black ">$5,000</h2>
              </div>
              <div className="px-6 items-center w-full">
                <button className="bg-[#D87D4A] w-full text-white p-4 hover:bg-orange-600 mb-4">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
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
