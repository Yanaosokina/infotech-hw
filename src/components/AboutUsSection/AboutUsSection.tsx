import React from "react";
import AbouUsImg from "../../assets/images/AboutUsImg.png";
import "./aboutUsSection.css";

export default function AboutUsSection() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__content">
          <h2 className="about__title">About us</h2>
          <p className="about__text">
            Every day a person has a choice what to spend his money on. Stores
            and websites offer an endless list of products. <br />
            But we will help you make the right choice!
          </p>
          <h4 className="about__logo">Goods4you</h4>
          <img src={AbouUsImg} alt="img" className="about__image" />
        </div>
      </div>
    </section>
  );
}
