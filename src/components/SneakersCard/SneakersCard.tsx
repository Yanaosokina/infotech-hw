import { Checkbox } from "shared-components/Checkbox";
import "./SneakersCard.css";


type SneakersCardProps = {
  image: string,
  imageWebP: string,
  title: string
}

export function SneakersCard({ image, imageWebP, title }: SneakersCardProps) {
  return (
    <div className="sneakers-card">
      <picture>
        <source srcSet={imageWebP} type="image/webp" />
        <source srcSet={image} type='image/jpeg' />
        <img src={image} alt={title} className="sneakers-card__image" />
      </picture>
      <Checkbox>{title}</Checkbox>
    </div>
  );
}
