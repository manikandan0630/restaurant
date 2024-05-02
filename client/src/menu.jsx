import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import $ from 'jquery';
import "./menu.css"
const Menu = () => {
  
  useEffect(() => {
    $.ajax({
      url: "http://localhost:3001/menu",
      method:"GET",
      success: (data) => {
       let tes=data.recipes
       console.log(tes.name);
        const render = tes.map((ele) => {
          console.log(ele.image)
          return `
          <div class="list" key=${ele.id}>
         
            <img src=${ele.image} alt="" width="200px" height="200px"/>
            <h2>${ele.name}</h2>
            <p>*****${ele.rating}</p>
            <span>Type:${ele.mealType}</span>
            <span>Preparation time:${ele.prepTimeMinutes}
          </div>`
      });
        $(".menu-list").append(render);
      },
      error: (error) => {
        console.error('Error fetching menu:', error);
      },
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='menu'>
        <h2 style={{textAlign:"center"}}>Check Our Yummy Menu</h2>
        <div className="menu-list">
         
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu;
