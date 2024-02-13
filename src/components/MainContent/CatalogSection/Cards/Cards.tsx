import {Card} from "components/MainContent/CatalogSection/Cards/Card";

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

export function Cards({visibleProducts, products}: CardsProps)  {
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
