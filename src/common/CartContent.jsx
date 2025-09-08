import React from "react";
import { useState, useEffect } from "react";
import { setItem, getItem } from "../utils/useLocalStoragepersist";

const CartContent = ({ cartItems }) => {


  const [count, setCount] = useState(() => {
    const storedCount = getItem("count");
    return storedCount ? storedCount : {};
  });

  useEffect(() => {
    setItem("count", count);
  }, [count]);

  function handleIncrement(id) {
    setCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  function handleDecrement(id) {
    setCount((prev) => {
      const current = prev[id] || 1;
      return current > 1 ? { ...prev, [id]: current - 1 } : prev;
    });
  }

  const grandTotal = cartItems.reduce((sum, item) => {
    const qty = count[item.id] || 1;
    return sum + item.price * qty;
  }, 0);
  // }

  //      function clearCart() {
  //   setCartItems([]);
  //   setCount({});
  //   localStorage.removeItem("newArray");
  //   localStorage.removeItem("count");
  // }

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex text-black flex-col gap-4 mt-3 h-1/2 overflow-y-auto bg-gray-200 py-3 px-3 mx-6 rounded-md">
          <p className="text-red-500 font-bold text-1xl italic flex items-center justify-center h-full w-full text-center ">
            No items yet
          </p>
        </div>
      ) : (
        <div className="flex text-black flex-col gap-4 mt-3 h-auto overflow-y-auto  py-3 px-3 mx-6 rounded-md">
          {/* cart content */}
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
              <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
                <div
                  onClick={() => handleDecrement(cartItem.id)}
                  className="text-black/70"
                >
                  -
                </div>
                <div className="">{count[cartItem.id] || 1}</div>
                <div
                  onClick={() => {
                    handleIncrement(cartItem.id);
                    console.log("you clicked this", cartItem.id);
                  }}
                  className="text-black/70"
                >
                  +
                </div>
              </div>
            </div>
          ))}
          <div className="py-4 px-6 flex justify-between items-center mt-4">
            <h2 className="text-[15px] font-bold text-black/50 ">Total</h2>
            <h2 className="text-[20px] font-bold text-black ">
              $ {grandTotal}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContent;
