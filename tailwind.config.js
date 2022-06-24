/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBase: "#252b3e",
        primaryDark: "#191c24",
        purpleBase: "#8f5fe8",
        darkText: "#6c7293 ",
        active: "#0f1015",
        secondaryDark: "#101115",
        primaryGreen: "#00d25b",
        primaryYellow: "#ffab00",
        primaryRed: "#fc424a",
        primaryBlue: "#0090e7",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
