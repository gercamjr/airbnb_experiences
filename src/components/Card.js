import React from "react";
import cardimg from "../images/katie-zaferes.png";
import cardstar from "../images/star.png";

export default function Card() {
  return (
    <section className="card">
    <p className="card__status">SOLD OUT</p>
      <img
        src={cardimg}
        alt="image of katie zaferes in swimming competition"
        className="card__image"
      />
      
      <div className="card__stats">
        <img src={cardstar} alt="red star" className="card__star" />
        <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
      </div>

      <p className="card__title">Life lessons with Katie Zaferes</p>
      <p className="card__cost"><span className="bold">From $136 </span> / person</p>
    </section>
  );
}
