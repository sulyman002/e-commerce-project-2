import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = new Date();
  const getYear = data.getFullYear();
  console.log(getYear);
  return (
    <footer className="bg-[#101010] text-white relative">
      <div className="container mx-auto flex flex-col items-center md:items-start justify-center md:justify-start space-y-8 pt-10 pb-4 px-6">
        <div className="md:flex md:flex-col lg:flex-row lg:justify-between lg:w-full md:items-start md:gap-6">
          <h3
            className=" font-bold text-2xl before:content-[''] before:absolute before:top-0 before:left-1/2 md:before:left-[200px] 
        before:-translate-x-1/2 before:bg-[#D87D4A] before:w-[90px] before:h-[4px] "
          >
            audiophile
          </h3>
          <nav className="flex flex-col md:flex-row md:space-x-6 text-center space-y-4 pt-4 lg:pt-0 text-[13px] font-bold">
            <Link to="#" className=" hover:text-[#D87D4A] uppercase">
              Home
            </Link>
            <Link to="#" className=" hover:text-[#D87D4A] uppercase">
              Headphones
            </Link>
            <Link to="#" className=" hover:text-[#D87D4A] uppercase">
              Speaker
            </Link>
            <Link to="#" className=" hover:text-[#D87D4A] uppercase">
              Earphones
            </Link>
          </nav>
        </div>

        <div className="text-center md:text-start md: text-sm text-white/50 lg:w-[540px] leading-[25px] ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="space-y-4 flex flex-col md:flex-row md:justify-between md:items-center w-full">
          <div className="py-5">
            <p className="text-sm font-bold text-white/60">{`Copyright ${getYear}. All Rights Reserved`}</p>
          </div>
          <div className="flex items-center justify-center space-x-4 text-white lg:mb-12 ">
            <FaFacebook
              size={24}
              className="hover:text-[#D87D4A] cursor-pointer"
            />
            <FaTwitter
              size={24}
              className="hover:text-[#D87D4A] cursor-pointer"
            />
            <FaInstagram
              size={24}
              className="hover:text-[#D87D4A] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
