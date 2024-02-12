import React from "react";
import Button from "../Button/Button";

import "./IntroductionSection.css";

export default function IntroductionSection() {
  const handleClick = () => {
    console.log('Клик по кнопке "Go to shopping"');
  };

  return (
    <section className="introduction">
      <div className="introduction__wrapper">
        <h1 className="introduction__tittle">
          Any products from famous brands <br /> with worldwide delivery
        </h1>
        <p className="introduction__text">
          We sell smartphones, laptops, clothes, shoes <br />
          and many other products at low prices
        </p>
        <Button
          onClick={handleClick}
          type="primary"
          text="Go to shopping"
          className="introduction__button"
        />
      </div>
    </section>
  );
}
