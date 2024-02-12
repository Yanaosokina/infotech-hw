import React, { useState } from "react";
import Filter from "../Filter/Filter.tsx";
import Cards from "../Cards/Cards.tsx";
import Button from "../Button/Button.tsx";

import Nike from "../../assets/images/Nike.png";

import "./CatalogSection.css";

export default function CatalogSection() {
  const [visibleProducts, setVisibleProducts] = useState(9);
  let products = [
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 100,
    },
  ];

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 9);
  };
  return (
    <section className="catalog">
      <div className="catalog__wrapper">
        <h2>Catalog</h2>
        <div className="catalog__content">
          <Filter />
          <div className="catalog__cards">
            <Cards visibleProducts={visibleProducts} products={products} />
            {visibleProducts < products.length && (
              <Button
                type="primary"
                className="catalog__button"
                onClick={showMoreProducts}
                text="Show more"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
