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
        snow: '#F1F5F9',
        blog: '#EEF0F2',
      },
      green: {
        ...colors.green,
        blog: '#CBDCE1',
      },
      gray: {
        ...colors.gray,
        blog: '#C2CCD9',
      },
      indigo: {
        ...colors.indigo,
        blog: '#BACDFC',
      },
    },
    extend: {
      height: (theme) => ({
        blog: '800px',
        post: '600px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
