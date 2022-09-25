import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Import Screens
import Home from "../UI/Pages/Home/Home";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
