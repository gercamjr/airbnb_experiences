import React from "react";

export default function Card(props) {
  return (
    <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} className="card__image" />
            <div className="card--stats">
                <img src={`${process.env.PUBLIC_URL}/images/star.png`} className="card__star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="card__price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
  );
}
