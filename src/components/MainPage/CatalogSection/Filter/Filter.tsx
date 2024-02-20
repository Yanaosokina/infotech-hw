import { useState } from "react";
import { Button } from "shared-components/Button";
import { Category } from "reduxApi/api/products";
import { SkeletonCategory } from "components/Skeletons/SkeletonCategory";
import { classNames } from "utils/class-names";
import "./Filter.css";


type FilterProps = {
  categories: Category[];
   onSelectCategory: (category: string) => void;
   isLoading: boolean
};

export function Filter({
  categories,
  onSelectCategory,
  isLoading
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const applyFilter = () => {
    onSelectCategory(selectedCategory);
  };

  const resetFilter = () => {
    setSelectedCategory("");
    onSelectCategory(""); 
  };

  return (
    <aside className="filter">
      <h3>
        Selection <br /> by parameters
      </h3>
      <div>
        <p className="filter__text">Category</p>
        <div className="filter__options">
          {isLoading && <SkeletonCategory />} 
          {!isLoading && categories.map((category: Category, index: number) => {
            const className = classNames({
              filter__option: true,
              filter__option_selected: selectedCategory === category
            });
            return (
              <div
                key={index}
                className={className}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </div>
            
          )})}
        </div>
        <div className="filter__buttons">
          <Button
            text="Apply"
            type="secondary"
            onClick={applyFilter}
            className="filter__btn"
          />
          <Button
            text="Reset"
            type="text"
            onClick={resetFilter}
            className="filter__btn_reset"
          />
        </div>
      </div>
    </aside>
  );
}
