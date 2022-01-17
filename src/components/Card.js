import React from "react";
import cardimg from "../images/katie-zaferes.png";
import cardstar from "../images/star.png";

export default function Card(props) {
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
        <span>{props.rating}</span>
                <span className="gray">{props.count}</span>
                <span className="gray">{props.country}</span>
      </div>

      <p className="card__title">{props.title}</p>
      <p className="card__cost"><span className="bold">From $136{props.price} </span> / person</p>
    </section>
  );
}
