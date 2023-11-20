import React from "react";
// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Cocktail from "../pages/Cocktail";
import Error from "../pages/Error";

// Components
import Navbar from "./Navbar";

const MyRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<Cocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
