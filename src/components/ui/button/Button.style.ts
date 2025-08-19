import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium font-inter transition-all duration-200 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none touch-manipulation",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-neutral-main hover:bg-primary-hover",
        secondary: "bg-secondary text-neutral-main hover:bg-secondary-hover",
        outline: "border border-outline text-neutral-main hover:bg-neutral-bg",
        ghost: "text-neutral-main hover:bg-neutral-bg",
        danger: "bg-danger text-neutral-main hover:bg-danger-hover",
        success: "bg-success text-white hover:bg-success-hover",
      },
      size: {
        small: "h-8 px-3 text-body-small gap-1.5",
        medium: "h-10 px-4 text-body-main gap-2",
        large: "h-12 px-6 text-body-large gap-2",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm", // 2px
        md: "rounded-md", // 6px - default
        lg: "rounded-lg", // 8px
        xl: "rounded-xl", // 12px
        full: "rounded-full", // Pills/circular
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      radius: "md",
      disabled: false,
    },
  }
);

// Style loading
export const spinnerStyle =
  "aninate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full";

export const leftIconStyle = "mr-2";

export const rightIconStyle = "ml-2";

// Primary button
// Hanh dong chinh, quan trong nhat trong page/form
// CTA (Call to action) chinh: Sign up, buy now, submit
// Confirm action: save, create, update
// Chi nen co 1 primary button tren 1 screen de tranh confusion

// Secondary button
// Hanh dong phu, it quan trong hon primary
// Alternative action: "Learn More", "View Details"
// Navigation: "Go Back", "Next Step"

// Outline button
// Cancel/Decline actions: "Cancel", "Skip", "Not Now"

// Ghost button
// Actions ít quan trọng: "Edit", "Delete", "More"
// Icon buttons trong toolbar
// Dropdown triggers
// Actions trong table rows

// Danger button
// Destructive actions: "Delete", "Remove", "Uninstall"
// Permanent actions: "Delete Account", "Reset Data"
// Warning actions có thể gây mất data
// Luôn cần confirmation dialog khi dùng

// Success button
// Positive completion: "Complete Order", "Confirm Payment"
// Success actions: "Approve", "Accept", "Publish"
// Final step trong flow: "Finish Setup", "Go Live"

// Small button
// Table actions: Edit, Delete, View trong bảng
// Form controls: Add item, Remove tag
// Compact spaces: Sidebar, mobile UI
// Secondary actions: Ít quan trọng
// Inline actions: Trong text, cards nhỏ

// Medium button
// Form buttons: Submit, Cancel, Save
// General UI: Hầu hết buttons trong app
// Modal actions: OK, Cancel
// Card actions: Learn More, View Details
// Navigation: Next, Previous

// Large buton
// Landing page CTAs: Sign Up, Get Started, Buy Now
// Important actions: Cần thu hút attention
// Mobile-first: Dễ touch trên mobile
// Hero sections: Primary CTA trên page
// Checkout: Complete Purchase, Place Order
