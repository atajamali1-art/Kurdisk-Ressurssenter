import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#176B87",
          dark: "#104b5f",
          light: "#E0F2F1",
          accent: "#EFB036"
        }
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 20px -10px rgba(0,0,0,0.15)"
      }
    }
  },
  plugins: [],
} satisfies Config;
