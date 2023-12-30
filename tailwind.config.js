/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        900: "montserrat-900",
        700: "montserrat-700",
        400: "montserrat-400",
      },
      colors: {
        highlight: "#F2644E",
        lightgray: "#4B4B4B",
        dark: "#1E1E1E",
      },
    },
  },
  plugins: [],
});
