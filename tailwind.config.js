module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "title-main": "28px", // 1.75rem - Heading chính (H1)
        "title-section": "24px", // 1.5rem - Heading section (H2)
        "title-card": "20px", // 1.25rem - Heading card (H3)
        "text-subtitle": "18px", // 1.125rem - Subtitle (H4)
        "body-large": "16px", // 1rem - Body text lớn
        "body-main": "15px", // 0.9375rem - Body text chính
        "body-small": "14px", // 0.875rem - Body text nhỏ
        "text-meta": "13px", // 0.8125rem - Meta, caption
        "text-tiny": "12px", // 0.75rem - Label nhỏ, badge
      },
      lineHeight: {
        "title-main": "1.2", // Tight cho headings
        "title-section": "1.3",
        "title-card": "1.4",
        "line-subtitle": "1.4",
        "line-body": "1.6", // Comfortable cho đọc
        "line-relaxed": "1.8", // Rất thoải mái
      },
      colors: {
        primary: {
          DEFAULT: "#10b981",
          hover: "#059669",
        },
        secondary: {
          DEFAULT: "#0ea5e9",
          hover: "#0284c7",
        },
        success: {
          DEFAULT: "#22c55e",
          hover: "#16a34a",
        },
        danger: {
          DEFAULT: "#ef4444",
          hover: "#dc2626",
        },
        outline: {
          DEFAULT: "#e5e7eb",
          hover: "#f9fafb",
        },
        neutral: {
          main: "#111827", //text chinh
          sub: "#4b5563", //text phu
          bg: "#f3f4f6", // background nhe
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
