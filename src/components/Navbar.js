import React from 'react';
import "../styles/styles.css";


export default function Navbar() {
   return(
    <nav className="navbar">
            <img src={`${process.env.PUBLIC_URL}/images/airbnb-logo.png`} className="nav__logo" />
    </nav>
   )
}