import React from "react";
import headphone from "../assets/desktop_home/mobile/headphone_bg.png";
import SellProductBtn from "../components/SellProductBtn";

const HeroSection = () => {
  return (
    <section className="relative md:gap-6 flex flex-col md:flex-row md:static md:items-center ">
      <div>
        <img src={headphone} alt="background" className="object-cover w-full" />
      </div>

      <div className="md:order-[-1]">
        <div className=" absolute md:static  text-center md:text-start inset-0 flex-col flex items-center justify-center md:justify-start md:items-start space-y-4">
        <p className="uppercase text-sm tracking-[10px] text-white/40">
          New Product
        </p>
        <p className="uppercase text-4xl  tracking-[1.29px] font-bold">
          XX99 Mark II Headphones
        </p>
        <p className=" text-sm text-white/60  ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <SellProductBtn />   
      </div>
      </div>
       
    </section>
  );
};

export default HeroSection;
