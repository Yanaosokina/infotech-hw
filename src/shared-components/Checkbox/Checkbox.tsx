import { useState, ReactNode } from "react";
import { classNames } from "utils/class-names";
import "./checkbox.css";

type CheckboxProps = {
  children: ReactNode;
  onChange?: (value: boolean) => void;
  isChecked?: boolean
  
};

const CheckboxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

export function Checkbox({ children, onChange, isChecked}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked || false);
  const className = classNames({
    checkbox: true,
    checkbox_checked: checked,
  });

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="checkbox__input"
      />
      <div className="checkbox__icon">
        {checked && <CheckboxIcon />}
      </div>
      <span className="checkbox__text">{children}</span>
    </label>
  );
}
