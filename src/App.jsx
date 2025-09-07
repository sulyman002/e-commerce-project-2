import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "sonner";
import Home from "./pages/Home";
import HeadphonesCategory from "./pages/HeadphonesCategory";
import EarphonesCategory from "./pages/EarphonesCategory";
import SpeakersCategory from "./pages/SpeakersCategory";
import ProductPage from "./common/ProductPage";
import UserLayout from "./layouts/UUserLayout";
import SpeakerDisplayPage from "./common/SpeakerDisplayPage";
import EarphoneDisplayPage from "./common/EarphoneDisplayPage";
import CheckoutPage from "./common/CheckoutPage";

function App() {
  const [newArray, setNewArray] = useState([]);


 
  return (
    <>

      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout newArray={newArray} />}>
          <Route index element={<Home />} />
          <Route path="headphones" element={<HeadphonesCategory />} />
          <Route path="speakers" element={<SpeakersCategory />} />
          <Route path="earphones" element={<EarphonesCategory />} />
          <Route path="product/:id" element={<ProductPage newArray={newArray} setNewArray={setNewArray} />} />
          <Route path="speaker/:id" element={<SpeakerDisplayPage />} />
          <Route path="earphone/:id" element={<EarphoneDisplayPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
