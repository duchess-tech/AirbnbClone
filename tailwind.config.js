/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "ash": "rgb(235, 235, 235)",
        "ash2": "rgb(137,137,137)"
      },
    },

  },
  plugins: [],
})

