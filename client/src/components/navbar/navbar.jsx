import React from "react";
import { Link } from "react-router-dom";


import "./navbar.css";
import $ from "jquery"

const Navbar = () => {
  
  $(document).ready(()=>{

    let click=false
    $("#menu-icon").click(()=>{
        click=!click
        $("ul").css("display","flex")
     if(click){
      $("#menu-icon").attr("class","fa-solid fa-xmark")
     }else {
      $("#menu-icon").attr("class","fa-solid fa-bars")
      $("ul").css("display","none")

     }
     
    })
  })

  return (
    <div>
      <div className="navbar">
        <h1>Restaurant</h1>
   
 

<i className="fa-solid fa-bars" id="menu-icon"></i>

        <ul >
          <li>
            <Link to="/home">
              Home
            </Link>
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

export default Navbar;
