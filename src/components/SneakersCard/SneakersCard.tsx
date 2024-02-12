import React, { useState } from "react";
import { Checkbox } from "components/Checkbox";
import "./SneakersCard.css";


type SneakersCardProps = {
  image: any,
  title: string
}

export default function SneakersCard({ image, title }: SneakersCardProps) {
  return (
    <div className="sneakersCard">
      <img src={image} alt={title} />
      <Checkbox>{title}</Checkbox>
    </div>
  );
}
