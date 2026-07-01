import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Charte RICHARD : vert vif sur vert très sombre.
      colors: {
        brand: {
          DEFAULT: "#10B981",
          bright: "#45BB1E",
          mint: "#34d399",
          dark: "#0a1a14",
          black: "#06120d",
          panel: "#0f2018",
        },
      },
    },
  },
  plugins: [],
};

export default config;
