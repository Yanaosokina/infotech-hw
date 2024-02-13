import { useState } from "react";
import { Filter } from "components/MainContent/CatalogSection/Filter";
import { Cards } from "components/MainContent/CatalogSection/Cards";
import {Button} from "shared-components/Button";

import Nike from "assets/images/Nike.png";

import "./CatalogSection.css";

export  function CatalogSection() {
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
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
    },
    {
      image: Nike,
      modelName: "Nike Air Force 1 '07 QS",
      price: 110,
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
