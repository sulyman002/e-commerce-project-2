import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SellProductBtn from "../components/SellProductBtn";
import success_mark from "../assets/desktop_home/success_mark.svg";
import { getItem, setItem } from "../utils/useLocalStoragepersist";

const CheckoutPage = () => {
  const [updateInputs, setUpdateInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    payment: "",
    eMoney: "",
    eMoneyPin: "",
  });

  function handleAllInput(event) {
    const { name, value } = event.target;
    console.log(value);
    setUpdateInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [payment, setPayment] = useState(false);

  // const [count, setCount] = useState(() => {
  //   const storedCount = getItem("count");
  //   return storedCount ? storedCount : {};
  // });

  // useEffect(() => {
  //   setItem("count", count);
  // }, [count]);


    const [count, setCount] = useState(() => {
      const storedCount = getItem("count");
      return storedCount ? storedCount : {};
    });
  
    useEffect(() => {
      setItem("count", count);
    }, [count]);
  
    
  function handlePayment() {
    setPayment(!payment);
    console.log("you clicked on the payment button");
  }

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = getItem("newArray");

    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  const getTotal = cartItems.reduce((prev, item) => {
       const qty = count[item.id] || 1;
    return prev + item.price * qty
  },0)

  const shippingFee = cartItems.reduce((prev, item) =>{
    const shippingQuantity = count[item.id] || 1;
    const percent = item.price * 0.02;
    const theFees = Math.floor(prev + percent * shippingQuantity);
    return theFees;
  },0)

  const vatFee = cartItems.reduce((prev, item) => {
    const productValue = item.price;
    const vat = Math.floor((prev + productValue + shippingFee) * 0.075)
    return vat;
  },0)


  const grandTotal = getTotal + shippingFee + vatFee;
  


  return (
    <div className="bg-gray-100">
      <section className="container mx-auto">
        <div className="py-8 px-6 gap-8 flex flex-col">
          <Link
            to="../earphones"
            className="text-sm text-black-700 inline-block lg:mt-8"
          >
            Go Back
          </Link>
          <div className="lg:flex lg:gap-5 lg:items-start">
            <form className="bg-white lg:w-2/3 w-full px-4 py-6 rounded-[8px] flex flex-col gap-6 ">
              <h1 className="text-[28px] font-bold tracking-[1px] uppercase">
                Checkout
              </h1>

              <div className="w-full mt-3 flex flex-col gap-3 ">
                <h2 className="text-[13px] text-[#D87D4A] tracking-[0.93px] font-bold">
                  BILLING DETAILS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor="name"
                      className="font-bold text-[12px] tracking-[-0.21px]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={updateInputs.name}
                      onChange={handleAllInput}
                      placeholder="Alexei Ward"
                      className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor="email"
                      className="font-bold text-[12px] tracking-[-0.21px]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={updateInputs.email}
                      onChange={handleAllInput}
                      placeholder="alexei@mail.com"
                      className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor="phoneNumber"
                      className="font-bold text-[12px] tracking-[-0.21px]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={updateInputs.phoneNumber}
                      onChange={handleAllInput}
                      placeholder="+ 202-555-0136"
                      className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mt-3 flex flex-col gap-3 ">
                <h2 className="text-[13px] text-[#D87D4A] tracking-[0.93px] font-bold">
                  SHIPPING INFO
                </h2>

                <div className="flex flex-col gap-2 mt-3">
                  <label
                    htmlFor="address"
                    className="font-bold text-[12px] tracking-[-0.21px]"
                  >
                    Your Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={updateInputs.address}
                    onChange={handleAllInput}
                    placeholder="1137 Williams Avenue"
                    className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                  />
                </div>
                <div className="md:grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor="zipCode"
                      className="font-bold text-[12px] tracking-[-0.21px]"
                    >
                      Zip Code
                    </label>
                    <input
                      type="number"
                      id="zipCode"
                      name="zipCode"
                      value={updateInputs.zipCode}
                      onChange={handleAllInput}
                      placeholder="10001"
                      className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor="city"
                      className="font-bold text-[12px] tracking-[-0.21px]"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={updateInputs.city}
                      onChange={handleAllInput}
                      placeholder="New York"
                      className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor="country"
                      className="font-bold text-[12px] tracking-[-0.21px]"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={updateInputs.country}
                      onChange={handleAllInput}
                      placeholder="United States"
                      className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mt-3 flex flex-col gap-3 ">
                <h2 className="text-[13px] text-[#D87D4A] tracking-[0.93px] font-bold">
                  PAYMENT DETAILS
                </h2>

                <div className="flex flex-col gap-3 w-full">
                  <div className="md:grid md:grid-cols-2 gap-4">
                    <h3 className="font-bold text-[12px] tracking-[-0.21px] mt-2">
                      Payment Method
                    </h3>

                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex items-center justify-start px-4 gap-3 h-[56px] rounded-[8px] border border-gray-200 ">
                        <input
                          type="radio"
                          name="payment"
                          value="e-money"
                          checked={updateInputs.payment === "e-money"}
                          onChange={handleAllInput}
                          className="h-[20px] w-[20px] bg-[#D87D4A] "
                        />
                        <span className="font-bold text-[14px] tracking-[-0.25px]">
                          e-Money
                        </span>
                      </div>
                      <div className="flex items-center justify-start px-4 gap-3 h-[56px] rounded-[8px] border border-gray-200 ">
                        <input
                          type="radio"
                          name="payment"
                          value="cash"
                          checked={updateInputs.payment === "cash"}
                          onChange={handleAllInput}
                          className="h-[20px] w-[20px] bg-[#D87D4A] "
                        />
                        <span className="font-bold text-[14px] tracking-[-0.25px]">
                          Cash on Delivery
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3 w-full">
                      <div className="md:grid md:grid-cols-2 md:gap-4">
                        <div className="flex flex-col gap-2 mt-3">
                          <label
                            htmlFor="e-money"
                            className="font-bold text-[12px] tracking-[-0.21px]"
                          >
                            e-Money Number
                          </label>
                          <input
                            type="number"
                            id="e-money"
                            name="eMoney"
                            value={updateInputs.eMoney}
                            onChange={handleAllInput}
                            placeholder="238521993"
                            className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                          />
                        </div>

                        <div className="flex flex-col gap-2 mt-3">
                          <label
                            htmlFor="e-moneyPin"
                            className="font-bold text-[12px] tracking-[-0.21px]"
                          >
                            e-Money PIN
                          </label>
                          <input
                            type="number"
                            id="e-moneyPin"
                            name="eMoneyPin"
                            value={updateInputs.eMoneyPin}
                            onChange={handleAllInput}
                            placeholder="6891"
                            className="h-[56px] rounded-[8px] w-full pl-3 font-bold text-[14px] text-black/80 border border-gray-200 outline-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="bg-white lg:w-1/3 w-full px-4 py-6 rounded-[8px] flex flex-col gap-6 lg:h-auto">
              <h1 className="text-[28px] font-bold tracking-[1px] uppercase">
                Summary
              </h1>
              <div className="w-full flex flex-col gap-3 overflow-y-auto">
                {/* here, we going to use .map() method to display 
              the data we get from the cart as summary, but for now, 
              let work with random data i will just fetch a random data for now */}

                {cartItems.map((cartItem) => (
                  <div
                    className="flex items-center justify-between gap-2"
                    key={cartItem.id}
                  >
                    <div className="flex gap-2">
                      <div className="h-[64px] w-[64px] bg-[#F1F1F1] rounded flex items-center justify-center ">
                        <img
                          src={cartItem.image}
                          alt=""
                          className=" h-[40px] rounded "
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[2px] w-[76px] overflow-x-auto">
                        <h2 className="text-[15px] font-bold whitespace-nowrap ">
                          {cartItem.title}
                        </h2>
                        <p className="text-sm font-bold text-black/50 ">
                          $ {cartItem.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4   ">
                     
                      <div className="">X{count[cartItem.id] || 1}</div>
                      
                    </div>
                  </div>
                ))}
                {/* {cartItems.length === 0 ? (
                  <div className="flex text-black flex-col gap-4 mt-3 h-1/2 overflow-y-auto bg-gray-200 py-3 px-3 mx-6 rounded-md">
                    <p className="text-red-500 font-bold text-1xl italic flex items-center justify-center h-full w-full text-center ">
                      No items yet
                    </p>
                  </div>
                ) : (
                  cartItems.map((cartItem) => (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="h-[64px] w-[64px] bg-[#F1F1F1] rounded flex items-center justify-center ">
                          <img
                            src={cartItem?.image}
                            alt=""
                            className=" h-[40px] rounded "
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[2px] w-[76px] md:w-[180px] overflow-x-auto">
                          <h2 className="text-[15px] font-bold whitespace-nowrap ">
                            {cartItem?.title}
                          </h2>
                          <p className="text-sm font-bold text-black/50 ">
                            $ {cartItem?.price}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-bold text-black/50 ">X{count[cartItem.id] || 1}</p>
                    </div>
                  ))
                )} */}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] uppercase text-black/50 ">TOTAL</p>
                  <p className="text-[18px] font-bold ">$ {getTotal}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[15px] uppercase text-black/50 ">
                    SHIPPING
                  </p>
                  <p className="text-[18px] font-bold ">$ {shippingFee}</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[15px] uppercase text-black/50 ">
                    VAT(INCLUDED)
                  </p>
                  <p className="text-[18px] font-bold ">$ {vatFee}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[15px] uppercase text-black/50 ">
                    GRAND TOTAL
                  </p>
                  <p className="text-[18px] font-bold text-[#D87D4A] ">
                    $ {grandTotal}
                  </p>
                </div>
              </div>

              <SellProductBtn onClick={handlePayment} className="">
                Continue & Pay
              </SellProductBtn>

              {payment && (
                <div className="fixed bg-black/60 inset-0 z-10">
                  <div className="flex justify-center items-center h-full px-4">
                    <div className="flex flex-col w-full mx-6 md:w-[600px] h- bg-white rounded-lg p-8">
                      <div className="flex flex-col gap-5">
                        <div className="w-[64px] h-[64px] rounded-full bg-[#D87D4A] flex items-center justify-center ">
                          {" "}
                          <img src={success_mark} alt="success" />
                        </div>
                        <h2 className="text-[24px] font-bold leading-[28px] tracking-[0.86px] w-[260px] text-balance overflow-hidden">
                          THANK YOU FOR YOUR ORDER
                        </h2>
                        <p className="text-black/50 text-[15px] ">
                          You will receive an email confirmation shortly.
                        </p>
                      </div>
                      <div className="text-red-500 font-bold capitalize italic h-[200px] flex items-center justify-center">
                        No order!!!
                      </div>

                      <SellProductBtn
                        onClick={() => {
                          navigate("/");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Back to Home
                      </SellProductBtn>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
