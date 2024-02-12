import React, { useState } from "react";
import "./catalog-section.css";
import Filter from "../Filter/Filter.tsx";
import Cards from "../Cards/Cards.tsx";
import Nike from "../../assets/images/Nike.png";
import Button from "../Button/Button.tsx";

export default function CatalogSection() {
  const [visibleProducts, setVisibleProducts] = useState(9); // Состояние для хранения количества видимых продуктов
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
      <h2>Catalog</h2>
      <div className="catalog__wrapper">
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
    </section>
  );
}
