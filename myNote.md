<nav className="flex flex-col md:flex-row md:space-x-6 text-center space-y-4 pt-4 lg:pt-0 text-[13px] font-bold">
            <div
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" hover:text-[#D87D4A] uppercase"
            >
              Home
            </div>

            <div
              onClick={() => {
                navigate("/headphones");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" hover:text-[#D87D4A] uppercase"
            >
              Headphones
            </div>

            <div
              onClick={() => {
                navigate("/speakers");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" hover:text-[#D87D4A] uppercase"
            >
              Speakers
            </div>

            <div
              onClick={() => {
                navigate("/earphones");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" hover:text-[#D87D4A] uppercase"
            >
              Earphones
            </div>
          </nav>




           const length = updated.length;
        console.log("you currently stored :",length);






        




          <div className="flex text-black flex-col gap-4 mt-3 h-1/2 overflow-y-auto bg-gray-200 py-3 px-3 mx-6 rounded-md">
      {/* cart content */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <div className="h-[64px] w-[64px] bg-[#F1F1F1] rounded flex items-center justify-center ">
            <img
              src={cartData?.[0].image}
              alt=""
              className=" h-[40px] rounded "
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] w-[76px] overflow-x-auto">
            <h2 className="text-[15px] font-bold whitespace-nowrap ">
              {cartData?.[0].title}
            </h2>
            <p className="text-sm font-bold text-black/50 ">
              $ {cartData?.[0].price}
            </p>
          </div>
        </div>
        <div className="flex font-bold text-sm py-4 items-center justify-evenly gap-4 w-[120px] bg-[#F1F1F1] ">
          <div onClick={handleDecrement} className="text-black/70">
            -
          </div>
          <div className="">{count}</div>
          <div onClick={handleIncrement} className="text-black/70">
            +
          </div>
        </div>
      </div>

      {/* cart content end here */}
      {/* work on it later */}
    </div>