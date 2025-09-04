import React from "react";
import headphone from "../assets/desktop_home/headphones.png";
import speakers from "../assets/desktop_home/speakers.png";
import speaker2 from "../assets/desktop_home/mobile/speaker2.png";
import SellProductBtn from "../components/SellProductBtn";
import NewProducts from "./NewProducts";
import HomeBringing from "../components/HomeBringing";

const LikelyProduct = () => {
  return (
    <div className="container py-12 px-6 mx-auto ">
      <div className="flex justify-center mt-10">
        <h1 className="font-bold text-2xl uppercase  ">You may also like</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-3">
        <div>
          <div className=" flex-col bg-[#F1F1F1] py-6 md:py-10 lg:py-14 flex items-center rounded-[8px] justify-center my-10">
            <img
              src={headphone}
              alt="headphone"
              className="h-[95px] md:h-[193px] "
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-8">
            <h3 className="text-[24px] tracking-[1.71px] font-bold  ">
              XX99 MARK I
            </h3>
            <SellProductBtn>See Product</SellProductBtn>
          </div>
        </div>

        <div>
          <div className=" flex-col bg-[#F1F1F1] py-6 md:py-10 lg:py-14 flex items-center rounded-[8px] justify-center my-10">
            <img
              src={speaker2}
              alt="headphone"
              className="h-[95px] md:h-[193px] "
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-8">
            <h3 className="text-[24px] tracking-[1.71px] font-bold  ">XX59</h3>
            <SellProductBtn>See Product</SellProductBtn>
          </div>
        </div>

        <div className="mb-24">
          <div className=" flex-col bg-[#F1F1F1] py-6 md:py-10 lg:py-14 flex items-center rounded-[8px] justify-center my-10">
            <img
              src={speakers}
              alt="headphone"
              className="h-[95px] md:h-[193px] "
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-8">
            <h3 className="text-[24px] tracking-[1.71px] font-bold  ">
              ZX9 SPEAKER
            </h3>
            <SellProductBtn>See Product</SellProductBtn>
          </div>
        </div>
      </div>

      <NewProducts />
      <HomeBringing />
    </div>
  );
};

export default LikelyProduct;

//  <div className="flex flex-col items-center justify-center gap-2 mt-8">
//           <h3 className="uppercase text-[15px]  ">Headphones</h3>
//         </div>
