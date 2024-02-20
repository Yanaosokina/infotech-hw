import { Skeleton } from "shared-components/Skeleton";
import "./SkeletonProduct.css";

export function SkeletonProduct() {
  return (
    <div className="skeleton-product">
      <div className="skeleton-product__wrapper">
        <div className="skeleton-product__content">
          <div className="skeleton__slider">
            <Skeleton className="skeleton-slider__image" />
            <Skeleton className="skeleton-slider__thumbnails" />
          </div>
          <Skeleton className="skeleton-slide__product_details" />
        </div>
      </div>
    </div>
  );
}
