import React from "react";
import "./selectSection.css";
import SelectSneackers from "../SelectSneakers/SelectSneackers.tsx";
import Button from '../Button/Button.tsx';

export default function SelectSection() {
  return (
    <section className="select">
      <div className="select__wrapper">
        <div className="select__content">
          <h2 className="select__title">We will select the perfect product for you</h2>
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
            <p>
                1 of 3
            </p>
            <Button  text="Next step" className="select__btn" onClick={() => console.log('Клик по кнопке "Next step"')}/>
          </div>
        </div>
      </div>
    </section>
  );
}
