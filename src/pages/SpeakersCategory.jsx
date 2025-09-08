import React, { useEffect, useState } from "react";
import CategoriesHeader from "../components/CategoriesHeader";
import NewProducts from "../common/NewProducts";
import HomeBringing from "../components/HomeBringing";
import SellProductBtn from "../components/SellProductBtn";
import { useNavigate } from "react-router-dom";

const SpeakersCategory = () => {
  const [speakers, setSpeakers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch("/allData.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSpeakers(data[1]);
        });
    } catch (error) {
      console.error("Error fetching speaker:", error);
    }
  }, []);

  return (
    <div>
      <CategoriesHeader>Speakers</CategoriesHeader>
      <section className="container mx-auto">
        <div className="py-20 lg:py-50 flex flex-col gap-20 lg:gap-50 px-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`flex flex-col gap-10 lg:gap-20 md:w-full  ${
                speaker.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } `}
            >
              <div className="flex bg-[#F1F1F1] items-center justify-center py-12 md:py-18 lg:py-24 w-full lg:w-1/2">
                <img
                  src={speaker.image}
                  alt={speaker.title}
                  className="h-[248px] md:h-[386px]"
                />
              </div>
              <div className="w-full lg:w-1/2 md:px-6 lg:px-0 lg:pr-10 flex h-auto flex-col items-center lg:items-start justify-center">
                {speaker.new && (
                  <p className="text-sm text-center text-[#D87D4A] tracking-[10px] mb-4">
                    NEW SPEAKER
                  </p>
                )}
                <h1 className="uppercase font-bold tracking-[1.43px] text-[28px] md:text-[40px] text-center lg:text-start py-4">
                  {speaker.title}
                </h1>
                <p className="text-sm text-black/70 px-4 lg:px-0 text-center lg:text-start">
                  {speaker.description}
                </p>
               <SellProductBtn onClick={() => navigate(`/speaker/${speaker.id}`)} className="lg:py-5 lg:px-8 mt-8">see product</SellProductBtn>
              </div>
            </div>
          ))}
        </div>

        <NewProducts />
        <HomeBringing />
      </section>
    </div>
  );
};

export default SpeakersCategory;
