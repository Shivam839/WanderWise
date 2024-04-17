import React from "react";
import "./NavBar.css";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

function NavBar() {
  return (
    <div className="nav">
      <h2>
        Wander<span>Wise</span>
      </h2>
      <div id="respo">
        <div id="search">
          <CiSearch />
          <input type="text" name="" id="" />
        </div>
        <ul>
          <li>Home</li>
          <li>Packages</li>
          <li>Blogs</li>
          <li>About</li>
          <li>Contact</li>
          <li>Signup</li>
        </ul>
      </div>
      <div className="toggle">
        <CiMenuBurger />
      </div>
    </div>
  );
}

export default NavBar;
