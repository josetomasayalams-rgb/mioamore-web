import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#5B3A32",
        cream: "#FFF7EF",
        sand: "#E8D3BD",
        nude: "#EBC6BE",
        terracotta: "#C9856B",
        warmwhite: "#FFFCF8",
        shell: "#F6E7D9",
        cocoa: "#3E2924",
        sage: "#DDE4D1",
        seafoam: "#D9EAE5",
        blush: "#F3D7D1",
        rosewood: "#A96858",
        petal: "#FFF3EE",
        champagne: "#F4E5D3",
        plum: "#7A5248",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(91, 58, 50, 0.12)",
        lift: "0 24px 80px rgba(91, 58, 50, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
