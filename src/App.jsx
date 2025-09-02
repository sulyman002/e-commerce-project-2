import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/userLayout";
import { Toaster } from "sonner"; 

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </>
  );
}

export default App;
