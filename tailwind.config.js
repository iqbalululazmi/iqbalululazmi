const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#5A88FF',
      white: {
        pure: '#fff',
        young: '#F9F9F9',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
