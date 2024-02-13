import { classNames } from "utils/class-names";
import "./button.css";

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary" | "text" | "tertiary";
  className?: string;
  onClick: () => void;
};

export function Button({
  text,
  type,
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
    <button onClick={onClick} className={className} aria-label={text}>
      {text}
    </button>
  );
}
