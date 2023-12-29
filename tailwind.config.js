/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
      },
      colors: {
        primary: "#A1A5FF",
        primaryLight: "#EAECF8",
        secondaryGray: "#C3C7CE",
        cardGray: "#F3F4F7",
      },
      boxShadow: {
        primaryBlur: "rgba(161, 165, 255, 0.5) 0px 5px 20px",
      },
    },
  },
  plugins: [],
};
