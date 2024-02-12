import React from "react";

import './Card.css';

type CardProps = {
  image: any;
  modelName: string;
  price: number;
};

export default function Card({ image, modelName, price }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={modelName} className="card__image" />
      <div className="card__details">
        <p className="card__modelName">{modelName}</p>
        <p className="card__price">{price} <span className="card__price_dollar">$</span></p>
      </div>
    </div>
  );
}
