/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira", "sans-serif"],
      },
      colors: {
        bakublue: "#065495",
        bakubluehover: "#48759c",
      },
    },
  },
  plugins: [],
};
