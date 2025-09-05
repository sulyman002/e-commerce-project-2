import React from "react";
import { IoMdClose } from "react-icons/io"; // Import the close icon from react-icons
import CartContent from "./CartContent";

const Cart = ({
  cartData,
  navigate,
  handleIncrement,
  handleDecrement,
  handleCartClicked,
  count,
}) => {
  return (
    <div className="fixed bg-black/60 inset-0 z-10">
      <div className="flex justify-center md:justify-end md:items-start md:mt-20 md:mr-40 items-center h-full px-4">
        <div className="w-full mx-6 md:w-[377px] h-[488px] bg-white rounded-lg">
          <button
            onClick={handleCartClicked}
            className="flex justify-end w-full p-4 cursor-pointer"
          >
            <IoMdClose className="h-8 w-8 font-bold text-black" />
          </button>
          <div>
            <div className="flex justify-between items-center px-6">
              <h2 className="text-[18px] font-bold text-black ">Cart (3)</h2>
              <div className="underline text-black/70 text-[15px] cursor-pointer ">
                Remove all
              </div>
            </div>
          </div>
          <CartContent
            cartData={cartData}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            count={count}
          />

          <div className="py-4 px-6 flex justify-between items-center">
            <h2 className="text-[15px] font-bold text-black/50 ">Total</h2>
            <h2 className="text-[20px] font-bold text-black ">$5,000</h2>
          </div>
          <div className="px-6 items-center w-full">
            <button
              onClick={() => {
                navigate("checkout");
                handleCartClicked();
              }}
              className="bg-[#D87D4A] w-full text-white p-4 hover:bg-orange-600 mb-4"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
