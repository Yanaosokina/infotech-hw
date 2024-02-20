import { Product } from "reduxApi/api/products";
import { Link } from "react-router-dom";
import { classNames } from "utils/class-names";
import { Card } from "./Card";

import "./Сards.css";

type CardsProps = {
  products: Product[];
  isStaffPage?: boolean;
};

export function Cards({ products, isStaffPage }: CardsProps) {
  const className = classNames({
    cards: true,
    cards_staff: isStaffPage
  });

  return (
    <div className={className} >
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product.id}`}>
          <Card
            image={product.images[0]}
            modelName={product.title}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
}
