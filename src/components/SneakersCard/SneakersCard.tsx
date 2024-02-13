import React, { useState } from "react";
import { Checkbox } from "shared-components/Checkbox";
import "./SneakersCard.css";


type SneakersCardProps = {
  image: string,
  title: string
}

export function SneakersCard({ image, title }: SneakersCardProps) {
  return (
    <div className="sneakers-card">
      <img src={image} alt={title} />
      <Checkbox>{title}</Checkbox>
    </div>
  );
}
