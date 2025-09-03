import React from "react";
import audio_gear from "../assets/desktop_home/mobile/audio_gear.png";

const HomeBringing = () => {
//   const [trackSize, setTrackSize] = useState("300px");

//   function handleImageChange() {
//     setTrackSize((size) => {
//       if (size === "300px") {
//         <img
//           src={audio_gear}
//           alt="Audio gear"
//           className="bg-cover w-full rounded-lg h-[300px] "
//         />;
//       } else if(size === window)
//     });
//   }
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 gap-4 lg:gap-24 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="w-full">
          <img
            src={audio_gear}
            alt="Audio gear"
            className="bg-cover w-full rounded-lg h-[300px] lg:h-[558px] "
          />
        </div>
        <div className="lg:order-[-1] text-center md:px-20 lg:px-0 flex flex-col md:items-center md:justify-center w-full">
          <h1 className="text-3xl md:text-4xl px-4 lg:px-0 font-bold text-center lg:text-start py-8 tracking-[1px]">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="text-center lg:text-start lg:px-0 text-black/70 px-2">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeBringing;
