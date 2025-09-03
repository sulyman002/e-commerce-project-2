import React from "react";
import banner_circle from "../assets/desktop_home/spk_bg.png";
import SellProductBtn from "./SellProductBtn";
import speaker from "../assets/desktop_home/speakers.png";

const HomeBanners = () => {
  return (
    <section className="container mx-auto px-6">
      <div
        style={{
          backgroundImage: `url(${banner_circle})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-evenly p-10 bg-[#D87D4A]  space-y-4 my-6 rounded-lg"
      >
        <div className="h-">
          <img
            src={speaker}
            alt="speaker"
            className="w-[172px] md:w-[197px] lg:w-[410px] "
          />
        </div>
        <div className="flex flex-col lg:w-[349px] lg:items-start lg:justify-start items-center justify-center space-y-4 text-center text-white max-w-sm pt-8">
          <h1 className="text-2xl md:text-[56px] font-bold md:px-6 lg:px-0 lg:text-start">
            ZX9 SPEAKER
          </h1>
          <p className="text-sm lg:text-start">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <SellProductBtn className="bg-black lg:px-8 lg:py-5 text-white uppercase hover:bg-[#4C4C4C]">
            See Product
          </SellProductBtn>
        </div>
      </div>
    </section>
  );
};

export default HomeBanners;
