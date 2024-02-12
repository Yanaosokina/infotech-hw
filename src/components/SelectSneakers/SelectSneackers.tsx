import React from "react";
import Sneakers from "../../assets/images/sneakers.png";
import SneakersCard from "../SneakersCard/SneakersCard";

import './SlectSneackers.css';

export default function SelectSneackers() {
  const cardsData = [
    { id: 1, image: Sneakers, title: "sneakers" },
    { id: 2, image: Sneakers, title: "sneakers" },
    { id: 3, image: Sneakers, title: "sneakers" },
    { id: 4, image: Sneakers, title: "sneakers" },
    { id: 5, image: Sneakers, title: "sneakers" },
    { id: 6, image: Sneakers, title: "sneakers" },
  ];
  return (
    <div className="card-list">
      {cardsData.map((card) => (
        <SneakersCard key={card.id} image={card.image} title={card.title} />
      ))}
    </div>
  );
}
