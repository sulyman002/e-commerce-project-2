import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100">
      <section className="container mx-auto">
        <div className="py-8 px-6">
          <Link
            to="../earphones"
            className="text-sm text-black-700 inline-block pb-4 lg:mt-8"
          >
            Go Back
          </Link>

          <form className="bg-white w-full px-4 py-6 rounded-[8px] flex flex-col gap-6 ">
            <h1 className="text-[28px] font-bold tracking-[1px] uppercase">Checkout</h1>

            <div className="w-full mt-3">
                <h2 className="text-[13px] text-[#D87D4A] tracking-[0.93px] font-bold">BILLING DETAILS</h2>

                <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="font-bold text-[12px] tracking-[-0.21px]">Name</label>
                    <input type="text" id="name" placeholder="Alexei Ward" className="h-[56px] rounded-[8px] w-full " />
                </div>
            </div>
           
          </form>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
