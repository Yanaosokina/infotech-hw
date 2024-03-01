import { SneakersCard } from "components/MainPage/SelectSection/SneakersCard";
import { Category } from "reduxApi/api/products";

import "./SlectSneackers.css";


type SelectSneackersProps = {
  categories: Category[];
  onCategorySelect: (category: string, checked: boolean) => void;
  selectedCategories: string[]
};

export function SelectSneackers({ categories, onCategorySelect,selectedCategories  }: SelectSneackersProps) {
  return (
    <div className="card__list">
      {categories.map((cat: Category) => (
        <SneakersCard
          key={cat}
          title={cat}
          onCategorySelect={onCategorySelect}
          isChecked={selectedCategories.includes(cat)}
        />
      ))}
    </div>
  );
}
