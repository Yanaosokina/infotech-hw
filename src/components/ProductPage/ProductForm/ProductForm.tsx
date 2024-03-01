import { useMemo, useState } from "react";
import { ProductDetail } from "../ProductDetail";
import { Raiting } from "../Rating/Raiting";
import { Button } from "shared-components/Button";
import { Product } from "reduxApi/api/products";
import "./ProductForm.css";
import { classNames } from "utils/class-names";

type ProductFormProps = {
  initialValues: Product;
  saveChanges: (values: Product) => void;
};


export function ProductForm({
  initialValues,
  saveChanges,
}: ProductFormProps) {

  const [isEditing, setIsEditing] = useState(false);
  const [fields, setFields] = useState<Product>(initialValues);
  const className = classNames({
    "product__details": true,
    "product__details_editable": isEditing
  })

  const handleChange = (field: string, value: string | number) => {
    setFields((prevFields: Product) => {
      const newFields = {
        ...prevFields,
        [field]: value,
      };

      return newFields;
    });
  };

  const discountPrice = useMemo(() => {
    return Math.round(fields.price - fields.price * (fields.discountPercentage / 100));
  }, [fields.price, fields.discountPercentage]);


  const handleButtonClick = () => {
    if (isEditing) {
      saveChanges(fields);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={className}>
      <div className="product__title">
        <h3>{fields?.title}</h3>
        <div className="product__sku">
          <p>SKU ID</p>
          <p>{fields.id}</p>
        </div>
      </div>
      <ProductDetail label="Rating">
        <Raiting rating={fields?.rating} />
      </ProductDetail>
      <ProductDetail
        label="Base price"
        value={`${fields.price}$`}
        isEditable={isEditing}
        type="number"
        handleChange={(value) => handleChange("price", value)}
      />
      <ProductDetail
        label="Discount percentage"
        value={`${fields.discountPercentage}%`}
        isEditable={isEditing}
        type="number"
        handleChange={(value) => handleChange("discountPercentage", value)}
      />
      <ProductDetail label="Discount price">
        {discountPrice}$
      </ProductDetail>
      <ProductDetail
        label="Stock"
        type="text"
        value={fields.stock}
        isEditable={isEditing}
        handleChange={(value) => handleChange("stock", value)}
      />
      <ProductDetail
        label="Brand"
        value={fields.brand}
        isEditable={isEditing}
        type="text"
        handleChange={(value) => handleChange("brand", value)}
      />
      <ProductDetail
        label="Category"
        value={fields.category}
        isEditable={isEditing}
        type="text"
        handleChange={(value) => handleChange("category", value)}
      />
      <ProductDetail
        label="Description"
        value={fields.description}
        isEditable={isEditing}
        type="text"
        handleChange={(value) => handleChange("description", value)}
      />
      <Button
        type="primary"
        text={isEditing ? "Save" : "Edit"}
        onClick={handleButtonClick}
        className="product__button"
      />
    </div>
  );
}
