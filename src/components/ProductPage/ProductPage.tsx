import { useParams } from "react-router-dom";
import {
  Product,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "reduxApi/api/products";
import { Slider } from "shared-components/Slider";
import { SkeletonProduct } from "components/Skeletons/SkeletonProduct";

import "./ProductPage.css";
import { ProductForm } from "./ProductForm";

export function ProductPage() {
  const [updateProductMutation] = useUpdateProductMutation();
  const { id } = useParams<{ id: string }>();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(Number(id!));

  const saveChanges = (values: Product) => {
    updateProductMutation(values);
  };

  if (isLoading) return <SkeletonProduct />;

  if (isError || !product) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="product">
      <div className="product__wrapper">
        <h2>Product {product?.id}</h2>
        <div className="product__content">
          <Slider images={product.images} />
          <ProductForm
            initialValues={product}
            saveChanges={saveChanges}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
