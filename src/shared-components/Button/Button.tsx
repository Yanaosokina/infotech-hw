import { classNames } from "utils/class-names";
import "./button.css";

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary" | "text" | "tertiary";
  className?: string;
  onClick: () => void;
  isLoading?: boolean;
};

export function Button({
  text,
  type,
  isLoading,
  className: propClassName = "",
  onClick,
}: ButtonProps) {
  const className = classNames({
    button: true,
    button_primary: type === "primary",
    button_secondary: type === "secondary",
    button_tertiary: type === "tertiary",
    button_text: type === "text",
    [propClassName]: !!propClassName,
  });

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={text}
      disabled={isLoading}
    >
      {text}
    </button>
  );
}
