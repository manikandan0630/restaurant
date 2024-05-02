import React from "react";
import "./footer.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
 const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="foot">
          <div className="address">
          <h3> <FaLocationDot />
           Address</h3><br></br>
            <span>A108 Adam Street New York, NY 535022 - US</span>
          </div>
          <div className="reservation">
          <h3> <IoCall /> Reservation</h3>
            <br></br>
            <span>
              Phone:<span>+91989669657</span>
            </span>
            <br></br>
            <span>
              Email:<span>info@gmail.com</span>
            </span>
          </div>
          <div className="opening">
            <IoMdTime /> <span>Opening Hours</span>

<p>Mon-sat:11am-2pm</p>
<p>Sunday:closed</p>
          </div>
          <div className="follow">
            <h3>Follow us</h3>
            <div className="icons">
                <span><FaTwitter /></span><span><FaFacebook /></span><span><FaInstagram /></span><span><FaLinkedin /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;