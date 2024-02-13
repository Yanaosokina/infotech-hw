import AbouUsImg from "assets/images/AboutUsImg.png";
import AboutUsImgWebP from "assets/images/AboutUsImgSmall.webp";
import "./AboutUsSection.css";

export function AboutUsSection() {
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
          <picture>
            <source
              srcSet={AboutUsImgWebP}
              type="image/webp"
            />
            <img src={AbouUsImg} alt="img" className="about__image" />
          </picture>
        </div>
      </div>
    </section>
  );
}
