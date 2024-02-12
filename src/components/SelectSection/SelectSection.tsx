import React from "react";
import "./SelectSection.css";
import SelectSneackers from "../SelectSneakers/SelectSneackers";
import Button from "../Button/Button";

export default function SelectSection() {
  return (
    <section className="select">
      <div className="select__wrapper">
        <div className="select__content">
          <h2>We will select the perfect product for you</h2>
          <p className="select__text">
            Answer three questions and we will send you a catalog with the most
            suitable products for you.
          </p>
          <div className="select__form">
            <h3 className="select__question">
            What type of product are you considering?
            </h3>
            <SelectSneackers/>
          </div>
          <div className="select__footer">
            <p className="select__footer_pages">
                1 of 3
            </p>
            <Button type='tertiary' text="Next step"  onClick={() => console.log('Клик по кнопке "Next step"')}/>
          </div>
        </div>
      </div>
    </section>
  );
}
