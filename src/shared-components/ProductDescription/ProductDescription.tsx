import './ProductDescription.css';

type ProductDescriptionProps = {
  title: string;
  price: number;
};
export function ProductDescription({ title, price }: ProductDescriptionProps) {
  return (
    <>
      <p className="product-description__title">{title}</p>
      <p className="product-description__price">{price} $</p>
    </>
  );
}
