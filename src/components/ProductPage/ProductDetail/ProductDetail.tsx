import { ReactNode, useEffect, useState } from "react";
import  './ProductDetail.css';

type ProductDetailProps = {
    label: string;
    isEditable?: boolean;
    handleChange?: (value: string) => void;
    value?: string | number;
    children?: ReactNode;
    type?: 'text' | 'number';
  };
  
  export const ProductDetail = ({
    label,
    value,
    isEditable,
    children,
    type,
    handleChange,
  }: ProductDetailProps) => {
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
      setInputValue(value?.toString().replace(/[%$]/g, '') ?? ''); 
    }, [value]);

    const renderInputValue = () => {
      if (label === 'Base price') {
        return `${inputValue}$`;
      } else if ( label === 'Discount percentage') {
        return `${inputValue}%`;
      }
      return inputValue;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      setInputValue(newValue);
      handleChange && handleChange(newValue);
    };

    return (
      <div className='product__detail'>
       <p className="product__detail_label">{label}</p>
        {isEditable ? (
          <input  value={inputValue} type={type} onChange={handleInputChange} className="product__detail_input" />
        ) : (
          <span className="product__detail_value">{renderInputValue()}</span>
        )}
        {children &&<div className="product__detail_children">{children}
          </div>}
      </div>
    );
  };