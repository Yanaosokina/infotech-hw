import { Skeleton } from "shared-components/Skeleton";
import "./SkeletonCategory.css";

export function SkeletonCategory() {
  const categoriesArray = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="skeleton-category">
      
      {categoriesArray.map((_, index) => (
        <Skeleton key={index} className="skeleton-category__card" />
      ))}
    </div>
  );
}
