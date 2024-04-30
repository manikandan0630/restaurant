import React from "react"
import Navbar from "./components/navbar/navbar"
import { Link } from "react-router-dom"
import "./home.css"
import Hero from "./hero-img.png"

import Vege from "./vegetable.jpg";
import Graphes from "./graphes.jpg";
import Leaves from "./leaves.jpg";
import Chef1 from "./chef-1.jpg";

function test() {
  return (
    <>
      {/* nav bar*/}
      <Navbar />

      {/*hero section*/}
      <div className="hero">
        <div className="hero-main">


          <div className="hero-1">
            <h3>Enjoy Your Healthy
              Delicious Food</h3>
            <p>Welcome to our Restaurant Home Page! Our Heroes Section boasts mouthwatering dishes that redefine culinary excellence. From savory steaks to exquisite seafood, each bite tells a tale of culinary mastery</p>
            <button type="submit">Book now</button>
          </div>
          <div className="hero-2">
            <img src={Hero} alt="" width={"522px"} height={"510px"} />
          </div>
        </div>
      </div>


      {/*main setcion*/ }
      <div className="main-section">


          <div className="fruits">

                <div className="fruits-card">
                  <img src={Graphes} alt="" height={"190px"} width={"190px"} />
                  <h2>Fresh Fruits</h2>
                  <p>The secret is using fresh, seasonal produce in combination with good quality oils, vinegars or dairy. We choose the organic lifestyle because</p>
                  <span>  <Link style={{ textDecoration: 'none' }} to="">READ MORE</Link></span>
                </div>
                <div className="fruits-card">
                  <img src={Vege} alt="" height={"190px"} width={"190px"} />
                  <h2>Vegetables</h2>
                  <p>We have all been listening to our mothers saying: eat your vegetables. Scientists also agree: we need to eat 5 portions of vegetables to stay healthy.</p>
                  <span> <Link style={{ textDecoration: 'none' }} to="">READ MORE</Link></span>
                </div>
                <div className="fruits-card">
                  <img src={Leaves} alt="" width={"190px"} height={"190px"} />
                  <h2>Salad Leaves</h2>
                  <p>One way to motivate yourself to eat more salad this summer is to have a tasty, homemade dressing drizzled on top. Organic food popularity</p>
                  <span> <Link style={{ textDecoration: 'none', marginTop: "30px" }} to="">READ MORE </Link></span>
                </div>
          </div>
      </div>

      {/* Our chefs*/}
      <div className="our-chefs">

        <div className="chef-list">
            <div className="chefs">
              <img src={Chef1} alt="" />
              <h2>Ranveer Brar</h2>
              <span>Master Chef</span>
              <p></p>
            </div>
        </div>
      </div>
    </>
  )
}


export default test