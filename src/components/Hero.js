import React from 'react';
import imageGrid from "../images/photo-grid.png";

export default function Hero() {
    return(
        <section className="hero">
            <img src={imageGrid} alt="a grid of photos" className="hero__photo" />
            <h1 className="hero__title">Online Experiences</h1>
            <h3 className="hero__summary">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </section>
    )
}