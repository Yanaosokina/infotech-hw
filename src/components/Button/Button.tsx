import React from "react";
import "./button.css";

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
  onClick: () => void;
};

export default function Button({
  text,
  type,
  className = "",
  onClick,
}: ButtonProps) {
  const buttonClass = `button ${
    type === "primary"
      ? "primaryButton"
      : type === "secondary"
      ? "secondaryButton"
      : ""
  }`;

  return (
    <button onClick={onClick} className={`${buttonClass} ${className}`}>
      {text}
    </button>
  );
}
