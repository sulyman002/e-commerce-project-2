import React from "react";
import { Link } from "react-router-dom";
import headphone from "../assets/desktop_home/headphones.png";
import speakers from "../assets/desktop_home/speakers.png";
import earphones from "../assets/desktop_home/earphones.png";
import arrow from "../assets/desktop_home/arr_left.svg";

const NewProducts = () => {
  return (
    <div className="container py-12 px-6 grid grid-cols-1 md:grid-cols-3 mx-auto gap-6">
      <div className="relative flex-col h-[165px] bg-[#F1F1F1] flex items-center justify-center my-10">
        <div className=" absolute top-[-50px] ">
          <img src={headphone} alt="headphone" className="w-[79px]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          <h3 className="uppercase text-[15px]  ">Headphones</h3>
          <Link to="headphones" className="flex items-center gap-2">
            <span className="text-[13px] text-black/40 ">SHOP</span>
            <img src={arrow} alt="arrow_right" />
          </Link>
        </div>
      </div>

      <div className="relative flex-col h-[165px] bg-[#F1F1F1] flex items-center justify-center my-10">
        <div className=" absolute top-[-50px] ">
          <img src={speakers} alt="headphone" className="w-[79px]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          <h3 className="uppercase text-[15px]  ">Speakers</h3>
          <Link to="speakers" className="flex items-center gap-2">
            <span className="text-[13px] text-black/40 ">SHOP</span>
            <img src={arrow} alt="arrow_right" />
          </Link>
        </div>
      </div>

      <div className="relative flex-col h-[165px] bg-[#F1F1F1] flex items-center justify-center my-10">
        <div className=" absolute top-[-60px] ">
          <img src={earphones} alt="headphone" className="w-[120px]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          <h3 className="uppercase text-[15px]  ">Earphones</h3>
          <Link to="earphones" className="flex items-center gap-2">
            <span className="text-[13px] text-black/40 ">SHOP</span>
            <img src={arrow} alt="arrow_right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
