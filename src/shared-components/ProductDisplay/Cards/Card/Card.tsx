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
        <p className="card__modelName">{modelName}</p>
        <p className="card__price">{price} <span className="card__price_dollar">$</span></p>
      </div>
    </div>
  );
}
