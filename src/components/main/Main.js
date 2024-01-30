import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Html from "../../pages/html/Html";
import Javascript from "../../pages/javascript/Javascript";
import Css from "../../pages/css/Css";
import ReactQ from "../../pages/react/ReactQ";
import Angular from "../../pages/angular/Angular";
import Python from "../../pages/python/Python";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<Html />} />
      <Route path="/css" element={<Css />} />
      <Route path="/javascript" element={<Javascript />} />
      <Route path="/react" element={<ReactQ />} />
      <Route path="/angular" element={<Angular />} />
      <Route path="/python" element={<Python />} />
    </Routes>
  );
};

export default Main;
