import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar__list">
        <li className="active">Home</li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <a href="#features"> Features</a>
        </li>
        <li>
          <a href="#solution">Solution</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
