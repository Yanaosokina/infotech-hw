import { ProductDescription } from 'shared-components/ProductDescription';
import './Card.css';

type CardProps = {
  image: string;
  modelName: string;
  price: number;
};

export function Card({ image, modelName, price }: CardProps) {
  return (
    <div className="card">
      <picture className='card__image_container'>
        <source srcSet={image} type='image/jpeg' />
        <img src={image} alt={modelName} className="card__image" />
      </picture>
      <div className="card__details">
        <ProductDescription title={modelName} price={price}  />
      </div>
    </div>
  );
}
