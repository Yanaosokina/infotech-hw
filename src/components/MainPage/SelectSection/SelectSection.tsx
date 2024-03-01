import { useEffect, useState } from "react";
import { Button } from "shared-components/Button";
import { SkeletonSelectSneackers } from "components/Skeletons/SkeletonSelectSneackers";
import { SelectSneackers } from "./SelectSneakers";
import {
  useGetCategoriesQuery,
  productsApi,
  Product,
} from "reduxApi/api/products";
import "./SelectSection.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductDescription } from "shared-components/ProductDescription";

export const useGetProductsMultipleQueries = (options: string[]) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriptions = options.map((category) => {
      return dispatch(
        productsApi.endpoints.getProductsByCategory.initiate({
          skip: 0,
          category,
          limit: 9,
        }) as any
      );
    });
    return () => {
      for (const subscription of subscriptions) {
        subscription.unsubscribe();
      }
    };
  }, [dispatch, options]);

  return useSelector((state) => {
    return options.map((category) => {
      return productsApi.endpoints.getProductsByCategory.select({
        skip: 0,
        category,
        limit: 10,
      })(state as any);
    });
  });
};

export function SelectSection() {
  const { data: categories = [], isLoading, isError } = useGetCategoriesQuery();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<string[]>([]);
  const [showProducts, setShowProducts] = useState<boolean>(false);
  const res = useGetProductsMultipleQueries(allProducts);

  const handleCategorySelect = (category: string, checked: boolean) => {
    setSelectedCategories((prevCategories) =>
      checked ? [...prevCategories, category] : prevCategories.filter((cat) => cat !== category)
    );
  };


  const handleNextStep = () => {
    if (selectedCategories.length > 0) {
      setAllProducts(selectedCategories);
      setShowProducts(true);
    }
  };
  
  const handleReset = () => {
    setShowProducts(false);
    setAllProducts(selectedCategories);
  };

  const topThreeProducts: Product[] = res
  .flatMap((response) => response.data?.products || [])
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);


  return (
    <section className="select" id="products">
      <div className="select__wrapper">
        <div className="select__content">
          <h2 className="select__title">
            {showProducts
              ? "Your selection is ready!"
              : "We will select the perfect product for youies"}
          </h2>
          {!showProducts && (
            <p className="select__text">
              Answer three questions and we will send you a catalog with the
              most suitable products for you.
            </p>
          )}
          <div className="select__form">
            {!showProducts && (
              <h3 className="select__question">
                What type of product are you considering?
              </h3>
            )}
            {(isError || !categories) && <SkeletonSelectSneackers />}
            {isLoading && <SkeletonSelectSneackers />}
            {!isLoading && !showProducts && (
              <SelectSneackers
                categories={categories}
                onCategorySelect={handleCategorySelect}
                selectedCategories={selectedCategories}
              />
            )}

          </div>
          {showProducts && (
              <div className="select__products">
                {topThreeProducts.map((product: Product, index) => (
                  <div key={index} className="select__product">
                    <img
                      src={product.images[0]}
                      alt="product-img"
                      className="select__product_img"
                    />
                    <ProductDescription title={product.title} price={product.price} />
                  </div>
                ))}
              </div>
            )}
          <div className="select__footer">
            <p className="select__footer_pages">{showProducts ? 2 : 1} of 3</p>
            {!showProducts ? (
              <Button
                type="tertiary"
                text="Next step"
                onClick={handleNextStep}
              />
            ) : (
              <Button
                type="tertiary"
                text="Change selection"
                onClick={handleReset}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
