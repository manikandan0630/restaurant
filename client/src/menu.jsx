import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import $ from "jquery";
import "./menu.css";
import axios from "axios";
const Menu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/menu").then((res) => setData(res.data.recipe));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="menu">
        <h2 style={{ textAlign: "center" ,color:"#CE1212"}}>Check Our Yummy Menu</h2>
        <div className="menu-list">
        {data.map((ele)=>(
         
          <div class="list" >
         
          <img src={ele.image} alt="" width="200px" height="200px"/>
          <h2>{ele.name}</h2>
          {/* <p>{ele.rating}</p>
          <span>Type:{ele.mealType}</span> */}
          <p>{ele.price}</p>
        </div>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
