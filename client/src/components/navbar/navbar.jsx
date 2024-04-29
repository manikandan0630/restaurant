import React from 'react'
import {Link} from "react-router-dom"
const navbar = () => {
  return (
    <div>
        <div className="navbar">

            <img src="" alt="" />
            <ul>
                <li><Link to="/home" >Home</Link></li>
                <li><Link to="/menu" >Menu</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default navbar