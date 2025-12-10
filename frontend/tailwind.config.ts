import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0f0ff",
          200: "#b8d9ff",
          300: "#7eb8ff",
          400: "#4080ff",
          500: "#1e5ddb",
          600: "#1547b8",
          700: "#0f3a94",
          800: "#0b2b7a",
          900: "#091f5e",
        },
      },
    },
  },
  plugins: [],
};

export default config;
