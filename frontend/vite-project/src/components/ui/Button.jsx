import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

/**
 * Reusable Button component (Tailwind + clsx)
 * Props:
 *  - variant: "primary" | "outline" | "danger" | "success"
 *  - size: "sm" | "md" | "lg"
 *  - children: content inside the button
 *  - className: extra Tailwind classes (optional)
 *  - onClick: click handler
 *  - type: "button" | "submit" | "reset"
 */
const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none";

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg",
    outline:
      "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg",
    success:
      "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled && disabledStyles,
        className
      )}
    >
      {children}
    </button>
  );
};

// Type safety
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outline", "danger", "success"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;
