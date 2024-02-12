import React from "react";
import { classNames  } from "../../utils/class-names";
import "./button.css";

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary" | 'text' | 'tertiary';
  className?: string;
  onClick: () => void;
};

export default function Button({
  text,
  type,
  className: propClassName = "",
  onClick,
}: ButtonProps) {

  const className = classNames({
    button: true,
    button__primary: type === 'primary',
    button__secondary: type === 'secondary',
    button__tertiary: type === 'tertiary',
    button__text: type === 'text',
    [propClassName]: !!propClassName
  })

  return (
    <button onClick={onClick} className={className} aria-label={text}>
      {text}
    </button>
  );
}
