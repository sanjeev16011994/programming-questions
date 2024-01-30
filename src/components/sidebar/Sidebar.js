import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/html"
          >
            HTML
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/css"
          >
            CSS
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/javascript"
          >
            Javascript
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/react"
          >
            ReactJS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/angular"
          >
            Angular
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/python"
          >
            Python
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
