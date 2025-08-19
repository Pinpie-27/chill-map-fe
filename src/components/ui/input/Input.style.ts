import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "w-full rounded-md border font-inter transition-all duration-200 ease-in-out",
    "placeholder: text-neutral-sub",
    "focus:outline-none focus:ring-2 focus:ring-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-bg",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-outline bg-white text-neutral-main",
          "hover:border-outline focus:border-primary focus:ring-primary/20",
        ],
        error: [
          "border-danger bg-white text-neutral-main",
          "hover:border-danger focus:border-danger focus:ring-danger/20",
        ],
        success: [
          "border-success bg-white text-neutral-main",
          "hover:border-success focus:border-success focus:ring-success/20",
        ],
      },
      size: {
        small: "h-8 px-2.5 text-body-small",
        medium: "h-10 px-3 text-body-main",
        large: "h-12 px-4 text-body-large",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      radius: "md",
    },
  }
);

export const labelVariants = cva("block font-medium font-inter", {
  variants: {
    size: {
      small: "text-body-small mb-1",
      medium: "text-body-main mb-1.5",
      large: "text-body-large mb-2",
    },
    variant: {
      default: "text-neutral-main",
      error: "text-danger",
      success: "text-success",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "default",
  },
});

export const helperTextVariants = cva("font-inter mt-1.5", {
  variants: {
    variant: {
      default: "text-neutral-sub",
      error: "text-danger",
      success: "text-success",
    },
    size: {
      small: "text-text-tiny",
      medium: "text-text-meta",
      large: "text-body-small",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
});

// Input.style.ts
export const iconWrapperStyle =
  "absolute top-1/2 transform -translate-y-1/2 text-neutral-sub";
export const iconWrapperNonInteractiveStyle =
  "absolute top-1/2 transform -translate-y-1/2 text-neutral-sub pointer-events-none";
export const leftIconStyle = "left-3";
export const rightIconStyle = "right-3";
