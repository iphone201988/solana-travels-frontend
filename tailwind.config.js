/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["Instrument Sans", "sans-serif"],
        baskervville: ["Baskervville", "serif"],
        satisfy: ["Satisfy", "cursive"],
      },
      colors: {
        primary: "#0E276A",
        secondary: "#1C1C1C",
        darkGrey: "#555555",
        strokeColor: "#EAEAEA",
        darkMustard: "#BA8559",
        fadeBlue: "#394E85",
        blueVariation: "#566897",
      },
    },
  },
  plugins: [],
};
