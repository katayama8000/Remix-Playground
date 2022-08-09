import React from "react";
import "./button.css";

interface ButtonProps {
  disabled?: boolean;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--thirdary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
      onClick={() => {
        console.log("click");
      }}
    >
      {label}
    </button>
  );
};
