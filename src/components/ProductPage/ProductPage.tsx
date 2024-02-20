import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "reduxApi/api/products";
import { Slider } from "shared-components/Slider";
import { SkeletonProduct } from "components/Skeletons/SkeletonProduct";
import { Raiting } from "./Raiting";

import "./ProductPage.css";

type ProductDetailProps = {
  label: string;
  children: ReactNode;
};

const ProductDetail = ({ label, children }: ProductDetailProps) => {
  return (
    <p className="product__detail">
      {label} <span className="product__detail_value">{children}</span>
    </p>
  );
};

export function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(Number(id!));

  if (isLoading) return <SkeletonProduct />;

  if (isError || !product) {
    return <div>Something went wrong</div>;
  }

  const discountPrice = Math.round(
    product.price - product.price * (product.discountPercentage / 100)
  );

  return (
    <div className="product">
      <div className="product__wrapper">
        <h2>Product {product?.id}</h2>
        <div className="product__content">
          <Slider images={product.images} />
          <div className="product__details">
            <div className="product__title">
              <h3>{product?.title}</h3>
              <div>
                <ProductDetail label="SKU">{id}</ProductDetail>
              </div>
            </div>
            <ProductDetail label="Rating">
              <Raiting rating={product?.rating} />
            </ProductDetail>
            <ProductDetail label="Base price">{product?.price}$</ProductDetail>
            <ProductDetail label=" Discount percentage">
              {product?.discountPercentage}%
            </ProductDetail>
            <ProductDetail label="Discount price">
              {discountPrice} $
            </ProductDetail>
            <ProductDetail label="Stock">{product?.stock}</ProductDetail>
            <ProductDetail label="Brand">{product?.brand}</ProductDetail>
            <ProductDetail label="Category">{product?.category}</ProductDetail>
            <ProductDetail label="Description">
              {product?.description}
            </ProductDetail>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
