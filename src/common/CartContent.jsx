import React from "react";

const CartContent = ({ cartItems }) => {
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex text-black flex-col gap-4 mt-3 h-1/2 overflow-y-auto bg-gray-200 py-3 px-3 mx-6 rounded-md">
          <p className="text-red-500 font-bold text-1xl italic flex items-center justify-center h-full w-full text-center ">
            No items yet
          </p>
        </div>
      ) : (
        cartItems.map((cartItem) => (
          <div className="flex text-black flex-col gap-4 mt-3 h-1/2 overflow-y-auto bg-gray-200 py-3 px-3 mx-6 rounded-md">
            {/* cart content */}
            <div className="flex items-center justify-between gap-2">
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
              {/* <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
          <div onClick={handleDecrement} className="text-black/70">
            -
          </div>
          <div className="">{count}</div>
          <div onClick={handleIncrement} className="text-black/70">
            +
          </div>
        </div> */}
            </div>

            {/* cart content end here */}
            {/* work on it later */}
          </div>
        ))
      )}
    </>
  );
};

export default CartContent;
