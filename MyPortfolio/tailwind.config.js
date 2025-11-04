/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables .dark mode support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.05)", // fixes your shadow-xs usage
      },
    },
  },
  plugins: [],
};
