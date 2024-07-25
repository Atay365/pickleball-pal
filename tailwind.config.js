/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "san-serif"],
        syne: ["Syne", "san-serif"],
      },
      fontSize: {
        xxs: "0.9rem",
        xs: "1.5rem",
        sm: "1.96rem",
        md: "2.74rem",
        lg: "3rem",
        xl: "3.875rem",
      },
      colors: {
        black: "#000",
        primary: "#597e52",
        secondary: "#ffffec",
        accent: "#c6a969",
        highlight: "#f1e4c3",
      },
    },
  },
  plugins: [],
};
