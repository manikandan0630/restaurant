import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import $ from "jquery";
const navbar = () => {
  $(document).ready(() => {
    $(".menu-bar").hide();
  });
  return (
    <div>
      <div className="navbar">
        
          <GiHamburgerMenu className="menu-bar " />
          <h1>Restaurant</h1>
          <ul>
            <li>
              <Link to="/home" className="active">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        <button type="submit">Book now</button>
      </div>
    </div>
  );
};

export default navbar;
