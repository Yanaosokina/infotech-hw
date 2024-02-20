import { Checkbox } from "shared-components/Checkbox";
import { Skeleton } from "shared-components/Skeleton";
import "./SkeletonSelectSneackers.css";

export function SkeletonSelectSneackers() {
  let selectArray = Array.from({ length: 20 }, (_, index) => index);
  return (
    <div className="skeleton-select__wrapper">
      <div className="skeleton-select__card">
        {selectArray.map((_, index) => (
          <Checkbox key={index}>
            <Skeleton className="skeleton-select"/>
          </Checkbox>
        ))}
      </div>
    </div>
  );
}
