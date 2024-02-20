import { useState, useMemo, useCallback } from "react";
import { useSearchProductsQuery } from "reduxApi/api/products";
import { ProductDisplay } from "shared-components/ProductDisplay";
import { SearchInput } from "./SearchInput";
import { SkeletonCatlog } from "components/Skeletons/SkeletonCatlog";

import "./StaffPage.css";

const LIMIT = 9;

export function StaffPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const params = useMemo(() => {
    return {
      searchTerm,
      skip,
      limit: LIMIT,
    };
  }, [searchTerm, skip]);
  const { isFetching, data } = useSearchProductsQuery(params);

  const totalItemsLoaded = skip + (data ? data.products.length : 0);
  const hasMoreItems = data ? totalItemsLoaded < data.total : false;
  const isSkeletonVisible = skip === 0 && isFetching;

  const setSearch = useCallback(
    (term: string) => {
      setSearchTerm(term);
      setSkip(0);
    },
    [setSearchTerm, setSkip]
  );

  return (
    <section className="staff-page">
      <div className="staff-page__wrapper">
        <h2>All products</h2>
        <SearchInput setSearchTerm={setSearch} />
        {isSkeletonVisible && <SkeletonCatlog  isStaffPage/>}
        {data?.products && !isSkeletonVisible && (
          <ProductDisplay
            products={data.products}
            isStaffPage
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
    </section>
  );
}
