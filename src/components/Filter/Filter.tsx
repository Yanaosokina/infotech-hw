import React, { useState } from "react";
import Button from "../Button/Button.tsx";
import './filter.css';

export default function Filter() {
  const [filter, setFilter] = useState("");

  const addFilter = (filterToAdd) => {
    setFilter((prevFilter) => prevFilter + filterToAdd);
  };

  const searchProducts = () => {
    console.log("Поиск продуктов с фильтром:", filter);
  };

  const resetFilter = () => {
    setFilter("");
  };

  return (
    <aside className="filter">
      <h3 className="filter__title">Selection <br /> by parameters</h3>
      <div>
        <p className="filter__text">Category</p>
        <div className="filter__options">
          <div className="filter__option" onClick={() => addFilter("смартфоны, ")}>smartphones</div>
          <div className="filter__option" onClick={() => addFilter("ноутбуки, ")}>laptops</div>
          <div className="filter__option" onClick={() => addFilter("Обувь, ")}>sneakers</div>
          <div className="filter__option" onClick={() => addFilter("Обувь, ")}>sneakers</div>
          <div className="filter__option" onClick={() => addFilter("Обувь, ")}>sneakers</div>
          <div className="filter__option" onClick={() => addFilter("Обувь, ")}>sneakers</div>
        </div>
        <div className="filter__buttons">
          <Button text="Apply" type="secondary" onClick={searchProducts} className="filter__btn" />
          <Button text="Reset" onClick={resetFilter} className="filter__btn_reset"/>
        </div>
      </div>
    </aside>
  );
}
