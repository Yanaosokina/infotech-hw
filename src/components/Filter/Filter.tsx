import React, { useState } from "react";
import Button from "../Button/Button";

import "./Filter.css";

export function Filter() {
  const [filter, setFilter] = useState("");

  const addFilter = (filterToAdd: string) => {
    setFilter((prevFilter) => prevFilter + filterToAdd);
  };

  const searchProducts = () => {
    console.log("Поиск продуктов с фильтром:", filter);
  };

  const resetFilter = () => {
    setFilter("");
  };

  const filters = [
    "smartphones",
    "laptops",
    "sneakers",
    "sneakers",
    "sneakers",
    "sneakers",
    "sneakers",
    "sneakers",
  ];

  return (
    <aside className="filter">
      <h3>
        Selection <br /> by parameters
      </h3>
      <div>
        <p className="filter__text">Category</p>
        <div className="filter__options">
          {filters.map((filterText, index) => (
            <div
              key={index}
              className="filter__option"
              onClick={() => addFilter(`${filterText}, `)}
            >
              {filterText}
            </div>
          ))}
        </div>
        <div className="filter__buttons">
          <Button
            text="Apply"
            type="secondary"
            onClick={searchProducts}
            className="filter__btn"
          />
          <Button
            text="Reset"
            type='text'
            onClick={resetFilter}
            className="filter__btn_reset"
          />
        </div>
      </div>
    </aside>
  );
}
