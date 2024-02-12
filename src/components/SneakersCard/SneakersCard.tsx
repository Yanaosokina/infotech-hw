import React, { useState } from "react";
import "./SneakersCard.css";

export default function SneakersCard({ image, title }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="sneakersCard">
      <img src={image} alt={title} />
      <div className="sneakersCard__checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label >{title}</label>
      </div>
    </div>
  );
}
