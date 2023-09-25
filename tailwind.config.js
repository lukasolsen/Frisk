/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF178E",
        secondary: "#F746A1",

        blue: "#12A8F4",
      },
    },
  },
  plugins: [],
};
