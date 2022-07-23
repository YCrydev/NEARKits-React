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
        alternateDark: "#2c2e33",
        formDark: "#2a3038",
        whiteTheme: "#F1F0F0",
        fadeWhite: "#e3e3e3",
        secondaryWhite: "#F5F5F5",
        disabled: "#0d0d0d",
        primaryGrey: "#616161",
        secondaryGrey: "#c2c2c2",
      },
      borderRadius: {
        nearkits: "10px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        primary: "992px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
