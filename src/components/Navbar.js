import React from 'react';
import "../styles/styles.css";
import logo from "../images/airbnb-logo.png";

export default function Navbar() {
   return(
       <nav className="navbar">
            <img src={logo} alt="Airbnb logo" className="navbar__logo" />
       </nav>
   )
}