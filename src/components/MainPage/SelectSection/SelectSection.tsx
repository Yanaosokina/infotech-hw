import { SelectSneackers } from "components/MainPage/SelectSection/SelectSneakers";
import { Button } from "shared-components/Button";
import { SkeletonSelectSneackers } from "components/Skeletons/SkeletonSelectSneackers";
import { useGetCategoriesQuery } from "reduxApi/api/products";

import "./SelectSection.css";

export function SelectSection() {
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useGetCategoriesQuery();


  return (
    <section className="select" id="products">
      <div className="select__wrapper">
        <div className="select__content">
          <h2>We will select the perfect product for you</h2>
          <p className="select__text">
            Answer three questions and we will send you a catalog with the most
            suitable products for you.
          </p>
          <div className="select__form">
            <h3 className="select__question">
              What type of product are you considering?
            </h3>
            {(isError || !categories) && <SkeletonSelectSneackers />}
            {isLoading && <SkeletonSelectSneackers />}
            {!isLoading && <SelectSneackers categories={categories} />}
          </div>
          <div className="select__footer">
            <p className="select__footer_pages">1 of 3</p>
            <Button
              type="tertiary"
              text="Next step"
              onClick={() => console.log('Клик по кнопке "Next step"')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
