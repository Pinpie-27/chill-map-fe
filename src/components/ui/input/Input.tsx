import React from "react";
import { type VariantProps } from "class-variance-authority";
import {
  inputVariants,
  labelVariants,
  helperTextVariants,
  iconWrapperStyle,
  iconWrapperNonInteractiveStyle,
  leftIconStyle,
  rightIconStyle,
} from "./Input.style";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const IconWrapper = ({
  children,
  position,
  interactive = false,
}: {
  children: React.ReactNode;
  position: "left" | "right";
  interactive?: boolean;
}) => (
  <div
    className={cn(
      interactive ? iconWrapperStyle : iconWrapperNonInteractiveStyle,
      position === "left" ? leftIconStyle : rightIconStyle
    )}
  >
    {children}
  </div>
);

// Validation
const validateInput = (value: string, type: InputType): string | null => {
  if (!value) return null;

  switch (type) {
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value)
        ? null
        : "Please enter a valid email address";
    case "tel":
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      return phoneRegex.test(value)
        ? null
        : "Please enter a valid phone number";
    case "password":
      const pwRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,64}$/;
      return pwRegex.test(value)
        ? null
        : "Password must be 8-64 characters, include uppercase, lowercase, number, and special character";
    case "url":
      try {
        new URL(value);
        return null;
      } catch {
        return "Please enter a valid URL";
      }
    default:
      return null;
  }
};
type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  type?: InputType; // Thêm prop type tùy chỉnh
  validateOnBlur?: boolean; // Tự động validate khi blur
  showValidationHelper?: boolean; // Hiển thị helper text validation
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "medium",
      radius = "md",
      type = "text", // Default type là text
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      className,
      containerClassName,
      disabled,
      validateOnBlur = false,
      showValidationHelper = false,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [validationError, setValidationError] = React.useState<string | null>(
      null
    );
    const [touched, setTouched] = React.useState(false);

    // Xử lý blur event
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setTouched(true);

      if (validateOnBlur && type) {
        const validationResult = validateInput(e.target.value, type);
        setValidationError(validationResult);
      }

      // Gọi onBlur từ props nếu có
      onBlur?.(e);
    };

    // Determine final error message và variant
    const finalError = error || (touched && validationError) || null;
    const inputVariant = finalError ? "error" : variant;

    // Determine helper text
    const finalHelperText =
      finalError ||
      helperText ||
      (showValidationHelper && type === "email" && !touched
        ? "Enter a valid email address"
        : null) ||
      (showValidationHelper && type === "tel" && !touched
        ? "Enter your phone number"
        : null) ||
      (showValidationHelper && type === "url" && !touched
        ? "Enter a valid URL"
        : null);

    const paddingLeft = leftIcon
      ? size === "small"
        ? "pl-10"
        : size === "large"
        ? "pl-12"
        : "pl-11"
      : "";
    const paddingRight = rightIcon
      ? size === "small"
        ? "pr-10"
        : size === "large"
        ? "pr-12"
        : "pr-11"
      : "";

    return (
      <div className={cn("relative, w-full", containerClassName)}>
        {label && (
          <label
            className={labelVariants({ size, variant: inputVariant })}
            htmlFor={props.id}
          >
            {label}
            {props.required && <span className="text-danger ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <IconWrapper position="left" interactive={false}>
              {leftIcon}
            </IconWrapper>
          )}

          <input
            ref={ref}
            type={type} // Sử dụng prop type
            className={cn(
              inputVariants({ variant: inputVariant, size, radius }),
              paddingLeft,
              paddingRight,
              className
            )}
            disabled={disabled}
            aria-invalid={finalError ? "true" : "false"}
            aria-describedby={
              finalError
                ? `${props.id}-error`
                : finalHelperText
                ? `${props.id}-helper`
                : undefined
            }
            onBlur={handleBlur}
            {...props}
          />

          {rightIcon && (
            <IconWrapper position="right" interactive={true}>
              {rightIcon}
            </IconWrapper>
          )}
        </div>

        {finalHelperText && (
          <div
            id={finalError ? `${props.id}-error` : `${props.id}-helper`}
            className={helperTextVariants({
              variant: finalError ? "error" : "default",
              size,
            })}
          >
            {finalHelperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export type { InputProps, InputType };
