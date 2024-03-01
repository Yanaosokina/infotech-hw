import { Cards } from "shared-components/ProductDisplay/Cards";
import { Button } from "shared-components/Button";
import "./ProductDisplay.css";
import { Product } from "reduxApi/api/products";

type ProductDisplayProps = {
  products: Product[];
  onShowMore?: () => void;
  isStaffPage?: boolean;
};

export function ProductDisplay({
  products,
  onShowMore,
  isStaffPage,
}: ProductDisplayProps) {
  return (
    <div className="catalog__cards">
      <Cards products={products} isStaffPage={isStaffPage} />
      {onShowMore && (
        <Button
          type="primary"
          className="catalog__button"
          onClick={onShowMore}
          text="Show more"
        />
      )}
    </div>
  );
}
