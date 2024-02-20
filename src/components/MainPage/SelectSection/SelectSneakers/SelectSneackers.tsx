import { SneakersCard } from "components/MainPage/SneakersCard";
import { Category } from "reduxApi/api/products";

import "./SlectSneackers.css";

type SelectSneackersProps = {
  categories: Category[];
};
export function SelectSneackers({ categories }: SelectSneackersProps) {
  
  return (
    <div className="card__list">
      {categories.map((cat: Category) => (
        <SneakersCard key={cat} title={cat} />
      ))}
    </div>
  );
}
