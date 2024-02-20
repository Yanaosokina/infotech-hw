import { useState, useMemo } from "react";
import {
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery
} from "reduxApi/api/products";
import { Filter } from "components/MainPage/CatalogSection/Filter";

import { ProductDisplay } from "shared-components/ProductDisplay";
import { SkeletonCatlog } from "components/Skeletons/SkeletonCatlog";

import "./CatalogSection.css";

const LIMIT = 9;

export function CatalogSection() {
  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    isError,
  } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [skip, setSkip] = useState(0);
  const params = useMemo(() => {
    return {
      category: selectedCategory,
      skip,
      limit: LIMIT,
    };
  }, [selectedCategory, skip]);

  const { data, isLoading: isLoadingProducts, isFetching } = useGetProductsByCategoryQuery(params);

  const totalItemsLoaded = skip + (data ? data.products.length : 0);
  const hasMoreItems = data ? totalItemsLoaded < data.total : false;
  const isSkeletonVisible = skip === 0 && isFetching;

  if (isError || !categories) {
    return <div>Something went wrong</div>;
  }

  return (
    <section className="catalog" id="catalog">
      <div className="catalog__wrapper">
        <h2>Catalog</h2>
        <div className="catalog__content">
          <Filter
            categories={categories}
            isLoading={isLoadingCategories}
            onSelectCategory={(category: string) => {
              setSelectedCategory(category);
              setSkip(0);
            }}
          />
          {isSkeletonVisible && <SkeletonCatlog />}
          {!isSkeletonVisible && data?.products && !isLoadingProducts && (
            <ProductDisplay
              products={data.products}
              onShowMore={
                hasMoreItems
                  ? () => {
                      setSkip((prevSkip) => prevSkip + LIMIT);
                    }
                  : undefined
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}
