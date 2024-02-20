import { Skeleton } from "shared-components/Skeleton";
import "./SkeletonCatlog.css";

export function SkeletonCatlog({isStaffPage}: {isStaffPage?: boolean}) {
  const cardsArray = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="skeleton-catalog">
      <div className={`skeleton-catalog__cards ${isStaffPage ? "skeleton-catalog__cards_staff" : ""}`}>
        {cardsArray.map((_, index) => (
          <div className={`skeleton-catalog__card`} key={index}>
            <div className="skeleton-catalog__image_container">
              <Skeleton className="skeleton-catalog__image" />
            </div>
            <div>
              <Skeleton className="skeleton-catalog__modelName" />
              <Skeleton className="skeleton-catalog__price" />
            </div>
          </div>
        ))}
      </div>
      <Skeleton className="skeleton-catalog__button" />
    </div>
  );
}
