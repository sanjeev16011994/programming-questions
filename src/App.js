// src/App.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./App.scss"

const App = () => {
  return (
    <div className="container-fluid  ">
      <div className="row position-fixed w-100 ">
        <div className="col-md-12 p-0 ">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="row   ">
        <div className="sidebar col-md-12 p-0 position-fixed  w-100 mt-5 ">
          <Sidebar></Sidebar>
        </div>
        <div className="ml-sm-auto col-md-12 main-container  ">
          <main role="main" className="p-4 my-5 ">
            <Main />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
