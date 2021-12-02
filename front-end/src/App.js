import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Home from "./Home";
import Products from "./Products";

const App = () => {
  return (
    <browserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </browserRouter>
  );
};

export default App;
