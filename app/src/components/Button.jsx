import { forwardRef } from "react";

const Button = forwardRef(
  ({ variant = "primary", className = "", children, ...rest }, ref) => {

    const baseStyles =
      "px-4 py-2 rounded font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";


    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
      secondary:
        "bg-gray-200 text-black hover:bg-gray-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
      danger:
        "bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300",
    };

    const variantClasses = variants[variant] || variants.primary;


    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantClasses} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;