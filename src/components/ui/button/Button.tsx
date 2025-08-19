import React from "react";
import {
  buttonVariants,
  leftIconStyle,
  rightIconStyle,
  spinnerStyle,
} from "./Button.style";

// Ham de gop cac class name
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const LoadingSpinner = () => <div className={spinnerStyle}></div>;

// ?: khong bat buoc truyen du lieu
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success";
  size?: "small" | "medium" | "large";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      radius = "md",
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClass = cn(
      buttonVariants({ variant, size, radius, disabled: disabled || loading }),
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled || loading}
        {...props}
      >
        {/* conditional rendering */}
        {loading && (
          <div className={leftIconStyle}>
            <LoadingSpinner />
          </div>
        )}

        {!loading && leftIcon && (
          <div className={leftIconStyle}>{leftIcon}</div>
        )}

        {children}
        {!loading && rightIcon && (
          <div className={rightIconStyle}>{rightIcon}</div>
        )}
      </button>
    );
  }
);

// Giup debugging de hon trong ReactDevtool, hien thi ten compoent thay vi ForwardRef
Button.displayName = "Button";
