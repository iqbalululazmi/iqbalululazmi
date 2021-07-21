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
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
      3: '0 0 33.333333%',
    },
    extend: {
      height: (theme) => ({
        1000: '1000px',
        900: '900px',
        800: '800px',
        700: '700px',
        600: '600px',
        500: '500px',
      }),
      width: (theme) => ({
        1000: '1000px',
        900: '900px',
        800: '800px',
        700: '700px',
        600: '600px',
        500: '500px',
        '32rem': '32rem',
      }),
      borderRadius: {
        100: '100px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
