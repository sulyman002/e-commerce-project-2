import React from "react";

import HomeBanners from "../components/HomeBanners.jsx";
import HomeBringing from "../components/HomeBringing.jsx";
import HomeProduct2 from "../components/HomeProduct2.jsx";
import Products from "../common/NewProducts.jsx";



const Home = () => {
  return (
    <section>
      <Products />
      <HomeBanners />
      <HomeProduct2 />
      <HomeBringing />
    </section>
  );
};

export default Home;
