/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   slideLeft:{
      //   "0%": {transform: translatex("-100%")},
      //   "100%": {transform: translatex("0")}
      //   }
      // },
      // fideLeft: "slideLeft 3s",
      colors: {
        primaryColor: "#27445D",
        socondryColor: "#71BBB2",
        textColor: "#ffffff"
      }
    },
  },
  plugins: [],
}

