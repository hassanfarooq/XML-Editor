const colors = require('tailwindcss/colors')
module.exports = {  
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          lightText: '#9a9a9a',
          DarkText: '#9a9a9a',
          lightIcon: '#737477',
          DarkIcon: '#737477',
          lightBorderUp: '#e7e7e7',
          DarkBorderUp: '#111111',
          lightBorderBottom: '#f3f3f3',
          DarkBorderBottom: '#353535',
          DarkBG: '#272a2f',
          DarkText: '#9a9a9a'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }