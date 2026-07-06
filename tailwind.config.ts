import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--brand-bg, #09090b)", 
          text: "var(--brand-text, #fafafa)",
          pink: "var(--brand-pink, #ec4899)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
