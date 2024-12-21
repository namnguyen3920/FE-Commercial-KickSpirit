/** @type {import('tailwindcss').Config} */

const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'login': '0 10px 20px rgba(0, 0, 0, 0.2), 0 -10px 20px rgba(0, 0, 0, 0.2), 10px 0 20px rgba(0, 0, 0, 0.2), -10px 0 20px rgba(0, 0, 0, 0.2)',
        'card': '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        'switcher':
          '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
        4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
        5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
        6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
        7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
        8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
      },
    },
    colors: {
      'body': '#64748B',
      'current': 'currentColor',
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'main-color': '#0ea5e9',
      'header-color' : '#efeff1',
      'sidebar_bg_admin' : '#074799',
      'body' : '#64748B',
      'bodydark' : '#AEB7C0',
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
      'secondary' : '#80CAEE',
      'stroke' : '#E2E8F0',
      'black': '#1C2434',
      'graydark': '#333A48',
      'whiten': '#F1F5F9',
      'whiter': '#F5F7FD',      
      'strokedark': '#2E3A47',
    },
  },
  
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "lucide"]),
    }),
    require('flowbite/plugin')
  ],
}

