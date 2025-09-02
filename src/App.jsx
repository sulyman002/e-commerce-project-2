import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/userLayout";
import { Toaster } from "sonner";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
