import React from "react";
import Card from "../Card/Card.tsx";

import "./Сards.css";


type Product = {
  image: string;
  modelName: string;
  price: number;
};

type CardsProps = {
  visibleProducts: number;
  products: Product[];
};

export default function Cards({visibleProducts, products}: CardsProps)  {

  return (
    <div className="cards">
      {products.slice(0, visibleProducts).map((product, index) => (
        <Card
          key={index}
          image={product.image}
          modelName={product.modelName}
          price={product.price}
        />
      ))}
    </div>
  );
}
