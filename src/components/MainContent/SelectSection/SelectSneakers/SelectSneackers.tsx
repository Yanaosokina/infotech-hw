import Sneakers from "assets/images/sneaker.jpeg";
import SneakersWebP from "assets/images/sneaker.webp";
import { SneakersCard } from "components/SneakersCard";

import "./SlectSneackers.css";

export function SelectSneackers() {
  const cardsData = [
    { id: 1, image: Sneakers, imageWebP: SneakersWebP, title: "sneakers" },
    { id: 2, image: Sneakers, imageWebP: SneakersWebP, title: "sneakers" },
    { id: 3, image: Sneakers, imageWebP: SneakersWebP, title: "sneakers" },
    { id: 4, image: Sneakers, imageWebP: SneakersWebP, title: "sneakers" },
    { id: 5, image: Sneakers, imageWebP: SneakersWebP, title: "sneakers" },
    { id: 6, image: Sneakers, imageWebP: SneakersWebP, title: "sneakers" },
  ];
  return (
    <div className="card__list">
      {cardsData.map((card) => (
        <SneakersCard key={card.id} image={card.image} imageWebP={card.imageWebP} title={card.title} />
      ))}
    </div>
  );
}
