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
        <p className="card__rating">5.0&nbsp; </p>
        <p className="card__review-count">&nbsp;(6) USA</p>
      </div>

      <p className="card__title">Life lessons with Katie Zaferes</p>
      <p className="card__cost"><strong>From $136 </strong> / person</p>
    </section>
  );
}
