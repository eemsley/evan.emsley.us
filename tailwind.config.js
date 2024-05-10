/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      slate: colors.slate,
      white: colors.white,
      lime: colors.lime,
      teal: colors.teal,
      blue: colors.blue,
      sky: colors.sky,
      violet: colors.violet,
      primary: colors.sky,
    },
  },
  plugins: [],
};
