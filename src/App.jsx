import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/userLayout";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import HeadphonesCategory from "./pages/HeadphonesCategory";
import EarphonesCategory from "./pages/EarphonesCategory";
import SpeakersCategory from "./pages/SpeakersCategory";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="headphones" element={<HeadphonesCategory />} />
          <Route path="speakers" element={<SpeakersCategory />} />
          <Route path="earphones" element={<EarphonesCategory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
