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