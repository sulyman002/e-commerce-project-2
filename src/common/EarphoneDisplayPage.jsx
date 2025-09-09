import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LikelyProduct from "./LikelyProduct";
import { getItem, setItem } from "../utils/useLocalStoragepersist";
import { toast } from "sonner";

const EarphoneDisplayPage = () => {
  const { id } = useParams();
  const [earphone, setEarphone] = useState({});
  const [count, setCount] = useState(() => {
    const item = getItem("count");
    return item ? item : {};
  });

  const [newArray, setNewArray] = useState(() => {
    const cartItems = getItem("newArray");
    return Array.isArray(cartItems) ? cartItems : [];
  });

  useEffect(() => {
    setItem("newArray", newArray);
  }, [newArray]);

  useEffect(() => {
    setItem("count", count);
  }, [count]);

  function handleAddToCartClicked(earphone) {

     setTimeout(() => {
      toast.success("Product added to cart")
    }, 200);
    setNewArray((prevData) => {
      const exists = prevData.find((item) => item.id === earphone.id);
      console.log(exists);
      if (exists) {
        console.log("Already in cart:", exists);
        return prevData;
      } else {
        const updated = [...prevData, earphone];
        console.log("New Cart ", updated);
        const length = updated.length;
        console.log("you currently stored :", length);

        return updated;
      }
    });
  }

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

  useEffect(() => {
    try {
      fetch("../../allData.json")
        .then((res) => res.json())
        .then((data) => {
          const findId = data[2].find((item) => item.id === parseInt(id));
          setEarphone(findId);
        });
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }, [id]);

  return (
    <div>
      <section className="container mx-auto">
        <div className="py-8 px-6">
          <Link
            to="../earphones"
            className="text-sm text-black-700 inline-block pb-4 lg:mt-8"
          >
            Go Back
          </Link>
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="flex bg-[#F1F1F1] rounded-[8px] items-center justify-center py-12 md:py-18 lg:py-24 w-full lg:w-1/2">
              <img
                src={earphone.image}
                alt={earphone.title}
                className="h-[248px] md:h-[327px]"
              />
            </div>

            <div className="w-full lg:w-1/2 md:px-6 lg:px-0 lg:pr-10 flex h-auto flex-col items-start justify-center">
              {earphone.new && (
                <p className="text-sm text-center text-[#D87D4A] tracking-[10px] mb-4">
                  NEW PRODUCT
                </p>
              )}
              <h1 className="uppercase font-bold tracking-[1.43px] text-[28px] md:text-[40px] text-start py-4">
                {earphone.title}
              </h1>
              <p className="text-sm text-black/70 lg:px-0 text-start">
                {earphone.description}
              </p>
              <p className="text-[18px] font-bold tracking-[1.29px] pt-4 ">
                $ {earphone.price}
              </p>

              <div className="flex justify-center items-start mt-8 flex-row gap-4">
                <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
                  <div
                    onClick={() => handleDecrement(earphone.id)}
                    className="text-black/70"
                  >
                    -
                  </div>
                  <div className="">{count[earphone.id] || 1}</div>
                  <div
                    onClick={() => handleIncrement(earphone.id)}
                    className="text-black/70"
                  >
                    +
                  </div>
                </div>
                <Link to="#">
                  <button onClick={() => handleAddToCartClicked(earphone)} className="bg-[#D87D4A] text-sm tracking-[1px] cursor-pointer font-bold  text-white w-[160px] py-4 uppercase hover:bg-[#FBAF85]">
                    ADD TO CART
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-10 lg:justify-between lg:pb-20">
            <div className="lg:w-2/3">
              <div>
                <h1 className="md:text-36px text-[24px] tracking-[0.86px] pt-24 pb-6 font-bold">
                  FEATURES
                </h1>
                <div className="space-y-12">
                  <p className="text-[15px] text-black/70 leading-[25px] ">
                    {earphone.features?.[0]}
                  </p>
                  <p className="text-[15px] text-black/70 leading-[25px] ">
                    {earphone.features?.[1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 py-16 md:flex-row lg:flex-col md:justify-between">
              <h1 className="text-2xl font-bold">IN THE BOX</h1>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-6">
                  <span className="text-[#D87D4A] text-[15px] font-bold ">
                    {earphone.inTheBox?.[0].quantity}X
                  </span>
                  <span className="text-[15px] text-black/80 ">
                    {earphone.inTheBox?.[0].item}
                  </span>
                </li>
                <li className="flex items-center gap-6">
                  <span className="text-[#D87D4A] text-[15px] font-bold ">
                    {earphone.inTheBox?.[1].quantity}X
                  </span>
                  <span className="text-[15px] text-black/80 ">
                    {earphone.inTheBox?.[1].item}
                  </span>
                </li>
                <li className="flex items-center gap-6">
                  <span className="text-[#D87D4A] text-[15px] font-bold ">
                    {earphone.inTheBox?.[2].quantity}X
                  </span>
                  <span className="text-[15px] text-black/80 ">
                    {earphone.inTheBox?.[2].item}
                  </span>
                </li>
                <li className="flex items-center gap-6">
                  <span className="text-[#D87D4A] text-[15px] font-bold ">
                    {earphone.inTheBox?.[3].quantity}X
                  </span>
                  <span className="text-[15px] text-black/80 ">
                    {earphone.inTheBox?.[3].item}
                  </span>
                </li>
                <li className="flex items-center gap-6">
                  <span className="text-[#D87D4A] text-[15px] font-bold ">
                    {earphone.inTheBox?.[4].quantity}X
                  </span>
                  <span className="text-[15px] text-black/80 ">
                    {earphone.inTheBox?.[4].item}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              {/* object-contain, object-cover, object-fill, object-none, object-scale-down → control how the image fits inside its container.

object-top, object-center, object-bottom, object-left, object-right → alignment. */}
              <img
                src={earphone.gallery?.[0]}
                alt={earphone.title}
                className="h-[174px] lg:h-[280px] w-full filter grayscale object-cover object-left rounded-lg"
              />
              <img
                src={earphone.gallery?.[1]}
                alt={earphone.title}
                className="h-[174px] lg:h-[280px] w-full filter grayscale object-fill rounded-lg"
              />
            </div>
            <div>
              <img
                src={earphone.gallery?.[2]}
                alt={earphone.title}
                className="h-[368px] lg:h-[592px] filter grayscale  w-full object-cover overflow-hidden rounded-lg"
              />
            </div>
          </div>

          <div>
            <LikelyProduct />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarphoneDisplayPage;
