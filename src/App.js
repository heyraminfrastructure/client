import React from "react";
import Home from "./container/home page/Home";
import ShoppingBag from "./container/shoppingBag/ShoppingBag";
import { Routes, Route } from "react-router-dom";
import AccountPage from "./container/accountPage/AccountPage";
import Saffron from "./container/aboutSaffron/AboutSaffron";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShoppingBag />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/saffron" element={<Saffron />} />
      </Routes>
    </>
  );
};

export default App;
