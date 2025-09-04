import React from "react";
import SellProductBtn from "./SellProductBtn";
import yx1_earphones from "../assets/desktop_home/yx1_earphones.png";
import { Link } from "react-router-dom";

const HomeProduct2 = () => {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-6 gap-6 items-center justify-center my-20">
        <div className="w-full">
          <img
            src={yx1_earphones}
            alt=""
            className="bg-cover bg-no-repeat w-full h-[200px] md:h-[320px] lg:h-[380px]"
          />
        </div>
        <div className="w-full flex items-start justify-center pl-12 md:pl-20 flex-col h-[200px] lg:h-[380px] md:h-[320px] bg-[#F1F1F1] ">
          <div>
            <h2 className="text-[28px] font-bold tracking-[2px] overflow-hidden ">
              YX1 EARPHONES
            </h2>
            <Link to="earphones">
              <SellProductBtn className="border border-gray-900 text-yellow-900 bg-[#F1F1F1] hover:bg-gray-900 hover:text-white mt-6 lg:px-6 lg:py-3 px-4 py-2 uppercase">
                see product
              </SellProductBtn>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct2;
