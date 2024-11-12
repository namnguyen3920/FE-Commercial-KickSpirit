/** @type {import('tailwindcss').Config} */

const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      boxShadow: {
        'login': '0 10px 20px rgba(0, 0, 0, 0.2), 0 -10px 20px rgba(0, 0, 0, 0.2), 10px 0 20px rgba(0, 0, 0, 0.2), -10px 0 20px rgba(0, 0, 0, 0.2)',
      },
    },
    colors: {
      'main-color': '#0ea5e9',
      'header-color' : '#efeff1',
    },
    
  },
  
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "lucide"]),
    }),
  ],
}

