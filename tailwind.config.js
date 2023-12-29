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
        secondaryGray: "#C3C7CE",
      },
    },
  },
  plugins: [],
};
