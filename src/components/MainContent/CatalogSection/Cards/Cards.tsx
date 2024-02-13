import { Card } from "components/MainContent/CatalogSection/Cards/Card";

import "./Сards.css";

type Product = {
  image: string;
  imageWebP: string;
  modelName: string;
  price: number;
};

type CardsProps = {
  visibleProductsCount: number;
  products: Product[];
};

export function Cards({ visibleProductsCount, products }: CardsProps) {
  return (
    <div className="cards">
      {products.slice(0, visibleProductsCount).map((product, index) => (
        <Card
          key={index}
          imageWebP={product.imageWebP}
          image={product.image}
          modelName={product.modelName}
          price={product.price} 
        />
      ))}
    </div>
  );
}
