const colors = require('tailwindcss/colors')
module.exports = {  
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          lightText: '#9a9a9a',
          DarkText: '#9a9a9a',
          lightIcon: '#5f6368',
          DarkIcon: '#737477',
          lightBorderUp: '#d2d2d2',
          DarkBorderUp: '#111111',
          lightBorderBottom: '#d2d2d2',
          DarkBorderBottom: '#353535',
          DarkBG: '#272a2f',
          DarkText: '#9a9a9a'
        },
        inset: {
          '-2': '-2px',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }